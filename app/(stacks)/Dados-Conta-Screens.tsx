import DadosConta from "@/src/screens/DadosConta";
import { Stack } from "expo-router";

export default function DadosContaScreens() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      <DadosConta />
    </>
  );
}
