// app/(stacks)/pedido-detalhe-screens.tsx

import PedidoDetalhe from "@/screens/pedido-detalhe"; 
import { Stack } from "expo-router";

export default function PedidoDetalheScreens() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false, // O componente tem seu próprio cabeçalho
        }}
      />

      {/* Renderiza o componente de Detalhes do Pedido */}
      <PedidoDetalhe /> 
    </>
  );
}