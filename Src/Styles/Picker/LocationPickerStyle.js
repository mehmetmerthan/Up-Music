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
  buttonStyle: {
    borderRadius: 10,
    alignSelf: "center",
    width: "50%",
    marginBottom: 50,
  },
});

export default styles;
