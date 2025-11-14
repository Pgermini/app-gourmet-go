import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
    paddingBottom: 50,
  },

  topBar: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  logo: {
    width: 160,
    height: 80,
    resizeMode: "contain",
    marginVertical: 10,
  },

  /** MENU RÁPIDO */
  menuRapidoContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    gap: 15,
  },

  menuItem: {
    marginRight: 15,
  },

  menuCardFundo: {
    backgroundColor: "#E0E0E0",
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
    marginTop: 15,
  },

  titlePizzas: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },

  bigPizza: {
    width: "90%",
    height: 200,
    borderRadius: 12,
    marginTop: 10,
    alignSelf: "center",
  },

  titleSabores: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
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
    height: 90,
    borderRadius: 10,
  },

  saborLabel: {
    textAlign: "center",
    marginTop: 6,
    fontWeight: "bold",
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
