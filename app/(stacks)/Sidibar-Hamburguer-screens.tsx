import SidebarHamburguer from "@/screens/SidebarHamburguer";
import { Stack } from "expo-router";

export default function SidebarHamburguerScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      <SidebarHamburguer />
    </>
  );
}
