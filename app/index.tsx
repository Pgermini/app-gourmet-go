import { Auth } from "@/screens/auth/auth";
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
