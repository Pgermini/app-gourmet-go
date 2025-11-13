import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 10,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    color: "#000",
  },

  content: {
    paddingHorizontal: 2,
    paddingBottom: 40,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginTop: 20,
    marginBottom: 10,
  },

  categoriesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  categoryCard: {
    width: "48%",
    backgroundColor: "#f5f5f5",
    borderRadius: 16,
    alignItems: "center",
    paddingVertical: 20,
    marginBottom: 12,
  },

  categoryIcon: {
    width: 60,
    height: 60,
    marginBottom: 8,
  },

  categoryLabel: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },

  highlightContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  highlightImage: {
    width: 100,
    height: 80,
    borderRadius: 10,
  },
  SubTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    color: "#000",
  },

  DestaquesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    gap: 15,
  },

  imgHamburguer: {
    width: 100,
    height: 90,
    borderRadius: 15,
    margin: 5,
  },
  imgEspaguete: {
    width: 100,
    height: 90,
    borderRadius: 15,
    margin: 5,
  },
  imgEmpadao: {
    width: 100,
    height: 90,
    borderRadius: 15,
    margin: 5,
  },
  imgSushi: {
    width: 100,
    height: 90,
    borderRadius: 15,
    margin: 5,
  },
  imgSalmao: {
    width: 100,
    height: 90,
    borderRadius: 15,
    margin: 5,
  },
  imgPet_Gato: {
    width: 100,
    height: 90,
    borderRadius: 15,
    margin: 5,
  },
  imgAcai: {
    width: 100,
    height: 90,
    borderRadius: 15,
    margin: 5,
  },
  imgFeijoada: {
    width: 100,
    height: 90,
    borderRadius: 15,
    margin: 5,
  },
  imgTacos: {
    width: 100,
    height: 90,
    borderRadius: 15,
    margin: 5,
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
