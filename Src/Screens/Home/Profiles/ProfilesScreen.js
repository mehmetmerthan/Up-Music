import { FlatList, ActivityIndicator } from "react-native";
import { React, useEffect, useState } from "react";
import { API } from "aws-amplify";
import { listUsers } from "../../../Utils/Queries/userProfileQueries";
import PostUser from "../../../Components/PostComponents/PostUser";
import ProfilesHeader from "../../../Components/PostComponents/Headers/ProfilesHeaders/ProfilesHeader";
import { useRoute } from "@react-navigation/native";
import { USER_TYPES } from "../../../../Constants/Enums/UserTypes";
export default function ProfilesScreen() {
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
      user_type: { eq: USER_TYPES.PERSONAL },
    };
    let updatedFilter;
    if (filter) {
      updatedFilter = {
        ...filter,
        ...additionalFilter,
      };
    } else {
      updatedFilter = {
        ...additionalFilter,
      };
    }
    try {
      const variables = {
        limit: 5,
        filter: updatedFilter,
        nextToken: postNextToken,
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
      renderItem={({ item, index }) => <PostUser item={item} index={index} />}
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
      ListHeaderComponent={<ProfilesHeader />}
      keyboardShouldPersistTaps="always"
    />
  );
}
