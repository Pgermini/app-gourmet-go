import { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "./styles";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useRouter } from "expo-router";



type Pagamento = {
  id: string;
  tipo: string;
  valor: number;
  data: string;
  descricao?: string;
};

export default function HistoricoPagamentos() {
  const router = useRouter(); 
  const [lista, setLista] = useState<Pagamento[]>([]);

  useEffect(() => {
    async function load() {
      try {
        const data = await AsyncStorage.getItem("historico_pagamentos");
        setLista(data ? JSON.parse(data) : []);
      } catch (err) {
        console.log("Erro ao carregar histórico:", err);
      }
    }
    load();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push("/(stacks)/pagamentos-screens")}
          >
            <FontAwesome6 name="arrow-left" size={22} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Historico De Pagamento</Text>
        <View style={{ width: 22 }} />
      </View>

      {lista.length === 0 ? (
        <Text style={styles.placeholder}>
          Você ainda não possui pagamentos realizados.
        </Text>
      ) : (
        <FlatList
          data={lista}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.itemTipo}>{item.tipo}</Text>
              <Text style={styles.itemValor}>R$ {item.valor.toFixed(2)}</Text>
              <Text style={styles.itemData}>
                {new Date(item.data).toLocaleDateString("pt-BR")}
              </Text>
              {item.descricao && (
                <Text style={styles.itemDescricao}>{item.descricao}</Text>
              )}
            </View>
          )}
        />
      )}
    </View>
  );
}
