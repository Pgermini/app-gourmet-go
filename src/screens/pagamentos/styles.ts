import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 40,
  },

  backBtn: {
    position: "absolute",
    left: 20,
    top: 60,
    padding: 5,
    zIndex: 10,
  },

  /* HEADER */
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 14,
  },

  /* CARDS */
  cardsRow: {
    flexDirection: "row",
    justifyContent: "space-between", // substitui gap 100% seguro
  },

  paymentCard: {
    width: 110,
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  paymentCardPlaceholder: {
    width: "30%",
    height: 110,
  },

  cardTextTop: {
    marginTop: 8,
    fontSize: 13,
    color: "#444",
  },
  cardTextMain: {
    fontSize: 13,
    fontWeight: "600",
  },
  cardTextSub: {
    fontSize: 12,
    color: "#666",
  },

  historyCard: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },

  historyTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#000",
  },

  historySubtitle: {
    fontSize: 13,
    color: "#555",
    marginTop: 2,
  },

  /* ---------------------- */
  /* RESUMO DO PEDIDO */
  /* ---------------------- */

  summaryBox: {
    width: "100%",
    backgroundColor: "#f9f9f9",
    padding: 16,
    borderRadius: 12,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#ddd",
  },

  summaryItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
  },

  summaryItemText: {
    fontSize: 15,
    color: "#333",
  },

  summaryItemPrice: {
    fontSize: 15,
    fontWeight: "600",
    color: "#000",
  },

  summaryDivider: {
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 10,
  },

  summaryTotalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
  },

  summaryTotalText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#000",
  },
});
