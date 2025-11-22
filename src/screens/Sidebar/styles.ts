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
    paddingBottom: 100,
  },
  topBar: {
    width: "90%",
    left: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
  },

  logo: {
    width: 160,
    left: 110,
    height: 80,
    resizeMode: "contain",
    marginVertical: 20,
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
    backgroundColor: "#f9f6f6ff",
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

  destaqueImg: {
    width: 100,
    height: 90,
    borderRadius: 15,
    margin: 5,
  },
});
