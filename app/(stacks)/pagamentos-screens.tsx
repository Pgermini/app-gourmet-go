import Pagamentos from "@/screens/pagamentos";
import { Stack } from "expo-router";

export default function PagamentosScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      <Pagamentos />
    </>
  );
}
