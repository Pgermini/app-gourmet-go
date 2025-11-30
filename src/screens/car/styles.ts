import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
  },

  /* HEADER */
  header: {
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
  },

  limpar: {
    fontSize: 16,
    color: "#D00",
    fontWeight: "bold",
  },

  /* CATEGORIA */
  categoriaBox: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginTop: 16,
    marginHorizontal: 16,
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  categoriaImg: {
    width: 45,
    height: 45,
    marginRight: 12,
  },

  categoriaTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },

  categoriaLink: {
    fontSize: 14,
    color: "#D00",
    marginTop: 2,
  },

  /* SUBTÍTULO */
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 18,
    marginTop: 22,
    marginBottom: 8,
    color: "#333",
  },

  /* ITEM DO CARRINHO */
  itemBox: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 12,
    padding: 14,
    flexDirection: "row",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  itemImg: {
    width: 80,
    height: 80,
    borderRadius: 12,
  },

  itemName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#222",
  },

  itemDesc: {
    fontSize: 13,
    color: "#666",
    marginVertical: 3,
  },

  itemPrice: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#D00",
    marginBottom: 6,
  },

  /* ADICIONAIS */
  adicional: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
  },

  adicionalText: {
    fontSize: 13,
    color: "#555",
  },

  /* QUANTIDADE / LIXO */
  qtdBox: {
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 10,
  },

  qtdControls: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eee",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginTop: 12,
  },

  qtdText: {
    fontSize: 15,
    fontWeight: "bold",
    marginHorizontal: 10,
  },

  /* SUGESTÕES */
  sugestoesTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 18,
    marginTop: 10,
    marginBottom: 10,
    color: "#333",
  },

  sugestaoCard: {
    backgroundColor: "#fff",
    width: 140,
    padding: 12,
    marginLeft: 16,
    marginBottom: 20,
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },

  sugestaoImg: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },

  sugestaoNome: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
  },

  /* FOOTER */
  footer: {
    position: "absolute",
    bottom: 50,
    width: "50%",
    backgroundColor: "#fff",
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  totalLabel: {
    fontSize: 14,
    color: "#777",
  },

  totalValor: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000",
  },

  totalItens: {
    fontSize: 14,
    color: "#666",
  },

  btnContinuar: {
    height: 60,
    width: 150,
    backgroundColor: "#D00",
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 12,
    left:100,
  },

  btnContinuarText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});
