import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F2F2F2",
    },

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
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
    },

    section: {
        marginTop: 20,
    },

    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#333",
    },

    cardBox: {
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOpacity: 0.06,
        shadowRadius: 3,
        elevation: 2,
    },

    cardTextBold: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
    },

    cardText: {
        fontSize: 14,
        color: "#777",
        marginTop: 4,
    },

    alterarText: {
        color: "#D00",
        fontSize: 14,
        marginTop: 6,
        fontWeight: "bold",
    },

    cardPayment: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    summaryRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 6,
    },

    summaryLabel: {
        fontSize: 14,
        color: "#555",
    },

    summaryValue: {
        fontSize: 14,
        color: "#555",
    },

    summaryTotalRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
        paddingVertical: 10,
        borderTopWidth: 1,
        borderColor: "#ddd",
    },

    summaryTotalLabel: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#000",
    },

    summaryTotalValue: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#000",
    },

    footer: {
        marginTop: 20,
        padding: 10,
        backgroundColor: "#fff",
        borderTopWidth: 1,
        borderColor: "#ddd",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 10,
    },

    totalLabel: {
        fontSize: 14,
        color: "#555",
    },

    totalValor: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000",
    },

    btnFinalizar: {
        backgroundColor: "#D00",
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderRadius: 10,
    },

    btnDisabled: {
        backgroundColor: "#aaa",
    },

    btnFinalizarText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
    
});
