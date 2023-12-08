import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'space-between',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 100,
        justifyContent: 'center',
        textAlign: 'center',
    },
    pageViewContainer: {
        flexDirection: 'row',
        marginBottom: 26,
        marginTop: 26,
        justifyContent: 'center',
    },
    pageViewEmpty: {
        width: 10,
        height: 10,
        borderRadius: 5,
        borderColor: '#000000',
        borderWidth: 1,
        backgroundColor: '#ffffff',
        marginHorizontal: 8,
    },
    pageViewFill: {
        width: 10,
        height: 10,
        borderRadius: 5,
        borderColor: '#000000',
        borderWidth: 1,
        backgroundColor: '#000000',
        marginHorizontal: 8,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 26,
    },
    buttonLeft: {
        backgroundColor: 'lightgray',
        padding: 12,
        borderRadius: 8,
        flex: 1,
        marginHorizontal: 50,
        alignItems: 'center',
    },
    buttonRight: {
        backgroundColor: 'blue',
        padding: 12,
        borderRadius: 8,
        flex: 1,
        marginHorizontal: 50,
        alignItems: 'center',
    },
    buttonStart: {
        backgroundColor: 'blue',
        padding: 12,
        borderRadius: 8,
        flex: 1,
        marginHorizontal: 120,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    image: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    input: {
        height: 40,
        width: "80%",
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        borderColor: "#ccc",
        alignSelf: "center",
    },
});

export default styles;