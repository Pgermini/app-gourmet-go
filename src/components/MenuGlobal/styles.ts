import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  menuRapidoContainer: {
    flexDirection: "row",
    gap: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  menuItem: {
    alignItems: "center",
  },

  menuCardFundo: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
    alignItems: "center",
    width: 80,
    elevation: 3,
  },

  menuImage: {
    width: 60,
    height: 60,
    marginBottom: 5,
  },

  menuLabel: {
    fontSize: 10,
    fontWeight: "600",
  },
});
