import {
  Entypo,
  Feather,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.footerItem}>
        <Entypo name="home" size={26} color="black" />
        <Text style={styles.footerText}>Início</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.footerItem}>
        <Feather name="search" size={26} color="black" />
        <Text style={styles.footerText}>Buscar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.footerItem}>
        <MaterialCommunityIcons
          name="clipboard-text-outline"
          size={26}
          color="black"
        />
        <Text style={styles.footerText}>Pedidos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.footerItem}>
        <FontAwesome5 name="user-alt" size={24} color="black" />
        <Text style={styles.footerText}>Perfil</Text>
      </TouchableOpacity>
    </View>
  );
}
