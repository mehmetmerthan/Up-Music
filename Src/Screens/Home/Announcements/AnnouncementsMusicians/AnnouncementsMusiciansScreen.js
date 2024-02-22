import { FlatList, ActivityIndicator } from "react-native";
import { React, useEffect, useState } from "react";
import { API } from "aws-amplify";
import { postsByDate } from "../../../../Utils/Queries/postQueries";
import Post from "../../../../Components/PostComponents/Post";
import AnnouncementsMusiciansHeader from "../../../../Components/PostComponents/Headers/AnnouncementsHeaders/AnnouncementsMusiciansHeader/AnnouncementsMusiciansHeader";
import { useRoute } from "@react-navigation/native";
import { POST_TYPES } from "../../../../../Constants/Enums/PostTypes";
export default function AnnouncementsMusiciansScreen() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [postNextToken, setPostNextToken] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const route = useRoute();
  const { filter } = route?.params || {};
  const fetchItems = async () => {
    if (loading || refreshing) return;
    setLoading(true);
    const additionalFilters = [
      { tag_roles: { eq: POST_TYPES.MUSICIAN_FOR_COLLABORATE } },
      { tag_roles: { eq: POST_TYPES.MUSICIAN_FOR_BAND } },
    ];
    const updatedFilter = filter
      ? { ...filter, or: [...filter.or, ...additionalFilters] }
      : { or: additionalFilters };
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
      ListHeaderComponent={<AnnouncementsMusiciansHeader />}
      keyboardShouldPersistTaps="always"
    />
  );
}
