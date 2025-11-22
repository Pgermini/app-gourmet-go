import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function PerfilScreen() {
  return (
    <View style={styles.container}>
      <FontAwesome6
        name="face-grin-wink"
        size={80}
        color="#333"
        style={styles.profileIcon}
      />

      {/* LISTA DE OPÇÕES */}
      <View style={styles.listContainer}>
        {/* Notificações */}
        <TouchableOpacity style={styles.listItem}>
          <FontAwesome6
            name="bell"
            size={28}
            color="#000"
            style={styles.listIcon}
          />
          <Text style={styles.listText}>Notificações</Text>
          <Text style={styles.listArrow}>{">"}</Text>
        </TouchableOpacity>

        {/* Dados da Conta */}
        <TouchableOpacity
          style={styles.listItem}
          onPress={() => router.replace("/(stacks)/Dados-Conta-Screens")}
        >
          <FontAwesome6
            name="id-card"
            size={28}
            color="#000"
            style={styles.listIcon}
          />
          <Text style={styles.listText}>Dados da Conta</Text>
          <Text style={styles.listArrow}>{">"}</Text>
        </TouchableOpacity>

        {/* Pagamentos */}
        <TouchableOpacity
          style={styles.listItem}
          onPress={() => router.push("/(stacks)/pagamentos-screens")}
        >
          <FontAwesome6
            name="credit-card"
            size={28}
            color="#000"
            style={styles.listIcon}
          />
          <Text style={styles.listText}>Pagamentos</Text>
          <Text style={styles.listArrow}>{">"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
