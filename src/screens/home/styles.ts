import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 16,
  },

  menuContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    gap: 20,
  },

  sub: {
    width: 70,
    height: 50,
    borderRadius: 10,
    overflow: "hidden",
  },

  subImage: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },

  line: {
    width: "90%",
    height: 1.5,
    backgroundColor: "#000",
    alignSelf: "center",
    marginTop: 15,
  },

  title: {
    fontFamily: "Actor",
    fontSize: 25,
    fontWeight: "400",
    textAlign: "center",
    marginTop: 15,
    color: "#000",
  },

  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#d9d9d9",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 5,
  },

  footerItem: {
    alignItems: "center",
    justifyContent: "center",
  },

  footerText: {
    fontSize: 12,
    marginTop: 4,
    color: "#000",
  },
});
