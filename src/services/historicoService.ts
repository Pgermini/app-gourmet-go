import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "historico_pagamentos";

// salva um pagamento no histórico
export async function registrarPagamento(pagamento: any) {
  try {
    const atual = await AsyncStorage.getItem(KEY);
    const lista = atual ? JSON.parse(atual) : [];

    lista.push(pagamento);

    await AsyncStorage.setItem(KEY, JSON.stringify(lista));

    return true;
  } catch (error) {
    console.log("Erro ao registrar pagamento:", error);
    return false;
  }
}

// lista todos os pagamentos
export async function listarPagamentos() {
  try {
    const data = await AsyncStorage.getItem(KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log("Erro ao listar pagamentos:", error);
    return [];
  }
}
