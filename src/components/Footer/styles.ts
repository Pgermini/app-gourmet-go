import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    height: 70,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderColor: "#ddd",
  },

  footerItem: {
    alignItems: "center",
  },

  footerText: {
    fontSize: 12,
    color: "#000",
    marginTop: 3,
  },
});
