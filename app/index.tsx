import { Auth } from "@/src/screens/auth/auth";
import { Stack } from "expo-router";

export default function AuthScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      <Auth />
    </>
  );
}
