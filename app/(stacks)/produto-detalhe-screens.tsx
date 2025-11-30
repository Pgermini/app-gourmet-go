import ProdutoDetalhe from "@/screens/produto-detalhe";
import { Stack } from "expo-router";

export default function ProdutoDetalheScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <ProdutoDetalhe />
    </>
  );
}
