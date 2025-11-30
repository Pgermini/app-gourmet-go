import FinalizarCompra from "@/screens/finalizarCompra";
import { Stack } from "expo-router";

export default function checkout() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      < FinalizarCompra />
    </>
  );
}
