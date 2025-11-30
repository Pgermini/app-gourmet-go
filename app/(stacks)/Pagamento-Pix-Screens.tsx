import PagamentoPix from "@/screens/PagamentoPix";
import { Stack } from "expo-router";

export default function PagamentoPixScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      <PagamentoPix />
    </>
  );
}
