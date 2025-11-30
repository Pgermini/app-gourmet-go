import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { router, Stack } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import { styles } from './styles';

// Tipo do Cartão
interface CardType {
    id: string;
    nome: string;
    numero: string;
    tipo: string;
}

// Props
interface CardItemProps {
    card: CardType;
    onSelect: (card: CardType) => void;
}

// Mock Cards
const mockCards: CardType[] = [
    { id: '1', nome: 'nu credito', numero: '745631145971562', tipo: 'Crédito' },
    { id: '2', nome: 'nu debito', numero: '546435484345343', tipo: 'Débito' },
    { id: '3', nome: 'santander credito', numero: '4562254854516468', tipo: 'Crédito' },
];

// Card Individual — *apenas selecionar, sem editar*
const CardItem: React.FC<CardItemProps> = ({ card, onSelect }) => {
    const lastFour = card.numero.slice(-4);

    return (
        <TouchableOpacity style={styles.cardItem} onPress={() => onSelect(card)}>
            <View style={{ flex: 1 }}>
                <Text style={styles.cardName}>{card.nome.toUpperCase()}</Text>
                <Text style={styles.cardDetails}>{card.tipo} • **** {lastFour}</Text>
            </View>

            <FontAwesome6 name="chevron-right" size={22} color="#999" />
        </TouchableOpacity>
    );
};

export default function SelecaoCartoes() {

    // 🔥 Correção principal
    const handleSelectCard = (card: CardType) => {
        router.replace({
            pathname: "/(stacks)/checkout-screens",
            params: { selectedCard: JSON.stringify(card) }
        });
    };

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ headerShown: false }} />

            {/* HEADER */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <FontAwesome6 name="arrow-left" size={26} color="#000" />
                </TouchableOpacity>

                <Text style={styles.headerTitle}>CARTÕES SALVOS</Text>

                <View style={{ width: 26 }} />
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                {mockCards.map((card) => (
                    <CardItem key={card.id} card={card} onSelect={handleSelectCard} />
                ))}

                {/* Botão para adicionar novo cartão */}
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => router.push("/(stacks)/adicionar-cartao-screens")}
                >
                    <FontAwesome6
                        name="plus"
                        size={18}
                        color="#fff"
                        style={{ marginRight: 8 }}
                    />
                    <Text style={styles.addButtonText}>ADICIONAR NOVO CARTÃO</Text>
                </TouchableOpacity>

            </ScrollView>
        </View>
    );
}
