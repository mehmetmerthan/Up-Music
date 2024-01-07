import { React, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "@rneui/themed";
import FilterScreen from "./Screens/FilterScreen";
export default function Ex() {
  const [location, setLocation] = useState(null);
  function showLocation() {
    console.log("location: ", location);
  }
  return (
    <View style={styles.container}>
      <FilterScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
/*

    <View>
      {filterVisible ? (
        <>
          <FilterScreen setSelectedFilter={setSelectedFilter} />
          <Button title={closeFilter} onPress={closeFilter} />
        </>
      ) : (
        <>
          <Button title={showFilter} onPress={showFilter} />
          <Button title={showFilterData} onPress={showFilterData} />
        </>
      )}
    </View>
*/
/*
export default function Ex() {
  const fetchPost = async () => {
    try {
      const postData = await API.graphql({ query: listPosts });
      const newPosts = postData.data.listPosts.items;
      console.log("posts: ", newPosts);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchPost();
  }, []);
}
*/

/*

import { FlatList, View } from "react-native";
import { React, useEffect, useState } from "react";
import { API } from "aws-amplify";
import { listPosts } from "../../Utils/Queries/postQueries";
import MainPost from "./PostTypes/MainPost";
import EventPost from "./PostTypes/EventPost";
import GroupPost from "./PostTypes/GroupPost";
import MusicianPost from "./PostTypes/MusicianPost";
import ProfPost from "./PostTypes/ProfPost";
import StagePost from "./PostTypes/StagePost";
import FilterScreen from "../../Screens/FilterScreen";
import { Button } from "@rneui/themed";
export default function ListPost({ type }) {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [postNextToken, setPostNextToken] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState({});
  const [postType, setPostType] = useState(type);
  const fetchPost = async () => {
    // if (loading) return;
    // setLoading(true);
    // try {
    //   const variables = {
    //     limit: 10,
    //     sortDirection: "DESC",
    //     sortField: "createdAt",
    //     nextToken: postNextToken,
    //     filter: {
    //       postType: {
    //         eq: myPostType,
    //       },
    //     },
    //   };
    //   const postData = await API.graphql({ query: listPosts, variables });
    //   const newPosts = postData.data.listPosts.items;
    //   const newNextToken = postData.data.listPosts.nextToken;
    //   setPostData([...postData, ...newPosts]);
    //   setPostNextToken(newNextToken);
    // } catch (e) {
    //   console.log(e);
    // }
    // setLoading(false);
  };
  useEffect(() => {
    fetchPost();
  }, []);
  const renderPostItem = ({ item }) => {
    switch (postType) {
      case "MainPost":
        return <MainPost postData={item} />;
      case "EventPost":
        return <EventPost postData={item} />;
      case "GroupPost":
        return <GroupPost postData={item} />;
      case "MusicianPost":
        return <MusicianPost postData={item} />;
      case "ProfPost":
        return <ProfPost postData={item} />;
      case "StagePost":
        return <StagePost postData={item} />;
      case "FilterScreen":
        return <FilterScreen setSelectedFilter={setSelectedFilter} />;
      default:
        return null;
    }
  };
  function navigateToFilter() {
    navigation.navigate("FilterScreen");
  }
  function x() {
    setPostType("FilterScreen");
  }
  function x2() {
    setPostType("MainPost");
  }
  function x3() {
    console.log("selectedFilter: ", selectedFilter);
  }
  return (
    <View>
      <Button title={x} onPress={x} />
      <Button title={x2} onPress={x2} />
      <Button title={x3} onPress={x3} />
    </View>
  );
}

/*
      <FlatList
        data={postData}
        renderItem={renderPostItem}
        keyExtractor={(item) => item.id}
        onEndReached={fetchPost}
        onEndReachedThreshold={0.5}
      />
*/
