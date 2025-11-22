import AdicionarCartao from "@/src/screens/adicionar-cartao";
import { Stack } from "expo-router";

export default function AdicionarCartaoScreen() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <AdicionarCartao />
    </>
  );
}
