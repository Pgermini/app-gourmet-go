import Car from "@/screens/car";
import { Stack } from "expo-router";

export default function CarScreen() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Car />
    </>
  );
}
