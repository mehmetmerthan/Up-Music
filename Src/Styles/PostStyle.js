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
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
  },
  tag: {
    marginRight: 5,
  },
  tagText: {
    color: "#464646",
  },
  section: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#ccc",
    margin: 10,
    backgroundColor: "#f2f2f2",
  },
  sectionHeadingText: {
    marginTop: 20,
    marginBottom: 10,
    fontWeight: "400",
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    paddingBottom: 5,
    textTransform: "uppercase",
    color: "#464646",
    letterSpacing: 1,
    alignSelf: "flex-start",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    fontWeight: "300",
    fontSize: 14,
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  placeText: {
    marginLeft: 20,
    fontWeight: "300",
    fontSize: 20,
    letterSpacing: 1,
    textTransform: "uppercase",
    textAlign: "center",
  },
  column: {
    flexDirection: "column",
    marginRight: 10,
    alignItems: "center",
  },
});

export default styles;
