import SidebarRefeicoes from "@/src/screens/SidebarRefeicoes";
import { Stack } from "expo-router";

export default function SidebarRefeicoesScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <SidebarRefeicoes />
    </>
  );
}
