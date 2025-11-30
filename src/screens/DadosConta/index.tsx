import React, { useEffect, useState } from "react";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "./styles";

export default function DadosConta() {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");

  // Carregar dados salvos no Auth
  const loadUserData = async () => {
    const savedName = await AsyncStorage.getItem("userName");
    const savedCpf = await AsyncStorage.getItem("userCpf");

    if (savedName) setName(savedName);
    if (savedCpf) setCpf(savedCpf);
  };

  useEffect(() => {
    loadUserData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dados da Conta</Text>

      {/* Nome */}
      <View style={styles.inputGroup}>
        <FontAwesome6 name="user" size={20} color="#555" />
        <TextInput
          style={styles.input}
          placeholder="Nome completo"
          value={name}
          editable={false}   // se quiser permitir edição, mude para true
        />
      </View>

      {/* CPF */}
      <View style={styles.inputGroup}>
        <FontAwesome6 name="id-card" size={20} color="#555" />
        <TextInput
          style={styles.input}
          placeholder="CPF"
          value={cpf}
          editable={false}
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Editar</Text>
      </TouchableOpacity>
    </View>
  );
}
