import { Text, View } from "react-native";
import { styles } from "./styles";

export default function HistoricoPagamentos() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico de Pagamentos</Text>

      <Text style={styles.placeholder}>
        Você ainda não possui pagamentos realizados.
      </Text>
    </View>
  );
}
