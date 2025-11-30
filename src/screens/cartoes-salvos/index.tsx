import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Alert } from "react-native";
import { styles } from "./styles";
import { router } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";


// Interface do cartão salvo
interface Cartao {
  id: number;
  cpf: string;
  numeroCartao: string;
  validade: string;
  apelido: string;
}

export default function CartoesSalvos() {
  const [cartoes, setCartoes] = useState<Cartao[]>([]);

  // Carregar cartões salvos
  useEffect(() => {
    async function load() {
      const dados = await AsyncStorage.getItem("cartoes");
      setCartoes(dados ? JSON.parse(dados) : []);
    }
    load();
  }, []);

  // Excluir cartão
  async function deletarCartao(id: number) {
    Alert.alert("Excluir", "Deseja realmente excluir este cartão?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Sim",
        onPress: async () => {
          const novaLista = cartoes.filter((c) => c.id !== id);
          setCartoes(novaLista);
          await AsyncStorage.setItem("cartoes", JSON.stringify(novaLista));
        },
      },
    ]);
  }

  // Editar cartão (ainda não implementado)
  function editarCartao(item: Cartao) {
    Alert.alert(
      "Editar",
      "Função de edição ainda não implementada.\nDepois podemos fazer 👍"
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.backBtn} 
        onPress={() => router.push("/(stacks)/pagamentos-screens")}
      >
        <MaterialIcons name="arrow-back" size={28} color="#333" />
      </TouchableOpacity>

      <Text style={styles.title}>Cartões Salvos</Text>

      {cartoes.length === 0 ? (
        <Text style={styles.placeholder}>Nenhum cartão cadastrado.</Text>
      ) : (
        <FlatList
          data={cartoes}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }: { item: Cartao }) => (
            <View style={styles.cardItem}>
              <View style={styles.cardInfo}>
                <Text style={styles.cardName}>{item.apelido}</Text>
                <Text style={styles.cardNumber}>{item.numeroCartao}</Text>
              </View>

              <View style={styles.actions}>
                <TouchableOpacity
                  style={styles.editBtn}
                  onPress={() => editarCartao(item)}
                >
                  <Text style={styles.actionText}>Editar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.deleteBtn}
                  onPress={() => deletarCartao(item.id)}
                >
                  <Text style={styles.actionText}>Excluir</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
}
