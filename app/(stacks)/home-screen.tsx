import { Home } from "@/src/screens/home/home";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          header: () => {
            return (
              <View style={styles.topBar}>
                {/* Barra superior */}

                <TouchableOpacity>
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
    marginTop: 50,
    paddingHorizontal: 24,
    paddingBottom: 12,
  },
});
