import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  messageText: {
    margin: 12,
    padding: 10,
    borderRadius: 10,
    borderColor: "#ccc",
    alignSelf: "flex-start",
    backgroundColor: "#ccc",
    textAlign: "center",
  },
  messageOwnerText: {
    margin: 12,
    padding: 10,
    borderRadius: 10,
    borderColor: "#ccc",
    alignSelf: "flex-end",
    backgroundColor: "#f0f0f0",
    textAlign: "center",
  },
  avatarContainer: {
    flexDirection: "row",
    margin: 10,
    justifyContent: "center",
    alignContent: "center",
  },
  username: {
    fontWeight: "400",
    fontSize: 14,
    textTransform: "uppercase",
    color: "#464646",
    letterSpacing: 1,
  },
});

export default styles;
