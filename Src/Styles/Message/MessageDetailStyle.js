import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
    },
    input: {
        height: 40,
        width: "90%",
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        borderColor: "#ccc",
        alignSelf: "center",
    },
    message: {
        margin: 12,
        padding: 10,
        borderRadius: 10,
        borderColor: "#ccc",
        alignSelf: "flex-start",
        backgroundColor: "#ccc",
        textAlign: "center",
    },
    firstMessage: {
        alignSelf: "flex-start",
    },
    SecondMessages: {
        alignSelf: "flex-end",
    },
    avatarContainerLeft: {
        flexDirection: "column",
        alignItems: "flex-start",
        marginBottom: 10,
    },
    avatarContainerRight: {
        flexDirection: "column",
        alignItems: "flex-end",
        marginBottom: 10,
        backgroundColor: "#cccccc29",
    },
    avatarContainer: {
        flexDirection: "column",
        marginHorizontal: 10,
        marginVertical: 10,
        justifyContent: "center",
        alignContent: "center",

    },
    avatar: {

    },
    username: {
        fontSize: 10,
        marginBottom: 5,
    },
    messageContainerFirst: {
        flexDirection: "row",
        marginVertical: 5,
    },
    messageContainerSecond: {
        flexDirection: "row-reverse",
        marginVertical: 5,
        backgroundColor: "#cccccc29",
    },
});

export default styles;
