import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F5F5",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  back: {
    fontSize: 22,
    color: "#000",
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
    color: "#333",
  },

  placeholder: {
    fontSize: 16,
    color: "#777",
    textAlign: "center",
    marginTop: 40,
  },

  // lista
  item: {
    backgroundColor: "#FFF",
    padding: 16,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },

  itemTipo: {
    fontSize: 16,
    fontWeight: "700",
    color: "#4A90E2",
  },

  itemValor: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 8,
    color: "#222",
  },

  itemData: {
    fontSize: 14,
    color: "#666",
    marginTop: 6,
  },

  itemDescricao: {
    fontSize: 14,
    marginTop: 8,
    fontStyle: "italic",
    color: "#444",
  },
});
