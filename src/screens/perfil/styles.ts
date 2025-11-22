import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 60,
    backgroundColor: "#fff",
  },

  profileIcon: {
    position: "absolute",
    top: 40,
    left: 15,
  },

  listContainer: {
    marginTop: 95,
    width: "100%",
    alignItems: "center",
  },

  listItem: {
    width: "90%",
    backgroundColor: "#e6e6e6",
    padding: 18,
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },

  listIcon: {
    marginRight: 12,
  },

  listText: {
    flex: 1,
    fontSize: 18,
  },

  listArrow: {
    fontSize: 22,
    marginLeft: 0,
  },
});
