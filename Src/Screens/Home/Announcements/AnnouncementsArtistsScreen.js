import { FlatList, ActivityIndicator } from "react-native";
import { React, useEffect, useState } from "react";
import { API } from "aws-amplify";
import { postsByDate } from "../../../Utils/Queries/postQueries";
import Post from "../../../Components/PostComponents/Post";
import AnnouncementsArtistsHeader from "../../../Components/PostComponents/Headers/AnnouncementsHeaders/AnnouncementsArtistsHeader";
import { useRoute } from "@react-navigation/native";
export default function AnnouncementsArtistsScreen() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [postNextToken, setPostNextToken] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const route = useRoute();
  const { filter } = route?.params || {};
  const fetchItems = async () => {
    if (loading || refreshing) return;
    setLoading(true);
    const additionalFilter = { post_type: { eq: "artist_post" } };
    const updatedFilter = filter
      ? { ...filter, or: [...filter.or, additionalFilter] }
      : { or: additionalFilter };
    try {
      const variables = {
        limit: 1,
        nextToken: postNextToken,
        type: "post",
        sortDirection: "DESC",
        filter: updatedFilter,
      };
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
      renderItem={({ item, index }) => <Post item={item} index={index} />}
      keyExtractor={(item) => item.id}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.5}
      ListFooterComponent={loading && <ActivityIndicator />}
      onRefresh={() => {
        setRefreshing(true);
        setPostNextToken(null);
        fetchItems();
      }}
      refreshing={refreshing}
      ListHeaderComponent={<AnnouncementsArtistsHeader />}
      keyboardShouldPersistTaps="always"
    />
  );
}
