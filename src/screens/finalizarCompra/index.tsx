import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Alert,
} from "react-native";
import { router, Stack, useLocalSearchParams } from "expo-router"; 
import { FontAwesome6 } from "@expo/vector-icons";
import { useCart } from "@/context/CartContext";
import { styles } from "./styles";

export default function FinalizarCompra() {
    const { total, totalItens, clearCart, cart } = useCart();

    // Pegando o cartão vindo da seleção
    const { selectedCard } = useLocalSearchParams();
    // card pode ser null, então o tipo de card.numero é string | undefined | null
    const card: any = selectedCard ? JSON.parse(selectedCard as string) : null; 

    const finalTotal = total;

    const formatPrice = (price: number) =>
        `R$ ${price.toFixed(2).replace(".", ",")}`;

    const handleAlterarCartao = () => {
        // Rota para a tela de seleção de cartões
        router.push("/(stacks)/selecao-cartoes-screens");
    };

    function handleFinalizarPedido() {
        if (cart.length === 0) {
            Alert.alert("Erro", "Seu carrinho está vazio!");
            router.back();
            return;
        }

        Alert.alert(
            "Sucesso!",
            `Pedido enviado com sucesso! Total: ${formatPrice(finalTotal)}.`,
            [
                {
                    text: "OK",
                    onPress: () => {
                        clearCart();

                        router.replace("/(stacks)/Pedidos-screens"); 
                    },
                },
            ]
        );
    }

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ headerShown: false }} />

            {/* HEADER */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <FontAwesome6 name="arrow-left" size={26} color="#000" />
                </TouchableOpacity>

                <Text style={styles.headerTitle}>FINALIZAR COMPRA</Text>

                <View style={{ width: 26 }} />
            </View>

            {/* SCROLL */}
            <ScrollView
                contentContainerStyle={{
                    paddingBottom: 160,
                    paddingHorizontal: 16,
                }}
            >
                {/* LOCAL DE RETIRADA */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>1. Local de Retirada</Text>
                    <View style={styles.cardBox}>
                        <Text style={styles.cardTextBold}>Unidade Principal</Text>
                        <Text style={styles.cardText}>
                            Avenida Aprigio Bezerra Campus
                        </Text>
                        <Text style={styles.cardText}>
                            Pronto em aproximadamente 20 min.
                        </Text>
                    </View>
                </View>

                {/* MÉTODO DE PAGAMENTO */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>2. Método de Pagamento</Text>

                    {/* CARTÃO ESCOLHIDO */}
                    <TouchableOpacity
                        style={[styles.cardBox, styles.cardPayment]}
                        onPress={handleAlterarCartao}
                    >
                        <View>
                            <Text style={styles.cardTextBold}>Cartão Salvo</Text>

                            {card ? (
                                <Text style={styles.cardText}>
                                    {card.nome} (Final {card.numero ? card.numero.slice(-4) : '****'}) 
                                </Text>
                            ) : (
                                <Text style={styles.cardText}>
                                    Nenhum cartão selecionado
                                </Text>
                            )}

                            <Text style={styles.alterarText}>Alterar</Text>
                        </View>

                        <FontAwesome6
                            name="chevron-right"
                            size={18}
                            color="#777"
                        />
                    </TouchableOpacity>
                </View>

                {/* RESUMO DO PEDIDO */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>3. Resumo do Pedido</Text>

                    {/* LISTA DE ITENS */}
                    <View style={{ marginTop: 10 }}>
                        {Array.isArray(cart) && cart.length > 0 ? (
                            cart.map((item: any, idx: number) => {
                                const id = item?.id ?? item?.productId ?? idx;
                                const name =
                                    item?.name ??
                                    item?.title ??
                                    item?.description ??
                                    "Item";
                                const quantity =
                                    item?.quantity ??
                                    item?.qty ??
                                    item?.amount ??
                                    1;
                                const unitPrice =
                                    item?.price ??
                                    item?.value ??
                                    item?.preco ??
                                    0;
                                const totalPrice = unitPrice * quantity;

                                return (
                                    <View
                                        key={id}
                                        style={{
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                            marginBottom: 10,
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 15,
                                                color: "#333",
                                            }}
                                        >
                                            {quantity}x {name}
                                        </Text>

                                        <Text
                                            style={{
                                                fontSize: 15,
                                                fontWeight: "bold",
                                                color: "#000",
                                            }}
                                        >
                                            {formatPrice(totalPrice)}
                                        </Text>
                                    </View>
                                );
                            })
                        ) : (
                            <Text style={{ color: "#777", marginTop: 6 }}>
                                Seu carrinho está vazio.
                            </Text>
                        )}
                    </View>


                    <View style={styles.summaryRow}>
                        <Text style={styles.summaryLabel}>
                            Subtotal ({totalItens}{" "}
                            {totalItens === 1 ? "item" : "itens"})
                        </Text>
                        <Text style={styles.summaryValue}>
                            {formatPrice(total)}
                        </Text>
                    </View>

                    <View style={styles.summaryTotalRow}>
                        <Text style={styles.summaryTotalLabel}>
                            Total a Pagar
                        </Text>
                        <Text style={styles.summaryTotalValue}>
                            {formatPrice(finalTotal)}
                        </Text>
                    </View>


                    <TouchableOpacity
                        style={[
                            styles.btnFinalizar,
                            { marginTop: 20, width: "100%" },
                            cart.length === 0 && styles.btnDisabled,
                        ]}
                        onPress={handleFinalizarPedido}
                        disabled={cart.length === 0}
                    >
                        <Text style={styles.btnFinalizarText}>
                            FINALIZAR PEDIDO
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}