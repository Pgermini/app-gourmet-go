import HistoricoPagamentos from "@/src/screens/historico-pagamentos";
import { Stack } from "expo-router";

export default function HistoricoPagamentosScreen() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <HistoricoPagamentos />
    </>
  );
}
