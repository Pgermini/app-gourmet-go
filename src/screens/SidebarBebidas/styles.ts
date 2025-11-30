import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 10,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    color: "#000",
  },

  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    paddingBottom: 100,
    paddingTop: 10,
  },

  topBar: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 5,
  },

  logo: {
    width: 160,
    height: 80,
    resizeMode: "contain",
    alignSelf: "center",
    marginVertical: 5, // ESPAÇAMENTO AJUSTADO
  },

  menuRapidoContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    gap: 15,
  },

  menuItem: {
    marginRight: 15,
  },

  menuCardFundo: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    width: 115,
    height: 125,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    elevation: 3,
  },

  menuImage: {
    width: 70,
    height: 70,
    borderRadius: 12,
  },

  menuLabel: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: "bold",
  },

  /** TITULOS */
  titleSection: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20, // Melhor espaçamento
  },

  titlePizzas: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15,
  },

  bigHamburguer: {
    width: "90%",
    height: 250,
    borderRadius: 12,
    marginTop: 15,
    alignSelf: "center",
  },

  titleSabores: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 25,
  },

  /** GRID SABORES */
  gridContainer: {
    width: "95%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 15,
  },

  saborCard: {
    width: "47%",
    backgroundColor: "#f0f0f0",
    borderRadius: 12,
    marginBottom: 15,
    alignItems: "center",
    padding: 10,
  },

  saborImg: {
    width: "100%",
    height: 120,
    borderRadius: 25,
  },

  saborLabel: {
    textAlign: "center",
    marginTop: 6,
    fontWeight: "bold",
  },
});
