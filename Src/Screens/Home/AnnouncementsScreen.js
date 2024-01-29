import { FlatList, ActivityIndicator } from "react-native";
import { React, useEffect, useState } from "react";
import { API } from "aws-amplify";
import { postsByDate } from "../../Utils/Queries/postQueries";
import Post from "../../Components/PostComponents/Post";
import PostHeaderComponent from "../../Components/PostComponents/PostHeaderComponent";
import { useRoute } from "@react-navigation/native";
export default function AnnouncementsScreen() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [postNextToken, setPostNextToken] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const route = useRoute();
  const { filter } = route?.params || {};
  const fetchItems = async () => {
    if (loading || refreshing) return;
    console.log("fetchItems running");
    setLoading(true);
    try {
      console.log("filter in fetchItems", filter);
      const variables = {
        limit: 1,
        nextToken: postNextToken,
        type: "post",
        sortDirection: "DESC",
        filter: filter,
      };
      console.log("variables", variables);
      const result = await API.graphql({
        query: postsByDate,
        variables: variables,
      });
      const newItems = result?.data?.postsByDate?.items;
      const newNextToken = result?.data?.postsByDate?.nextToken;
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
    console.log("useEffect running");
    console.log("filter", filter);
    setItems([]);
    setPostNextToken(null);
    fetchItems();
  }, [filter]);

  const handleLoadMore = async () => {
    console.log("handleLoadMore running");
    if (!loading && postNextToken && !refreshing) {
      console.log("handleLoadMore centered");
      await fetchItems();
    }
  };
  return (
    <FlatList
      data={items}
      renderItem={({ item, index }) => <Post item={item} index={index} />}
      keyExtractor={(item) => item.id}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.5}
      ListFooterComponent={loading && <ActivityIndicator />}
      onRefresh={() => {
        console.log("onRefresh running");
        setRefreshing(true);
        setPostNextToken(null);
        fetchItems();
      }}
      refreshing={refreshing}
      ListHeaderComponent={<PostHeaderComponent filter={filter} />}
      keyboardShouldPersistTaps="always"
    />
  );
}
