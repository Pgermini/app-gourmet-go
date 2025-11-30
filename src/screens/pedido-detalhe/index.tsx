// src/screens/pedido-detalhe/index.tsx

import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import { styles } from './styles'; // 👈 Você precisará criar este arquivo de estilos

// 🛑 DADOS DE MOCK: Os mesmos dados da tela de Pedidos, mas expandidos para detalhes
interface PedidoDetalhe {
    id: string;
    data: string;
    status: 'Em Preparação' | 'Entregue' | 'Cancelado';
    total: number;
    itens: { nome: string; preco: number; qtd: number }[];
    endereco: string;
}

const mockPedidosDetalhe: PedidoDetalhe[] = [
    { 
        id: 'p001', data: '25/Nov/2025', status: 'Em Preparação', total: 55.00, endereco: 'Rua Principal, 100 - Centro', 
        itens: [{ nome: 'X-Salada', preco: 25.00, qtd: 1 }, { nome: 'Refrigerante 2L', preco: 15.00, qtd: 2 }] 
    },
    { 
        id: 'p002', data: '20/Nov/2025', status: 'Entregue', total: 105.50, endereco: 'Avenida Teste, 50 - Bairro Novo', 
        itens: [{ nome: 'Pizza Grande', preco: 80.50, qtd: 1 }, { nome: 'Cerveja Lata', preco: 5.00, qtd: 5 }] 
    },
    { 
        id: 'p003', data: '15/Nov/2025', status: 'Cancelado', total: 30.00, endereco: 'Rua do Cancelado, 123', 
        itens: [{ nome: 'Açaí Pequeno', preco: 30.00, qtd: 1 }] 
    },
];

export default function PedidoDetalhe() {
    // 1. Pega o 'id' dos parâmetros da URL
    const { id } = useLocalSearchParams();
    
    // 2. Busca o pedido correspondente nos dados mockados
    const pedido = mockPedidosDetalhe.find(p => p.id === id);

    if (!pedido) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>Pedido não encontrado ou ID inválido.</Text>
                <TouchableOpacity onPress={() => router.back()} style={{ marginTop: 20 }}>
                     <Text style={{ color: '#007bff', fontSize: 16 }}>Voltar para a lista</Text>
                </TouchableOpacity>
            </View>
        );
    }

    let statusCor = pedido.status === 'Entregue' ? '#28a745' : pedido.status === 'Cancelado' ? '#dc3545' : '#ffc107';


    return (
        <View style={styles.container}>
            {/* HEADER */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <FontAwesome6 name="arrow-left" size={22} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>PEDIDO #{pedido.id}</Text>
                <View style={{ width: 22 }} />
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                
                {/* STATUS */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Status do Pedido</Text>
                    <Text style={[styles.statusDetalhe, { color: statusCor }]}>{pedido.status}</Text>
                </View>

                {/* RESUMO E ENDEREÇO */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Detalhes da Entrega</Text>
                    <View style={styles.row}>
                        <Text style={styles.label}>Data:</Text>
                        <Text style={styles.value}>{pedido.data}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Endereço:</Text>
                        <Text style={styles.value}>{pedido.endereco}</Text>
                    </View>
                </View>

                {/* ITENS */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Itens ({pedido.itens.length})</Text>
                    {pedido.itens.map((item, index) => (
                        <View key={index} style={styles.itemRow}>
                            <Text style={styles.itemQtd}>{item.qtd}x</Text>
                            <Text style={styles.itemName}>{item.nome}</Text>
                            <Text style={styles.itemPrice}>R$ {(item.preco * item.qtd).toFixed(2)}</Text>
                        </View>
                    ))}
                </View>

                {/* TOTAL */}
                <View style={[styles.section, styles.totalSection]}>
                    <Text style={styles.totalLabel}>Total Final</Text>
                    <Text style={styles.totalValue}>R$ {pedido.total.toFixed(2)}</Text>
                </View>

            </ScrollView>
        </View>
    );
}