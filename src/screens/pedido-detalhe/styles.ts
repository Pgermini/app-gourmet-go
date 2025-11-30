// src/screens/pedido-detalhe/styles.ts

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5', 
    },
    
    // --- HEADER ---
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 50,
        paddingBottom: 15,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },

    // --- SCROLL CONTENT ---
    scrollContent: {
        padding: 20,
    },

    // --- SECTIONS ---
    section: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 8,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    statusDetalhe: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 5,
    },

    // --- ROWS (DATA/ENDEREÇO) ---
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    label: {
        fontSize: 14,
        color: '#777',
        fontWeight: '600',
    },
    value: {
        fontSize: 14,
        color: '#333',
        maxWidth: '70%',
        textAlign: 'right',
    },

    // --- ITENS ---
    itemRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    itemQtd: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#555',
        marginRight: 10,
    },
    itemName: {
        flex: 1,
        fontSize: 14,
        color: '#333',
    },
    itemPrice: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#D00',
    },

    // --- TOTAL ---
    totalSection: {
        borderTopWidth: 2,
        borderTopColor: '#ddd',
        paddingTop: 15,
    },
    totalLabel: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    totalValue: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#D00',
        textAlign: 'right',
        marginTop: 5,
    },
    
    // --- ERRO ---
    errorText: {
        textAlign: 'center',
        marginTop: 50,
        fontSize: 18,
        color: '#dc3545',
    }
});