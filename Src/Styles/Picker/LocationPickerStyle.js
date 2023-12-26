import { StyleSheet } from "react-native";
import Constants from "expo-constants";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: Constants.statusBarHeight,
  },
  locationInput: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 20,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
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
});

export default styles;
