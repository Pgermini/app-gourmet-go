import SelecaoCartoes from "@/screens/selecao-cartoes";
import { Stack } from "expo-router";

export default function SelecaoCartoesScreens() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <SelecaoCartoes />
    </>
  );
}
