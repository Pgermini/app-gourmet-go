import { InputAuth } from "@/src/components/input-auth/input-auth";
import { router } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export const Auth = () => {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 30,
          alignItems: "center",
        }}
      >
        <Image source={require("@/src/assets/logo/logo.png")} />
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
          setValue={setCpf}
          value={cpf}
        />
        <TouchableOpacity
          onPress={() => router.replace("./(stacks)/home-screen")}
          style={styles.styleContetButton}
        >
          <Text style={styles.styleTextButton}>Entrar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
