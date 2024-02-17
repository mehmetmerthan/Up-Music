import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    margin: 10,
    padding: 10,
  },
  containerPlace: {
    flex: 1,
  },
  locationInputPlace: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#ccc",
    backgroundColor: "#ffffff00",
    height: 40,
    marginBottom: 16,
  },
  button: {
    borderRadius: 10,
    alignSelf: "center",
    width: "50%",
    marginBottom: 20,
  },
  locationInput: {
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: "#ccc",
    backgroundColor: "#ffffff00",
  },
  buttonContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 20,
  },
  buttonPropertySave: {
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: "#008000",
  },
  buttonPropertyCancel: {
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: "#ff0000",
    marginLeft: 20,
  },
  baseText: {
    fontSize: 20,
    fontWeight: "400",
    color: "#7b7b7bff",
    alignSelf: "center",
    marginBottom: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
});

export default styles;
