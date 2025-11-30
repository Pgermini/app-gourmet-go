// Exemplo: src/screens/pagamentos/index.tsx (Mantendo o nome original do arquivo)

import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { router } from "expo-router";

export default function Pagamentos() {
  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        {/* Agora volta para a tela anterior (Perfis faz mais sentido para Gestão) */}
        <TouchableOpacity onPress={() => router.push("/(stacks)/perfil-screen")}>
          <FontAwesome6 name="arrow-left" size={22} color="#000" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>GESTÃO DE PAGAMENTOS</Text> {/* Título ajustado */}

        <View style={{ width: 22 }} />
      </View>

      {/* FORMAS DE PAGAMENTO */}
      <Text style={styles.sectionTitle}>Cartões e Configurações</Text>

      <View style={styles.cardsRow}>

        {/* 1. Cadastrar Novo Cartão */}
        <TouchableOpacity
          style={styles.paymentCard}
          onPress={() => router.push("/(stacks)/adicionar-cartao-screens")}
        >
          <FontAwesome6 name="plus" size={18} color="#d00" />
          <Text style={styles.cardTextTop}>Cadastrar</Text>
          <Text style={styles.cardTextMain}>Novo cartão</Text>
        </TouchableOpacity>

        {/* 2. Cartões Salvos */}
        <TouchableOpacity
          style={styles.paymentCard}
          onPress={() => router.push("/(stacks)/cartoes-salvos-screens")}
        >
          <FontAwesome6 name="credit-card" size={18} color="#000" />
          <Text style={styles.cardTextTop}>Cartão</Text>
          <Text style={styles.cardTextMain}>Salvos</Text>
          <Text style={styles.cardTextSub}>••• 1215</Text>
        </TouchableOpacity>
        

        <View style={styles.paymentCardPlaceholder} /> 
      </View>

      {/* HISTÓRICO DE PAGAMENTOS */}
      <View style={{ marginTop: 30 }}>
        <Text style={styles.sectionTitle}>Histórico</Text>

        <TouchableOpacity
          style={styles.historyCard}
          onPress={() => router.push("/(stacks)/historico-pagamentos-screens")}
        >
          <FontAwesome6 name="clock-rotate-left" size={24} color="#d00" />

          <View style={{ marginLeft: 12 }}>
            <Text style={styles.historyTitle}>Histórico de Pagamentos</Text>
            <Text style={styles.historySubtitle}>Veja seus pagamentos anteriores</Text>
          </View>

          <View style={{ flex: 1 }} />

          <FontAwesome6 name="chevron-right" size={18} color="#777" />
        </TouchableOpacity>
      </View>

    </View>
  );
}