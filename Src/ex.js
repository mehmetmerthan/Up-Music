import { SafeAreaView, Button, Text } from 'react-native'
import { React, useState } from 'react'
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from './graphql/queries';
import { listPosts } from "./Utils/Queries/postQueries";
export default function Ex() {
    return (
        <SafeAreaView>
            <Text>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</Text>
            <Button title='x' onPress={x} />
        </SafeAreaView>
    )
}

async function x() {
    try {
        const postData = await API.graphql(graphqlOperation(listPosts));
        const postList = postData.data.listPosts.items[0];
        console.log(postList.likes.items.length);
    } catch (e) {
        console.log(e);
    }

}