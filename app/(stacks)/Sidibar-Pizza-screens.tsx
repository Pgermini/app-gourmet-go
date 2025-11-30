import SidebarPizza from "@/screens/SidebarPizza";
import { Stack } from "expo-router";

export default function SidebarPizzaScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      <SidebarPizza />
    </>
  );
}
