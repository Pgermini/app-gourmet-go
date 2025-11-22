import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function Pagamentos() {
  return (
    <View style={styles.container}>
      {/* Ícone Principal */}
      <FontAwesome6
        name="credit-card"
        size={80}
        color="#333"
        style={styles.profileIcon}
      />

      {/* LISTA DE OPÇÕES */}
      <View style={styles.listContainer}>
        {/* Cartões Salvos */}
        <TouchableOpacity
          style={styles.listItem}
          onPress={() => router.push("/(stacks)/cartoes-salvos-screens")}
        >
          <FontAwesome6
            name="credit-card"
            size={26}
            color="#000"
            style={styles.listIcon}
          />
          <Text style={styles.listText}>Cartões Salvos</Text>
          <Text style={styles.listArrow}>{">"}</Text>
        </TouchableOpacity>

        {/* Adicionar Cartão */}
        <TouchableOpacity
          style={styles.listItem}
          onPress={() => router.push("/(stacks)/adicionar-cartao-screens")}
        >
          <FontAwesome6
            name="plus-circle"
            size={26}
            color="#000"
            style={styles.listIcon}
          />
          <Text style={styles.listText}>Adicionar Cartão</Text>
          <Text style={styles.listArrow}>{">"}</Text>
        </TouchableOpacity>

        {/* Histórico */}
        <TouchableOpacity
          style={styles.listItem}
          onPress={() => router.push("/(stacks)/historico-pagamentos-screens")}
        >
          <FontAwesome6
            name="clock-rotate-left"
            size={26}
            color="#000"
            style={styles.listIcon}
          />
          <Text style={styles.listText}>Histórico de Pagamentos</Text>
          <Text style={styles.listArrow}>{">"}</Text>
        </TouchableOpacity>

        {/* Método Padrão */}
        <TouchableOpacity
          style={styles.listItem}
          onPress={() => router.push("/(stacks)/metodo-padrao-screens")}
        >
          <FontAwesome6
            name="check-circle"
            size={26}
            color="#000"
            style={styles.listIcon}
          />
          <Text style={styles.listText}>Método Padrão</Text>
          <Text style={styles.listArrow}>{">"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
