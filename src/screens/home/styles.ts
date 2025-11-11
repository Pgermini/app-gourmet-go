import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },

  topBar: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 50,
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

  menuRapidoContainer: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    gap: 15,
  },

  menuItem: {
    marginRight: 15,
  },

  menuCardFundo: {
    backgroundColor: "#E0E0E0",
    borderRadius: 16,
    width: 120,
    height: 140,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },

  menuImage: {
    width: 100,
    height: 100,
    borderRadius: 12,
  },

  menuLabel: {
    position: "absolute",
    top: 10,
    left: 50,
    right: 0,
    textAlign: "center",
    fontSize: 12,
    fontWeight: "bold",
    color: "#000",
  },

  lanchesContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
  },

  ImagePizza: {
    width: 160,
    height: 120,
    borderRadius: 10,
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
