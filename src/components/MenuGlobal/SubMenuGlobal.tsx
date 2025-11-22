import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export const SubMenu = () => {
  const router = useRouter();

  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      {/* Ícone do menu fixo à esquerda */}
      <TouchableOpacity
        onPress={() => router.push("/(stacks)/Sidibar-screens")}
        style={{ paddingHorizontal: 8 }}
      >
        <AntDesign name="menu" size={24} color="black" />
      </TouchableOpacity>

      {/* SUBMENU ROLÁVEL */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.menuRapidoContainer}
      >
        {/* Hamburguer */}
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push("/(stacks)/Sidibar-Hamburguer-screens")}
        >
          <View style={styles.menuCardFundo}>
            <Image
              source={require("@/src/assets/lanches/Hamburguer.png")}
              style={styles.menuImage}
            />
            <Text style={styles.menuLabel}>Lanches</Text>
          </View>
        </TouchableOpacity>

        {/* Pizza */}
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push("/(stacks)/Sidibar-Pizza-screens")}
        >
          <View style={styles.menuCardFundo}>
            <Image
              source={require("@/src/assets/lanches/pizza.png")}
              style={styles.menuImage}
            />
            <Text style={styles.menuLabel}>Pizza</Text>
          </View>
        </TouchableOpacity>

        {/* Refeições */}
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push("/(stacks)/Sidebar-Refeicoes-screens")}
        >
          <View style={styles.menuCardFundo}>
            <Image
              source={require("@/src/assets/Refeições/refeições.png")}
              style={styles.menuImage}
            />
            <Text style={styles.menuLabel}>Refeições</Text>
          </View>
        </TouchableOpacity>

        {/* Sobremesas */}
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push("/(stacks)/Sidebar-Sobremessas-screens")}
        >
          <View style={styles.menuCardFundo}>
            <Image
              source={require("@/src/assets/Sobremesas/Sobremesas.png")}
              style={styles.menuImage}
            />
            <Text style={styles.menuLabel}>Sobremesas</Text>
          </View>
        </TouchableOpacity>

        {/* Bebidas */}
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push("/(stacks)/Sidebar-Bebidas-screens")}
        >
          <View style={styles.menuCardFundo}>
            <Image
              source={require("@/src/assets/Bebidas/Bebidas.png")}
              style={styles.menuImage}
            />
            <Text style={styles.menuLabel}>Bebidas</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
