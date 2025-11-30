import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";
import { styles } from "./styles";
import { registrarPagamento } from "@/services/historicoService";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";


export default function PagamentoPix() {
  const router = useRouter();

  const [modo, setModo] = useState<"scan" | "manual">("scan");
  const [codigoPix, setCodigoPix] = useState("");
  const [valor, setValor] = useState("");
  const [descricao, setDescricao] = useState("");

  async function salvarPagamento(descricaoBase: string) {
    if (!valor) {
      Alert.alert("Atenção", "Informe o valor.");
      return;
    }

    const valorNum = Number(valor.replace(",", "."));
    if (isNaN(valorNum) || valorNum <= 0) {
      Alert.alert("Atenção", "Valor inválido.");
      return;
    }

    const pagamento = {
      id: String(Date.now()),
      tipo: "PIX",
      valor: valorNum,
      data: new Date().toISOString(),
      descricao: descricao || descricaoBase,
    };

    const ok = await registrarPagamento(pagamento);

    if (ok) {
      Alert.alert("Sucesso", "Pagamento registrado.");
      router.push("/(stacks)/historico-pagamentos-screens");
    } else {
      Alert.alert("Erro", "Não foi possível registrar o pagamento.");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push("/(stacks)/pagamentos-screens")}
          >
            <FontAwesome6 name="arrow-left" size={22} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Pagamento via PIX</Text>
        <View style={{ width: 22 }} />
      </View>

      <Text style={styles.title}>Pagar com PIX</Text>

      {/* modos */}
      <View style={styles.modeSwitcher}>
        <TouchableOpacity
          style={[styles.modeBtn, modo === "scan" && styles.modeBtnActive]}
          onPress={() => setModo("scan")}
        >
          <Text
            style={[styles.modeText, modo === "scan" && styles.modeTextActive]}
          >
            Escanear QR
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.modeBtn, modo === "manual" && styles.modeBtnActive]}
          onPress={() => setModo("manual")}
        >
          <Text
            style={[styles.modeText, modo === "manual" && styles.modeTextActive]}
          >
            Inserir código
          </Text>
        </TouchableOpacity>
      </View>

      {modo === "scan" ? (
        <View style={styles.scanBox}>
          <Text style={styles.scanText}>
            Aqui integraria a câmera para QR Code.
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Valor (ex: 49.90)"
            keyboardType="numeric"
            value={valor}
            onChangeText={setValor}
          />

          <TextInput
            style={styles.input}
            placeholder="Descrição (opcional)"
            value={descricao}
            onChangeText={setDescricao}
          />

          <TouchableOpacity
            style={styles.primaryBtn}
            onPress={() => salvarPagamento("PIX (simulado)")}
          >
            <Text style={styles.primaryBtnText}>Simular leitura e pagar</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.manualBox}>
          <TextInput
            style={styles.input}
            placeholder="Cole ou digite o código PIX"
            value={codigoPix}
            onChangeText={setCodigoPix}
          />

          <TextInput
            style={styles.input}
            placeholder="Valor (ex: 49.90)"
            keyboardType="numeric"
            value={valor}
            onChangeText={setValor}
          />

          <TextInput
            style={styles.input}
            placeholder="Descrição (opcional)"
            value={descricao}
            onChangeText={setDescricao}
          />

          <TouchableOpacity
            style={styles.primaryBtn}
            onPress={() => salvarPagamento("PIX manual")}
          >
            <Text style={styles.primaryBtnText}>Pagar PIX</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
