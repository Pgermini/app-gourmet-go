import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F7F8', // Fundo levemente acinzentado
    },
    
    /* CABEÇALHO */
    header: {
        paddingTop: 60, 
        paddingBottom: 20,
        paddingHorizontal: 16,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 3,
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#1a1a1a',
    },

    /* LISTA DE PEDIDOS */
    scrollViewContent: {
        padding: 16,
        paddingBottom: 40,
    },
    
    /* CARD DO PEDIDO */
    orderCard: {
        backgroundColor: '#fff',
        padding: 18,
        borderRadius: 12,
        marginBottom: 15,
        borderLeftWidth: 5,
        borderColor: '#00B207', // Borda verde para destaque
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    
    /* DETALHES GERAIS DO CARD */
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    orderId: {
        fontSize: 16,
        fontWeight: '700',
        color: '#333',
    },
    orderDate: {
        fontSize: 13,
        color: '#888',
    },

    /* STATUS DO PEDIDO */
    statusContainer: {
        backgroundColor: '#E6FFE6', // Fundo verde claro
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 20,
        alignSelf: 'flex-start',
        marginTop: 5,
    },
    statusText: {
        color: '#008000', // Texto verde escuro
        fontWeight: 'bold',
        fontSize: 12,
        textTransform: 'uppercase',
    },
    
    /* RESUMO DE ITENS */
    divider: {
        height: 1,
        backgroundColor: '#eee',
        marginVertical: 10,
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    summaryLabel: {
        fontSize: 14,
        color: '#555',
    },
    summaryValue: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
    },
    
    // Total
    totalRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        borderTopWidth: 1,
        borderTopColor: '#f0f0f0',
        marginTop: 5,
    },
    totalLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1a1a1a',
    },
    totalValue: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#00B207', // Verde principal
    },

    /* ESTADOS VAZIOS/LOADING */
    emptyContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50,
    },
    emptyText: {
        fontSize: 16,
        color: '#777',
        textAlign: 'center',
        marginTop: 10,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    // Debug info (ID do usuário e App ID)
    debugText: {
        fontSize: 10,
        color: '#ccc',
        textAlign: 'center',
        marginTop: 20,
    }
});