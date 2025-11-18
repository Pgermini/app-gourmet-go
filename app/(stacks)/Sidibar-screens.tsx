import Sidebar from "@/src/screens/Sidebar";
import { Stack } from "expo-router";

export default function SidibarScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      <Sidebar />
    </>
  );
}
