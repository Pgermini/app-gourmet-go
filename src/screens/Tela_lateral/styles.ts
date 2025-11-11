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
    paddingHorizontal: 20,
    paddingBottom: 40,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginTop: 20,
    marginBottom: 10,
  },

  /* ===== CATEGORIAS ===== */
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

  /* ===== DESTAQUES ===== */
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
});
