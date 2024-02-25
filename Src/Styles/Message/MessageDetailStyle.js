import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    width: "90%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: "#ccc",
    alignSelf: "center",
  },
  clickText: {
    color: "blue",
    textDecorationLine: "underline",
  },
  messageContainer: {},
  typeArea: {
    margin: 12,
    padding: 10,
    borderRadius: 10,
    borderColor: "#ccc",
    alignSelf: "flex-start",
    backgroundColor: "#ccc",
    textAlign: "center",
  },
  messageSender: {
    alignSelf: "flex-start",
    flexDirection: "row",
    margin: 10,
  },
  messageReceiever: {
    alignSelf: "flex-end",
    flexDirection: "row-reverse",
    margin: 10,
  },
  message: {
    fontSize: 15,
    margin: 5,
  },
  userInfo: {
    alignItems: "center",
  },
  username: {
    fontWeight: "400",
    fontSize: 10,
    textTransform: "uppercase",
    color: "#464646",
    letterSpacing: 1,
    marginBottom: 5,
  },
  createdAt: {
    fontSize: 10,
    color: "#464646",
    alignSelf: "flex-end",
    letterSpacing: 1,
    marginTop: 5,
  },
});

export default styles;
