import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 1,
    borderColor: "#ccc",
    margin: 10,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  username: {
    marginLeft: 10,
    fontWeight: "bold",
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  contentText: {
    marginTop: 40,
    fontSize: 15,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    paddingBottom: 10,
  },
  contentImage: {
    width: "100%",
    height: 400,
    marginTop: 10,
    borderRadius: 5,
    resizeMode: "cover",
  },
  contentVideo: {
    width: "100%",
    height: 200,
    marginTop: 10,
  },
  actionContainer: {
    flexDirection: "row",
    marginTop: 5,
    padding: 5,
  },
  likeContainer: {
    marginRight: 20,
  },
  likeText: {
    marginTop: 2,
    marginLeft: 5,
    fontSize: 16,
  },
  likeCount: {
    marginTop: 2,
    marginLeft: 5,
    fontSize: 16,
    fontWeight: "bold",
  },
  commentContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  commentText: {
    marginLeft: 5,
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
  },
  tag: {
    backgroundColor: "#e0e0e0",
    padding: 10,
    borderRadius: 5,
    marginRight: 5,
  },
  lineSeparator: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginTop: 10,
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
});

export default styles;
