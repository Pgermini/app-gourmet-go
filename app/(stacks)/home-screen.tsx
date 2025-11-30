import { Home } from "@/screens/home/home";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";


export default function HomeScreen() {
  const router = useRouter();
  return (
    <>
      <Stack.Screen
        options={{
          header: () => {
            return (
              <View style={styles.topBar}>
                {/* Barra superior */}

                <TouchableOpacity onPress={() => router.push("/(stacks)/car-screens")}>
                  <MaterialCommunityIcons
                    name="cart-variant"
                    size={28}
                    color="#000"
                  />
                </TouchableOpacity>


                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name="bell-outline"
                    size={28}
                    color="#000"
                  />
                </TouchableOpacity>
              </View>
            );
          },
        }}
      />
      <Home />
    </>
  );
}

export const styles = StyleSheet.create({
topBar: {
  width: "100%",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingHorizontal: 20,
  paddingTop: 10,
  paddingBottom: 10,
  backgroundColor: "#fff", // evita mancha preta
},

});
