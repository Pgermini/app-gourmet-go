import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { styles } from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import { useCart } from "@/context/CartContext"; // Importa o hook do Contexto
// Importe a interface Product do seu arquivo de tipos, ex: '@/@types/CartTypes'
import { Product } from '@/@types/CartTypes'; 

export default function ProdutoDetalhe() {
    const router = useRouter();
    const { addToCart } = useCart(); 

    // O useLocalSearchParams retorna tipos complexos, por isso usamos String() abaixo.
    const params = useLocalSearchParams();
    const { id, name, image, price, description } = params;

    const [qty, setQty] = useState(1);

    const handleAddToCart = () => {
        // 1. Converte o preço
        // Garante que o preço é um número válido, tratando vírgulas e null/undefined.
        const precoNumerico = Number(String(price || "0").replace(",", "."));

        // 2. Cria o objeto do produto com tratamento de tipos:
        const produtoParaAdicionar: Product = {
            // CORREÇÃO ID: Converte o ID para String. Usa o nome como fallback seguro.
            id: String(id || name || Date.now()), 
            
            // Converte todos os parâmetros para string de forma segura
            nome: String(name || "Produto sem nome"), 
            preco: isNaN(precoNumerico) ? 0 : precoNumerico,
            descricao: String(description || ""),
            
            // CORREÇÃO IMAGEM: Converte a imagem para String.
            imagem: String(image || "https://via.placeholder.com/300x200.png"),
        };

        // 3. Adiciona o item ao Contexto, repetindo pela quantidade selecionada (qty)
        for (let i = 0; i < qty; i++) {
            addToCart(produtoParaAdicionar); 
        }
        
        // 4. Navega para a tela do carrinho sem passar PARAMS
        router.push("/(stacks)/car-screens");
    };


    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <ScrollView
                style={{ flex: 1 }}
                contentContainerStyle={{ paddingBottom: 140 }}
            >
                {/* Top Bar */}
                <View style={styles.topBar}>
                    <TouchableOpacity onPress={() => router.back()}>
                        <FontAwesome name="arrow-left" size={24} color="#000" />
                    </TouchableOpacity>

                    <Text style={styles.titleTop}>{name || "Produto"}</Text>

                    <View style={{ width: 24 }} />
                </View>

                {/* Imagem */}
                <Image
                    source={
                        image
                            ? { uri: String(image) }
                            : {
                                  uri: "https://via.placeholder.com/300x200.png?text=Sem+Imagem",
                              }
                    }
                    style={styles.productImage}
                />

                {/* Infos */}
                <View style={styles.productInfo}>
                    <Text style={styles.productName}>
                        {name || "Produto sem nome"}
                    </Text>

                    <Text style={styles.productDescription}>
                        {description || "Sem descrição disponível."}
                    </Text>

                    <Text style={styles.productPrice}>
                        {price ? `R$ ${price}` : "R$ --"}
                    </Text>
                </View>
            </ScrollView>

            {/* Bottom Bar */}
            <View style={styles.bottomButtons}>
                {/* Quantidade */}
                <View style={styles.qtyContainer}>
                    <TouchableOpacity
                        style={styles.qtyButton}
                        onPress={() => qty > 1 && setQty(qty - 1)}
                    >
                        <Text style={styles.qtyText}>-</Text>
                    </TouchableOpacity>

                    <Text style={styles.qtyNumber}>{qty}</Text>

                    <TouchableOpacity
                        style={styles.qtyButton}
                        onPress={() => setQty(qty + 1)}
                    >
                        <Text style={styles.qtyText}>+</Text>
                    </TouchableOpacity>
                </View>

                {/* Adicionar */}
                <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
                    <Text style={styles.addButtonText}>Adicionar ao Carrinho</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}