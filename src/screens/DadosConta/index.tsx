import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function DadosConta() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dados da Conta</Text>

      {/* Nome */}
      <View style={styles.inputGroup}>
        <FontAwesome6 name="user" size={20} color="#555" />
        <TextInput style={styles.input} placeholder="Nome completo" />
      </View>

      {/* CPF */}
      <View style={styles.inputGroup}>
        <FontAwesome6 name="id-card" size={20} color="#555" />
        <TextInput
          style={styles.input}
          placeholder="CPF"
          keyboardType="numeric"
          maxLength={11} // opcional: limita a 11 dígitos
        />
      </View>

      {/* Botão Salvar */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Editar</Text>
      </TouchableOpacity>
    </View>
  );
}
