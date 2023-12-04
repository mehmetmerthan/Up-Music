import { StyleSheet } from "react-native";
import Constants from "expo-constants";
const styles = StyleSheet.create({
    locationContainer: {
        height: "90%",
        backgroundColor: "white",
        shadowColor: "black",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        padding: 8,
        borderRadius: 10,
        top: Constants.statusBarHeight,
        marginHorizontal: 10,
    },
    locationInput: {
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        margin: 10,
        shadowColor: "black",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonStyle: {
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 10,
    },
    titleStyle: {
        color: "black",
    },
    buttonContainer: {
        marginHorizontal: 70,
        marginVertical: 10,
    },
});

export default styles;