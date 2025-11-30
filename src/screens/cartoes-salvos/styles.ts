import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
    backBtn: {
    position: "absolute",
    left: 20,
    top: 60,
    padding: 5,
    zIndex: 10,
  },


  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },

  placeholder: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginTop: 20,
  },

  cardItem: {
    padding: 15,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  cardInfo: {
    flex: 1,
  },

  cardName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },

  cardNumber: {
    fontSize: 15,
    color: "#444",
  },

  actions: {
    flexDirection: "row",
    gap: 10,
  },

  editBtn: {
    backgroundColor: "#3498db",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
  },

  deleteBtn: {
    backgroundColor: "#e74c3c",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
  },

  actionText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
