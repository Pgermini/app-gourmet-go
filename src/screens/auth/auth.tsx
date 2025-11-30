// src/screens/Auth.tsx  (ou onde você mantiver a tela)
import { InputAuth } from "@/components/input-auth/input-auth";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "@/services/api"; // certifique-se de criar src/services/api.js
import { styles } from "./styles";

export const Auth = () => {
  const [name, setName] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");

  // Formata CPF para 000.000.000-00 enquanto digita
  const handleCpfChange = (inputValue: string) => {
    let cpfNumbers = inputValue.replace(/\D/g, "");

    if (cpfNumbers.length > 11) cpfNumbers = cpfNumbers.slice(0, 11);

    let formattedCpf = cpfNumbers;
    if (cpfNumbers.length > 9) {
      formattedCpf = cpfNumbers.replace(
        /(\d{3})(\d{3})(\d{3})(\d{2})/,
        "$1.$2.$3-$4"
      );
    } else if (cpfNumbers.length > 6) {
      formattedCpf = cpfNumbers.replace(/(\d{3})(\d{3})(\d{1,3})/, "$1.$2.$3");
    } else if (cpfNumbers.length > 3) {
      formattedCpf = cpfNumbers.replace(/(\d{3})(\d{1,3})/, "$1.$2");
    }

    setCpf(formattedCpf);
  };

  // Envia para /users e salva localmente, depois vai para Home
  const handleLogin = async () => {
    // validações locais
    if (!name.trim() || !cpf.trim()) {
      Alert.alert("Erro", "Por favor, preencha todos os campos");
      return;
    }

    const cpfNumbersOnly = cpf.replace(/\D/g, "");
    if (cpfNumbersOnly.length !== 11) {
      Alert.alert("Erro", "CPF inválido. Digite os 11 números.");
      return;
    }

    try {
      // Backend atual espera cpf numérico (no seu backend há checagem typeof cpf === "number")
      // por isso enviamos como Number. Mantemos a versão formatada localmente.
      const payload = {
        name: name.trim(),
        cpf: Number(cpfNumbersOnly),
      };

      const response = await api.post("/users", payload);

      // response.data deve retornar { id, name, cpf } conforme sua rota POST /users
      const user = response.data;

      // salvar dados localmente para uso posterior (DadosConta, Pedidos, etc)
      await AsyncStorage.setItem("userId", user.id || "");
      await AsyncStorage.setItem("userName", user.name || name.trim());
      // Guardamos a versão formatada (para exibição)
      await AsyncStorage.setItem("userCpf", cpf);

      Alert.alert("Sucesso", "Usuário cadastrado/entrando no app");

      // navega para a Home
      router.replace("./(stacks)/home-screen");
    } catch (error: any) {
      console.log("Erro ao criar usuário:", error?.response || error);
      const message =
        error?.response?.data?.error || "Não foi possível conectar ao servidor.";
      Alert.alert("Erro", message);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 30,
          alignItems: "center",
        }}
      >
        <Image source={require("@/assets/logo/logo.png")} />
        <Text style={styles.title}>Bem-vindo!</Text>
        <Text style={styles.description}>
          Entre com suas credenciais para acessar sua conta
        </Text>

        <InputAuth
          iconName="user-large"
          placeholder="Digite Seu Nome Completo"
          title="Nome"
          setValue={setName}
          value={name}
        />

        <InputAuth
          iconName="address-card"
          placeholder="Digite Seu CPF"
          title="CPF"
          setValue={handleCpfChange}
          value={cpf}
        />

        <TouchableOpacity onPress={handleLogin} style={styles.styleContetButton}>
          <Text style={styles.styleTextButton}>Entrar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Auth;
