import React from "react";
import {
    View,
    Text,
    ScrollView,
    ActivityIndicator,
} from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
// Importa os estilos da subpasta Pedidos/styles.ts
import { styles } from "@/screens/Pedidos/styles"; 


interface Order {
    id: string;
    total: number;

    dataPedido: Date; 
    status: string;
    itens: { name: string; quantity: number; price: number }[]; 
}


const mockOrders: Order[] = [
    {
        id: "abc12345",
        total: 78.50,
        dataPedido: new Date(Date.now() - 3600000 * 2), // 2 horas atrás
        status: "Em Preparação",
        itens: [
            { name: "Hambúrguer Clássico", quantity: 2, price: 25.00 },
            { name: "Batata Frita Grande", quantity: 1, price: 12.00 },
            { name: "Coca-Cola Zero (Lata)", quantity: 2, price: 8.25 },
        ],
    },
    {
        id: "xyz98765",
        total: 35.90,
        dataPedido: new Date(Date.now() - 3600000 * 24 * 3), // 3 dias atrás
        status: "Entregue",
        itens: [
            { name: "Pizza Calabresa (Média)", quantity: 1, price: 35.90 },
        ],
    },
    {
        id: "def67890",
        total: 125.00,
        dataPedido: new Date(Date.now() - 3600000 * 24 * 7), // 7 dias atrás
        status: "Cancelado",
        itens: [
            { name: "Sushi Combo Master (30 Peças)", quantity: 1, price: 85.00 },
            { name: "Sashimi Salmão (10 Peças)", quantity: 1, price: 40.00 },
        ],
    }
].sort((a, b) => b.dataPedido.getTime() - a.dataPedido.getTime()); 


const formatPrice = (price: number) => `R$ ${price.toFixed(2).replace(".", ",")}`;

// Componente para renderizar um único cartão de pedido
const OrderCard: React.FC<{ order: Order }> = ({ order }) => {
    const formattedDate = order.dataPedido.toLocaleDateString('pt-BR', {
        day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'
    });

    // Calcula o total de itens
    const totalItens = order.itens.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <View style={styles.orderCard}>
            {/* Cabeçalho do Card: ID e Data */}
            <View style={styles.headerRow}>
                <Text style={styles.orderId}>Pedido #{order.id.slice(-6).toUpperCase()}</Text>
                <Text style={styles.orderDate}>{formattedDate}</Text>
            </View>

            {/* Status do Pedido */}
            <View style={styles.statusContainer}>
                <Text style={styles.statusText}>{order.status}</Text>
            </View>

            <View style={styles.divider} />
            
            {/* Lista de itens (mostra os 3 primeiros) */}
            {order.itens.slice(0, 3).map((item, index) => (
                <View key={index} style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>
                        {item.quantity}x {item.name || "Item"}
                    </Text>
                    <Text style={styles.summaryValue}>{formatPrice(item.price * item.quantity)}</Text>
                </View>
            ))}
            

            {order.itens.length > 3 && (
                 <Text style={[styles.summaryLabel, { marginTop: 5, fontStyle: 'italic' }]}>
                    ... e mais {order.itens.length - 3} {order.itens.length - 3 === 1 ? 'item' : 'itens'}
                </Text>
            )}

            {/* Total Geral do Pedido */}
            <View style={styles.totalRow}>
                <Text style={styles.totalLabel}>Total ({totalItens} {totalItens === 1 ? 'item' : 'itens'})</Text>
                <Text style={styles.totalValue}>{formatPrice(order.total)}</Text>
            </View>
        </View>
    );
};



export default function Pedidos() {

    const orders = mockOrders;
    const isLoading = false; 


    if (isLoading) {
        return (
            <View style={[styles.container, styles.loadingContainer]}>
                <ActivityIndicator size="large" color="#00B207" />
                <Text style={{ marginTop: 10, color: '#555' }}>Carregando pedidos...</Text>
            </View>
        );
    }


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Meus Pedidos</Text>
            </View>
            
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                {orders.length === 0 ? (
                    <View style={styles.emptyContainer}>
                        <FontAwesome6 name="cart-shopping" size={50} color="#ccc" />
                        <Text style={styles.emptyText}>
                            Você ainda não tem pedidos. {'\n'}Que tal fazer o primeiro?
                        </Text>
                    </View>
                ) : (
                    orders.map(order => <OrderCard key={order.id} order={order} />)
                )}

                {/* Esta seção não é necessária no mock, mas mantida para consistência */}
                <Text style={styles.debugText}>
                    {`Dados carregados de mock local. Firestore desativado.`}
                </Text>
            </ScrollView>
        </View>
    );
}