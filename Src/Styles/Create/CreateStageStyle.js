import { StyleSheet } from "react-native";
import Constants from "expo-constants";
const styles = StyleSheet.create({
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
  priceInput: {
    height: 40,
    width: "50%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: "#ccc",
    alignSelf: "center",
  },
  header: {
    fontSize: 20,
    margin: 12,
    marginTop: 50,
    alignSelf: "center",
  },
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
});

export default styles;
