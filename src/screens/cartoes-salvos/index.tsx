import { Text, View } from "react-native";
import { styles } from "./styles";

export default function CartoesSalvos() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cartões Salvos</Text>

      <Text style={styles.placeholder}>Nenhum cartão cadastrado.</Text>
    </View>
  );
}
