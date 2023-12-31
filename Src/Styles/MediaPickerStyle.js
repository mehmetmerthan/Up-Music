import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    margin: 12,
    marginTop: 50,
    alignSelf: "center",
  },
  mediaButton: {
    margin: 12,
    borderWidth: 0.5,
    padding: 10,
    alignSelf: "center",
    borderRadius: 10,
    borderColor: "#ccc",
  },
  image: {
    width: 300,
    height: 300,
    alignSelf: "center",
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#ccc",
    padding: 100,
    resizeMode: "cover",
  },
});

export default styles;