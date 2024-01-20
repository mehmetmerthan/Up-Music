import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "space-between",
  },
  genderContainer: {
    marginBottom: 150,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "400",
    fontStyle: "italic",
    marginTop: 100,
    justifyContent: "center",
    textAlign: "center",
    borderBottomWidth: 0.5,
    paddingBottom: 10,
    borderBottomColor: "#838383",
  },
  subText: {
    fontSize: 20,
    fontWeight: "300",
    marginVertical: 16,
    justifyContent: "flex-start",
    textAlign: "left",
  },

  pageViewContainer: {
    flexDirection: "row",
    marginBottom: 26,
    marginTop: 26,
    justifyContent: "center",
  },
  pageViewEmpty: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderColor: "#000000",
    borderWidth: 1,
    backgroundColor: "#ffffff",
    marginHorizontal: 8,
  },
  pageViewFill: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderColor: "#000000",
    borderWidth: 1,
    backgroundColor: "#000000",
    marginHorizontal: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    width: "100%",
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
    resizeMode: "contain",
    alignSelf: "center",
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 10,
  },
  button: {
    borderRadius: 10,
    alignSelf: "center",
    width: "50%",
    marginVertical: 20,
  },
});

export default styles;
