import HistoricoPagamentos from "@/screens/HistoricoPagamentos";
import { Stack } from "expo-router";

export default function HistoricoPagamentosScreen() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <HistoricoPagamentos />
    </>
  );
}
