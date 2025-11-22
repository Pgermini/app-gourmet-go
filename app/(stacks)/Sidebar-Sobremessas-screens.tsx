import SidebarSobremesas from "@/src/screens/SidebarSobremessas";
import { Stack } from "expo-router";

export default function SidebarSobremesasScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      <SidebarSobremesas />
    </>
  );
}
