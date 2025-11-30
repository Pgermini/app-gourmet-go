import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { styles } from "./styles";
import { router } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";


export default function AdicionarCartao() {
  const [cpf, setCpf] = useState("");
  const [numeroCartao, setNumeroCartao] = useState("");
  const [validade, setValidade] = useState("");
  const [apelido, setApelido] = useState("");

  // 🔵 FORMATAR CPF (000.000.000-00)
  function formatCpf(text: string) {
    const numbers = text.replace(/\D/g, "").slice(0, 11);
    const formatted = numbers
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    setCpf(formatted);
  }

  // 🔵 FORMATAR CARTÃO (máx 15 números)
function formatCard(text: string) {
  const numbers = text.replace(/\D/g, "").slice(0, 16);

  const formatted = numbers.replace(/(\d{4})(?=\d)/g, "$1.");

  setNumeroCartao(formatted);
}




  // 🔵 FORMATAR VALIDADE (MM/AA)
  function formatValidade(text: string) {
    const numbers = text.replace(/\D/g, "").slice(0, 4);
    const formatted = numbers.replace(/(\d{2})(\d)/, "$1/$2");
    setValidade(formatted);
  }

  async function handleSave() {
    if (!cpf || !numeroCartao || !validade || !apelido) {
      Alert.alert("Atenção", "Preencha todos os campos.");
      return;
    }

    const novoCartao = {
      id: Date.now(),
      cpf,
      numeroCartao,
      validade,
      apelido
    };

    try {
      const atual = await AsyncStorage.getItem("cartoes");
      const lista = atual ? JSON.parse(atual) : [];

      lista.push(novoCartao);
      await AsyncStorage.setItem("cartoes", JSON.stringify(lista));

      Alert.alert("Sucesso", "Cartão salvo com sucesso!");

      router.replace("/(stacks)/cartoes-salvos-screens");
    } catch (error) {
      console.log(error);
      Alert.alert("Erro", "Não foi possível salvar o cartão.");
    }
  }

  return (
    <View style={styles.container}>
        <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.back()} 
      >
        <MaterialCommunityIcons name="arrow-left" size={28} color="#000000ff" />
      </TouchableOpacity>
      <Text style={styles.title}>Adicionar Cartão</Text>

      {/* Apelido */}
      <TextInput
        style={styles.input}
        placeholder="Apelido do cartão"
        value={apelido}
        onChangeText={setApelido}
      />

      {/* CPF */}
      <TextInput
        style={styles.input}
        placeholder="CPF"
        keyboardType="numeric"
        value={cpf}
        onChangeText={formatCpf}
      />

      {/* Número do Cartão */}
      <TextInput
        style={styles.input}
        placeholder="Número do cartão"
        keyboardType="numeric"
        value={numeroCartao}
        onChangeText={formatCard}
        maxLength={19}
      />



      {/* Validade */}
      <TextInput
        style={styles.input}
        placeholder="Validade (MM/AA)"
        keyboardType="numeric"
        value={validade}
        onChangeText={formatValidade}
      />

      <TouchableOpacity style={styles.btn} onPress={handleSave}>
        <Text style={styles.btnText}>Salvar cartão</Text>
      </TouchableOpacity>
    </View>
  );
}
