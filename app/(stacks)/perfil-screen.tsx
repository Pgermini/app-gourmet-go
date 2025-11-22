import Perfil from "@/src/screens/perfil";
import { Stack } from "expo-router";

export default function PerfilScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      <Perfil />
    </>
  );
}
