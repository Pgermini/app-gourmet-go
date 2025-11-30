import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
    },

    /* HEADER */
    header: {
        paddingTop: 50,
        paddingBottom: 18,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderBottomColor: "#e6e6e6",
    },

    headerTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
    },

    scrollContent: {
        padding: 16,
    },

    /* CARD DE CARTÃO */
    cardItem: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 18,
        borderRadius: 12,
        marginBottom: 12,

        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 6,
        elevation: 3,
    },

    cardName: {
        fontSize: 16,
        fontWeight: "700",
        color: "#333",
    },

    cardDetails: {
        fontSize: 14,
        color: "#666",
        marginTop: 4,
    },

    /* Botão Adicionar */
    addButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#D00",
        padding: 16,
        borderRadius: 10,
        marginTop: 20,
        elevation: 2,
    },

    addButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});
