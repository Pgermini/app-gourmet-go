import CartoesSalvos from "@/src/screens/cartoes-salvos";
import { Stack } from "expo-router";

export default function CartoesSalvosScreen() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <CartoesSalvos />
    </>
  );
}
