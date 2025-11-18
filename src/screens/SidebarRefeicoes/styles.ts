import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 12,
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
    paddingBottom: 10,
  },

  topBar: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 15,
  },

  logo: {
    width: 160,
    height: 80,
    resizeMode: "contain",
    marginTop: 10,
    marginBottom: 20,
  },

  menuRapidoContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    gap: 15,
    marginBottom: 20,
  },

  menuItem: {
    marginRight: 15,
  },

  menuCardFundo: {
    backgroundColor: "#fff",
    borderRadius: 16,
    width: 115,
    height: 125,
    justifyContent: "center",
    alignItems: "center",
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

  tituloPrincipal: {
    fontSize: 22,
    fontWeight: "bold",
    width: "90%",
    marginTop: 15,
    marginBottom: 10,
  },

  blocoImagem: {
    marginTop: 10,
    marginBottom: 25,
    width: "100%",
    alignItems: "center",
    position: "relative",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginLeft: 25,
    marginTop: 25,
    color: "#000",
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginLeft: 25,
    marginTop: 25,
    color: "#000",
  },

  imagemGrande: {
    width: "90%",
    height: 200,
    borderRadius: 20,
  },

  textoSobreImagem: {
    position: "absolute",
    bottom: 15,
    left: 35,
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  grid: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 80, // respiro antes do footer
  },

  card: {
    width: "47%",
    backgroundColor: "#fff",
    padding: 12,
    marginBottom: 18,
    borderRadius: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },

  imgCard: {
    width: 150,
    height: 110,
    marginBottom: 8,
  },

  nomeCard: {
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },
});
