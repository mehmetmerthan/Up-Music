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
  contentText: {
    marginTop: 40,
    fontSize: 15,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    paddingBottom: 10,
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userAvatarExisting: {
    width: 25,
    height: 25,
    borderRadius: 25,
  },
  sectionHeadingText: {
    fontSize: 20,
    color: "#1c1c1c",
    marginVertical: 10,
    justifyContent: "flex-start",
    alignSelf: "flex-start",
  },
  hStackContent: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  hStackItemWrap: {
    paddingVertical: 4,
    paddingHorizontal: 4,
    minWidth: 0,
    flexShrink: 0,
  },
  tag: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 28,
    maxWidth: 140,
    paddingLeft: 8,
    paddingRight: 8,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#a8bac1",
    borderRadius: 14,
    overflow: "hidden",
  },
  tagText: {
    fontSize: 16,
    color: "#1c1c1c",
    flexShrink: 1,
  },
  text: {
    fontSize: 15,
    marginTop: 1,
    color: "#1c1c1c",
  },
  textPrice: {
    fontSize: 18,
    marginTop: 10,
    color: "#008000",
  },
  icon: {
    marginTop: 10,
  },
  button: {
    padding: 10,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
    marginTop: 1,
  },
  contentImage: {
    width: "100%",
    height: 400,
    marginTop: 10,
    borderRadius: 5,
    resizeMode: "cover",
  },
});

export default styles;
