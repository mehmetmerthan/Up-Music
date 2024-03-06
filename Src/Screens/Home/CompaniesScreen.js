import { FlatList, ActivityIndicator } from "react-native";
import { React, useEffect, useState } from "react";
import { API } from "aws-amplify";
import { listUsers } from "../../Utils/Queries/userProfileQueries";
import PostCompany from "../../Components/PostComponents/PostCompany";
import { useRoute } from "@react-navigation/native";
import { USER_TYPES } from "../../../Constants/Enums/UserTypes";
export default function CompaniesScreen() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [postNextToken, setPostNextToken] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const route = useRoute();
  const { filter } = route?.params || {};
  const fetchItems = async () => {
    if (loading || refreshing) return;
    setLoading(true);
    const additionalFilter = {
      user_type: { eq: USER_TYPES.COMPANY },
    };
    let updatedFilter;
    if (filter) {
      updatedFilter = {
        and: [filter, additionalFilter],
      };
    } else {
      updatedFilter = additionalFilter;
    }
    try {
      const variables = {
        limit: 2,
        nextToken: postNextToken,
        filter: updatedFilter,
      };
      const result = await API.graphql({
        query: listUsers,
        variables: variables,
      });
      const newItems = result?.data?.listUsers?.items;
      const newNextToken = result?.data?.listUsers?.nextToken;
      setItems((prevItems) =>
        postNextToken ? [...prevItems, ...newItems] : newItems
      );
      setPostNextToken(newNextToken);
    } catch (error) {
      console.error("error fetching items", error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    setItems([]);
    setPostNextToken(null);
    const fetchData = async () => {
      await fetchItems();
    };
    fetchData();
  }, [JSON.stringify(filter)]);

  const handleLoadMore = async () => {
    if (!loading && postNextToken && !refreshing) {
      await fetchItems();
    }
  };
  return (
    <FlatList
      decelerationRate={0.8}
      data={items}
      renderItem={({ item, index }) => (
        <PostCompany item={item} index={index} />
      )}
      keyExtractor={(item) => item.id}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={loading && <ActivityIndicator />}
      onRefresh={() => {
        setRefreshing(true);
        setPostNextToken(null);
        fetchItems();
      }}
      refreshing={refreshing}
      keyboardShouldPersistTaps="always"
    />
  );
}
