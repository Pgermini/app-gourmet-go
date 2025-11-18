import { MaterialCommunityIcons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import { router } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function SidebarPizza() {
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

          {/* Lanches */}
          <Text style={styles.titleSection}>Lanches</Text>

          {/* Pizzas */}
          <Text style={styles.titlePizzas}>PIZZAS</Text>

          <Image
            source={require("@/src/assets/lanches/pizza.png")}
            style={styles.bigPizza}
          />

          {/* Sabores */}
          <Text style={styles.titleSabores}>SABORES</Text>

          <View style={styles.gridContainer}>
            {/* Mussarela */}
            <View style={styles.saborCard}>
              <Image
                source={{
                  uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504409/mussarela_nncb4b.png",
                }}
                style={styles.saborImg}
              />
              <Text style={styles.saborLabel}>Mussarela</Text>
            </View>

            {/* Quatro Queijos */}
            <View style={styles.saborCard}>
              <Image
                source={{
                  uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504410/quatro_queijo_wfjx71.png",
                }}
                style={styles.saborImg}
              />
              <Text style={styles.saborLabel}>Quatro Queijos</Text>
            </View>

            {/* Frango Catupiry */}
            <View style={styles.saborCard}>
              <Image
                source={{
                  uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504411/FrangoCatupiry_zzl1v9.png",
                }}
                style={styles.saborImg}
              />
              <Text style={styles.saborLabel}>Frango c/ Catupiry</Text>
            </View>

            {/* Portuguesa */}
            <View style={styles.saborCard}>
              <Image
                source={{
                  uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504410/portuguesa_ylmxpl.png",
                }}
                style={styles.saborImg}
              />
              <Text style={styles.saborLabel}>Portuguesa</Text>
            </View>

            {/* Calabresa */}
            <View style={styles.saborCard}>
              <Image
                source={{
                  uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504408/Calabresa_v8i5jg.png",
                }}
                style={styles.saborImg}
              />
              <Text style={styles.saborLabel}>Calabresa</Text>
            </View>

            {/* Bacon Milho */}
            <View style={styles.saborCard}>
              <Image
                source={{
                  uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504408/BaconMilho_n3xw5e.png",
                }}
                style={styles.saborImg}
              />
              <Text style={styles.saborLabel}>Bacon c/ Milho</Text>
            </View>

            {/* Napolitana */}
            <View style={styles.saborCard}>
              <Image
                source={{
                  uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504410/Napolitana_xq4vo0.png",
                }}
                style={styles.saborImg}
              />
              <Text style={styles.saborLabel}>Napolitana</Text>
            </View>

            {/* Lombo Canadense */}
            <View style={styles.saborCard}>
              <Image
                source={{
                  uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504408/LomboCanadense_yxhbsk.png",
                }}
                style={styles.saborImg}
              />
              <Text style={styles.saborLabel}>Lombo Canadense</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
