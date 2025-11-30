// app/(stacks)/Pedidos-screens.tsx

import Pedidos from "@/screens/Pedidos"; 
import { Stack } from "expo-router";

export default function PedidosScreens() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false, // Oculta o cabeçalho padrão do Stack
        }}
      />

      {/* Renderiza o componente principal de Pedidos */}
      <Pedidos /> 
    </>
  );
}