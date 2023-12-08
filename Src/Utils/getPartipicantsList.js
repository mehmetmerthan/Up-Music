import { API, graphqlOperation } from 'aws-amplify';
//import { listTodos } from './graphql/queries';
import { Image, StyleSheet } from 'react-native';

export default async function getPartipicantsList() {
    const item = await API.graphql(graphqlOperation());
    const userList = item.data.listTodos.items;
    const partipicantsList = userList.map((user) => {
        return {
            label: user.name,
            value: user.id,
            icon: () => (
                <Image
                    source={{ uri: user.profileImage }}
                    style={dropdownStyles.iconStyle}
                />
            ),
        };
    });
    return { partipicantsList };
}

const dropdownStyles = StyleSheet.create({
    iconStyle: {
        width: 30,
        height: 30,
        borderRadius: 15,
    },
});