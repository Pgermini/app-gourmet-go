import { MaterialCommunityIcons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import { router } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function SidebarBebidas() {
  return (
    <View>
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <View style={styles.container}>
          {/* Top Bar */}
          <View style={styles.topBar}>
            <TouchableOpacity onPress={() => router.replace("/home-screen")}>
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
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => router.replace("/(stacks)/home-screen")}
            >
              <Entypo name="arrow-left" size={24} color="black" />
            </TouchableOpacity>

            <Text style={styles.headerTitle}>APROVEITE O GOURMET GO</Text>
          </View>

          {/* Logo */}
          <Image
            source={require("@/src/assets/logo/logo.png")}
            style={styles.logo}
          />

          {/* Menu Rápido */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.menuRapidoContainer}
          >
            <TouchableOpacity
              onPress={() => router.replace("/Sidibar-screens")}
            >
              <AntDesign
                name="menu"
                size={28}
                color="black"
                style={{ marginRight: 15 }}
              />
            </TouchableOpacity>

            {/* Item 1 */}
            <View style={styles.menuItem}>
              <View style={styles.menuCardFundo}>
                <Image
                  source={require("@/src/assets/subMenu/Lanches.png")}
                  style={styles.menuImage}
                />
                <Text style={styles.menuLabel}>Lanches</Text>
              </View>
            </View>

            {/* Item 2 */}
            <View style={styles.menuItem}>
              <View style={styles.menuCardFundo}>
                <Image
                  source={require("@/src/assets/subMenu/Refeições (2).png")}
                  style={styles.menuImage}
                />
                <Text style={styles.menuLabel}>Refeições</Text>
              </View>
            </View>

            {/* Item 3 */}
            <View style={styles.menuItem}>
              <View style={styles.menuCardFundo}>
                <Image
                  source={require("@/src/assets/subMenu/Sobremesas (2).png")}
                  style={styles.menuImage}
                />
                <Text style={styles.menuLabel}>Sobremesas</Text>
              </View>
            </View>

            {/* Item 4 */}
            <View style={styles.menuItem}>
              <View style={styles.menuCardFundo}>
                <Image
                  source={require("@/src/assets/subMenu/Bebidas (2).png")}
                  style={styles.menuImage}
                />
                <Text style={styles.menuLabel}>Bebidas</Text>
              </View>
            </View>
          </ScrollView>

          <Text style={styles.titleSection}>Bebidas</Text>

          <Text style={styles.titlePizzas}>DRINKS</Text>

          <Image
            source={require("@/src/assets/Bebidas/Bebidas.png")}
            style={styles.bigDribk}
          />

          <View style={styles.gridContainer}>
            <View style={styles.saborCard}>
              <Image
                source={{
                  uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763579230/milkshake_de_morango_fnws3b.webp",
                }}
                style={styles.saborImg}
              />
              <Text style={styles.saborLabel}>Milkshake de Morango</Text>
            </View>

            <View style={styles.saborCard}>
              <Image
                source={{
                  uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763579231/caf%C3%A9_expresso_pys56t.jpg",
                }}
                style={styles.saborImg}
              />
              <Text style={styles.saborLabel}>Café Expresso</Text>
            </View>

            <View style={styles.saborCard}>
              <Image
                source={{
                  uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763579233/Cappuccino_bu3tbp.jpg",
                }}
                style={styles.saborImg}
              />
              <Text style={styles.saborLabel}>Cappuccino</Text>
            </View>

            <View style={styles.saborCard}>
              <Image
                source={{
                  uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763579222/suco_de_laranja_xmei0f.webp",
                }}
                style={styles.saborImg}
              />
              <Text style={styles.saborLabel}>Suco de Laranja</Text>
            </View>

            <View style={styles.saborCard}>
              <Image
                source={{
                  uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763579223/caipirinhas_xz1kqh.jpg",
                }}
                style={styles.saborImg}
              />
              <Text style={styles.saborLabel}>Caipirinha</Text>
            </View>

            <View style={styles.saborCard}>
              <Image
                source={{
                  uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763579223/suco-verde-detox_mlqztk.jpg",
                }}
                style={styles.saborImg}
              />
              <Text style={styles.saborLabel}>Suco Detox Verde</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
