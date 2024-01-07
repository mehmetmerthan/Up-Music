import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'space-between',
    },
    genderContainer: {
        marginBottom: 150,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 100,
        justifyContent: 'center',
        textAlign: 'center',
    },
    subText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 16,
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
        borderRadius: 8,
        marginLeft: 50,
    },
    buttonRight: {
        borderRadius: 8,
        marginRight: 50,
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