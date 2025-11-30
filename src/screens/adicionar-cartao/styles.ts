import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffffff",
    paddingHorizontal: 20,
    paddingTop: 80,
  },

  // 🔙 Botão de voltar (arrow-left)
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    padding: 8,
    zIndex: 10,
  },

  title: {
    fontSize: 24,
    color: "#000000ff",
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
  },

  input: {
    backgroundColor: "#ddd",
    color: "#000000ff",
    borderWidth: 1,
    borderColor: "#333",
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    fontSize: 16,
  },

  btn: {
    backgroundColor: "#444",
    padding: 14,
    borderRadius: 8,
    marginTop: 10,
  },

  btnText: {
    color: "#000000ff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});
