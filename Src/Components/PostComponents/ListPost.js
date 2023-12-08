import { FlatList } from 'react-native'
import { React, useEffect, useState } from 'react'

function ListMainPost() {
    const [postList, setPostList] = useState([])
    useEffect(() => {
        // fetch data from server
        // setPostList(data)
    }, [])
    return (
        <FlatList
            data={postList}
            renderItem={({ item }) => <Posts item={item} />}
            keyExtractor={(item) => item.id}
        />
    )
}

export { ListMainPost }