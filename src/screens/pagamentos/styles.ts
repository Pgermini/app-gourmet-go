import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 60,
    backgroundColor: "#fff",
  },

  profileIcon: {
    marginBottom: 30,
  },

  listContainer: {
    width: "100%",
    paddingHorizontal: 20,
    gap: 15,
  },

  listItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 12,
    backgroundColor: "#f7f7f7",
    borderRadius: 10,
  },

  listIcon: {
    marginRight: 12,
  },

  listText: {
    fontSize: 16,
    flex: 1,
  },

  listArrow: {
    fontSize: 20,
    color: "#777",
  },
});
