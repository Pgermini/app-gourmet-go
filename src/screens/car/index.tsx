// src/screens/car/index.tsx (Atualizado para a Nova Arquitetura de Pagamento)

import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { router } from "expo-router";
import { styles } from "./styles"; 
import { useCart } from "@/context/CartContext"; 
// Importe as interfaces que devem ser definidas em seu projeto TS
import { CartContextData, CartItem } from '@/@types/CartTypes'; 

/** helper que normaliza o source para <Image /> */
function imageSource(img: string | number | undefined): { uri: string } | number {
    if (typeof img === "number") return img;
    if (typeof img === "string") {
        return { uri: img.startsWith("http") || img.startsWith("https") ? img : img };
    }
    return { uri: "https://via.placeholder.com/80" };
}

export default function Car() {
    // *** CORREÇÃO: Força o TypeScript a reconhecer o tipo do hook JS ***
    const { cart, total, totalItens, aumentar, diminuir, clearCart } = useCart() as CartContextData; 
    
    // Lógica para finalizar a compra: AGORA APENAS NAVEGA
    function finalizarCompra() {
        // NAVEGA para a tela central de finalização/pagamento.
        // A limpeza do carrinho (clearCart()) será feita nesta nova tela após o sucesso do pagamento.
        router.push("/(stacks)/checkout-screens"); 
    }


    return (
        <View style={styles.container}>
            {/* HEADER */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <FontAwesome6 name="arrow-left" size={26} color="#000" />
                </TouchableOpacity>

                <Text style={styles.headerTitle}>CARRINHO</Text>

                {/* Botão de Limpar - Chama a função clearCart do Context */}
                <TouchableOpacity onPress={clearCart}>
                    <Text style={styles.limpar}>Limpar</Text>
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={{ paddingBottom: 250 }}>
                {/* CATEGORIA (Mantido do seu código original) */}
                <View style={styles.categoriaBox}>
                    <Image
                        source={{
                            uri: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
                        }}
                        style={styles.categoriaImg}
                    />
                    <View>
                        <Text style={styles.categoriaTitle}>LANCHES</Text>
                        {/* Volta para a tela de produtos */}
                        <TouchableOpacity onPress={() => router.back()}>
                            <Text style={styles.categoriaLink}>Adicionar mais itens</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Items */}
                {/* Iterando sobre o 'cart' do Context */}
                {cart.map((item: CartItem) => ( 
                    <View key={item.id} style={styles.itemBox}>
                        <Image source={imageSource(item.imagem)} style={styles.itemImg} />

                        <View style={{ flex: 1, marginLeft: 10 }}>
                            <Text style={styles.itemName}>{item.nome}</Text>
                            <Text style={styles.itemDesc}>{item.descricao}</Text>
                            <Text style={styles.itemPrice}>
                                R$ {item.preco.toFixed(2)}
                            </Text>
                        </View>

                        {/* BOTÕES */}
                        <View style={styles.qtdBox}>
                            {/* Lixeira: Chama diminuir. No Context, diminuir remove o item se QTD for 1. */}
                            <TouchableOpacity onPress={() => diminuir(item.id)}>
                                <FontAwesome6 name="trash" size={18} color="#D00" />
                            </TouchableOpacity>

                            {/* Controles de Quantidade */}
                            <View style={styles.qtdControls}>
                                <TouchableOpacity onPress={() => diminuir(item.id)}>
                                    <FontAwesome6 name="minus" size={16} color="#000" />
                                </TouchableOpacity>

                                <Text style={styles.qtdText}>{item.qtd}</Text>

                                <TouchableOpacity onPress={() => aumentar(item.id)}>
                                    <FontAwesome6 name="plus" size={16} color="#D00" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>

            <View style={styles.footer}>
                <View>
                    <Text style={styles.totalLabel}>Subtotal</Text>

                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Text style={styles.totalValor}>R$ {total.toFixed(2)}</Text>

                        <Text style={styles.totalItens}>
                            {" "} / {totalItens} {totalItens === 1 ? "item" : "itens"}
                        </Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={styles.btnContinuar}
                    onPress={finalizarCompra}
                >
                    <Text style={styles.btnContinuarText}>FINALIZAR COMPRA</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}