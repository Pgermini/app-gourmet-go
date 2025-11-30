import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingTop: 20,
    justifyContent: "space-between",
  },

  titleTop: {
    fontSize: 18,
    fontWeight: "700",
  },

  productImage: {
    width: "100%",
    height: 230,
    borderRadius: 8,
    marginTop: 10,
  },

  productInfo: {
    padding: 16,
  },

  productName: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 6,
  },

  productDescription: {
    fontSize: 14,
    color: "#555",
    marginBottom: 10,
  },

  productPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },

/* Rodapé fixo */
bottomButtons: {
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: 16,
  paddingVertical: 12,
  borderTopWidth: 1,
  borderTopColor: "#201a1aff",
  backgroundColor: "#fff",
  position: "absolute",
  bottom: 90,
  left: 0,
  right: 0,
},

  /* Quantidade */
  qtyContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },

  qtyButton: {
    paddingHorizontal: 10,
  },

  qtyText: {
    fontSize: 20,
  },

  qtyNumber: {
    marginHorizontal: 10,
    fontSize: 16,
  },

  /* Botão Adicionar */
    addButton: {
    backgroundColor: "#d60000",
    paddingVertical: 10,
    borderRadius: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 12,
  },


  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },


});
