import MetodoPadrao from "@/src/screens/metodo-padrao";
import { Stack } from "expo-router";

export default function MetodoPadraoScreen() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <MetodoPadrao />
    </>
  );
}
