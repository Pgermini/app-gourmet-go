import { MaterialCommunityIcons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import { router } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function SidebarPizza() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
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
          <Text style={styles.titleSection}>Hamburguer</Text>

          <Image
            source={require("@/src/assets/lanches/Hamburguer.png")}
            style={styles.bigHamburguer}
          />

          {/* SABORES */}
          <Text style={styles.titleSabores}>SABORES</Text>

          <View style={styles.gridContainer}>
            {/* Clássico da Casa */}
            <View style={styles.saborCard}>
              <Image
                source={{
                  uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504400/hamb1_roxxiu.png",
                }}
                style={styles.saborImg}
              />
              <Text style={styles.saborLabel}>Clássico da Casa</Text>
            </View>

            {/* Burger Raiz */}
            <View style={styles.saborCard}>
              <Image
                source={{
                  uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504400/hamb2_birtp5.png",
                }}
                style={styles.saborImg}
              />
              <Text style={styles.saborLabel}>Burger Raiz</Text>
            </View>

            {/* Old School Burger */}
            <View style={styles.saborCard}>
              <Image
                source={{
                  uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504401/hamb3_rodo1y.png",
                }}
                style={styles.saborImg}
              />
              <Text style={styles.saborLabel}>Old School Burger</Text>
            </View>

            {/* Vintage Burger */}
            <View style={styles.saborCard}>
              <Image
                source={{
                  uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504401/hamb4_tb7blx.png",
                }}
                style={styles.saborImg}
              />
              <Text style={styles.saborLabel}>Vintage Burger</Text>
            </View>

            {/* Mestre dos Queijos */}
            <View style={styles.saborCard}>
              <Image
                source={{
                  uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504402/hamb6_mevb9r.png",
                }}
                style={styles.saborImg}
              />
              <Text style={styles.saborLabel}>Mestre dos Queijos</Text>
            </View>

            {/* Dos Deuses */}
            <View style={styles.saborCard}>
              <Image
                source={{
                  uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504402/hamb7_gdtlnj.png",
                }}
                style={styles.saborImg}
              />
              <Text style={styles.saborLabel}>Dos Deuses</Text>
            </View>

            {/* Saudável */}
            <View style={styles.saborCard}>
              <Image
                source={{
                  uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504403/hamb8_yxywxz.png",
                }}
                style={styles.saborImg}
              />
              <Text style={styles.saborLabel}>Saudável</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
