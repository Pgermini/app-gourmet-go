import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },

  img: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
  },

  descricao: {
    fontSize: 16,
    color: "#666",
  },
});
