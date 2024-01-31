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
    fontWeight: "400",
    fontSize: 20,
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
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
  },
  tagsContainerRoles: {
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 15,
  },
  tag: {
    marginRight: 5,
    borderColor: "#929292",
  },
  tagRole: {
    marginRight: 5,
  },
  tagText: {
    color: "#464646",
    fontSize: 12,
  },
  tagTextRole: {
    color: "#464646",
  },
  section: {
    alignSelf: "flex-start",
  },
  sectionHeadingText: {
    marginTop: 10,
    fontWeight: "400",
    fontSize: 14,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    paddingBottom: 5,
    textTransform: "uppercase",
    color: "#464646",
    letterSpacing: 0.5,
  },
  icon: {
    marginLeft: 25,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  userContent: {
    flexDirection: "column",
  },
  userRow: {
    flexDirection: "row",
    marginLeft: 15,
  },
});

export default styles;
