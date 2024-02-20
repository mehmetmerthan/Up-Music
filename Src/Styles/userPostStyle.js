import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 1,
    borderColor: "#ccc",
    margin: 10,
  },
  username: {
    color: "#f1f1f1",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    zIndex: 2,
  },
  locationText: {
    marginLeft: 4,
    color: "#ffffff",
    fontSize: 15,
    textAlign: "center",
    opacity: 0.7,
  },
  contentText: {
    marginTop: 40,
    fontSize: 15,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    paddingBottom: 10,
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
  },
  tag: {
    marginRight: 5,
    borderColor: "#929292",
  },
  tagText: {
    color: "#464646",
    fontSize: 16,
  },
  section: {
    flexDirection: "column",
  },
  tagArea: {
    alignItems: "center",
    marginTop: 20,
  },
  sectionHeadingTextRole: {
    marginTop: 10,
    fontWeight: "400",
    fontSize: 15,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    paddingBottom: 5,
    textTransform: "uppercase",
    color: "#464646",
    textAlign: "left",
    alignSelf: "flex-start",
  },
  tagTextRole: {
    color: "#464646",
    fontSize: 13,
  },
  sectionRole: {
    flexDirection: "column",
  },
  tagAreaRole: {
    alignItems: "flex-start",
    marginTop: 20,
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
    textAlign: "center",
  },
  icon: {
    marginLeft: 5,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  userInfo: {
    alignItems: "center",
  },
  profileNameContainer: {
    position: "absolute",
    bottom: -20,
    padding: 10,
    borderRadius: 15,
    backgroundColor: "#303030e1",
    opacity: 0.9,
  },
});

export default styles;
