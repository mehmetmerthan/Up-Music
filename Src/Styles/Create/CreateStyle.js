import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  column: {
    flex: 1,
    borderWidth: 1.5,
    borderColor: "#4a4a4a",
  },
  icon: {
    alignSelf: "center",
    width: 180,
    height: 180,
    marginTop: 5,
    borderRadius: 10,
  },
  decsriptionText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "300",
    //padding: 5,
    color: "#fff",
  },
  textContainer: {
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#747474ff",
    borderRadius: 10,
    backgroundColor: "#747474ff",
    padding: 5,
    marginHorizontal: 5,
    marginBottom: 5,
    marginTop: 2,
  },
});

export default styles;
