import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  line: {
    width: "90%",
    height: 1,
    backgroundColor: "#ccc",
    marginTop: 10,
    alignSelf: "center",
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 150,
    marginTop: 25,
    color: "#000",
  },

  lanchesContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
  },

  ImagePizza: {
    width: 150,
    height: 115,
    borderRadius: 20,
  },

  ImageHamburger: {
    width: 160,
    height: 120,
    borderRadius: 10,
  },

  RefeicoesContainer: {
    alignItems: "center",
    marginTop: 10,
  },

  ImageRefeicoes: {
    width: 340,
    height: 180,
    borderRadius: 12,
  },

  SobremesasContainer: {
    alignItems: "center",
    marginTop: 10,
  },

  ImageSobremesas: {
    width: 340,
    height: 180,
    borderRadius: 12,
  },

  BebidasContainer: {
    alignItems: "center",
    marginTop: 10,
  },

  ImageBebidas: {
    width: 340,
    height: 180,
    borderRadius: 12,
  },

  cardFundo: {
    backgroundColor: "#E0E0E0",
    borderRadius: 16,
    padding: 10,
  },

  textSobreImagem: {
    position: "absolute",
    top: 8,
    left: 0,
    right: 0,
    textAlign: "center",
    fontSize: 13,
    fontWeight: "600",
    color: "#444",
    backgroundColor: "#f2f2f2cc",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
    alignSelf: "center",
  },
});
