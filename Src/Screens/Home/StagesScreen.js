import { FlatList, ActivityIndicator } from "react-native";
import { React, useEffect, useState } from "react";
import { API } from "aws-amplify";
import { listUsers } from "../../Utils/Queries/userProfileQueries";
import { useRoute } from "@react-navigation/native";
import { USER_TYPES } from "../../../Constants/Enums/UserTypes";
import PostCompany from "../../Components/PostComponents/PostCompany";
export default function StagesScreen() {
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
      user_type: { eq: USER_TYPES.VENUE },
    };
    const updatedFilter = filter
      ? { ...filter, or: [...filter.or, additionalFilter] }
      : additionalFilter;

    try {
      const variables = {
        limit: 5,
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
    fetchItems();
  }, [filter]);

  const handleLoadMore = async () => {
    if (!loading && postNextToken && !refreshing) {
      await fetchItems();
    }
  };
  return (
    <FlatList
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
