import { FlatList } from 'react-native'
import { React, useEffect, useState } from 'react'
import { API, graphqlOperation } from "aws-amplify";
import { listPosts } from "../../Utils/Queries/postQueries";
import MainPost from "./PostTypes/MainPost";
export default function ListPost() {
    const [postData, setPostData] = useState([]);
    useEffect(() => {
        fetchPost();
    }, [])
    const fetchPost = async () => {
        try {
            const postData = await API.graphql(graphqlOperation(listPosts));
            const postList = postData.data.listPosts.items;
            setPostData(postList);
        } catch (e) {
            console.log(e);
        }
        console.log(postData);
    };
    return (
        <FlatList
            data={postData}
            renderItem={({ item, index }) => <MainPost post={item} index={index} />}
            keyExtractor={(item) => item.id}
        />
    )
}
