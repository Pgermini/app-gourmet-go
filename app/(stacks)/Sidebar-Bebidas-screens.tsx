import SidebarBebidas from "@/screens/SidebarBebidas";
import { Stack } from "expo-router";

export default function SidebarRefeicoesScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <SidebarBebidas />
    </>
  );
}
