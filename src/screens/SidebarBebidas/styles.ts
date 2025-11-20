import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 15,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    color: "#000",
  },
  container: {
    alignItems: "center",
    width: "100%",
    paddingBottom: 15,
  },

  topBar: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
  },

  logo: {
    width: 160,
    height: 80,
    resizeMode: "contain",
    marginVertical: 20,
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
    backgroundColor: "#ffffffff",
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

  bigDribk: {
    width: "95%",
    height: 245,
    borderRadius: 52,
    marginTop: 15,
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
    width: "48%", // de 47 → 48
    backgroundColor: "#f0f0f0",
    borderRadius: 12,
    marginBottom: 18,
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
});
