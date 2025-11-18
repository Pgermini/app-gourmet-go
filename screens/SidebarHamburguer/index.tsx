import { MaterialCommunityIcons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { router } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function SidebarPizza() {
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.replace("/(stacks)/home-screen")}
        >
          <Entypo name="arrow-left" size={24} color="black" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>APROVEITE O GOURMET GO</Text>
      </View>
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

          {/* Sabores */}
          <Text style={styles.titleSabores}>SABORES</Text>

          <View style={styles.gridContainer}>
            <View style={styles.saborCard}>
              <Image
                source={require("@/src/assets/hamburguer/hamb1.png")}
                style={styles.saborImg}
              />
              <Text style={styles.saborLabel}>Clássico da Casa</Text>
            </View>

            {/* Quatro Queijos */}
            <View style={styles.saborCard}>
              <Image
                source={require("@/src/assets/hamburguer/hamb2.png")}
                style={styles.saborImg}
              />
              <Text style={styles.saborLabel}>Burger Raiz</Text>
            </View>

            {/* Frango c/ Catupiry */}
            <View style={styles.saborCard}>
              <Image
                source={require("@/src/assets/hamburguer/hamb3.png")}
                style={styles.saborImg}
              />
              <Text style={styles.saborLabel}>Old School Burger</Text>
            </View>

            {/* Portuguesa */}
            <View style={styles.saborCard}>
              <Image
                source={require("@/src/assets/hamburguer/hamb4.png")}
                style={styles.saborImg}
              />
              <Text style={styles.saborLabel}>Vintage Burger</Text>
            </View>

            {/* Calabresa */}
            <View style={styles.saborCard}>
              <Image
                source={require("@/src/assets/hamburguer/hamb5.png")}
                style={styles.saborImg}
              />
              <Text style={styles.saborLabel}>Burger Monster</Text>
            </View>

            {/* Bacon c/ Milho */}
            <View style={styles.saborCard}>
              <Image
                source={require("@/src/assets/hamburguer/hamb6.png")}
                style={styles.saborImg}
              />
              <Text style={styles.saborLabel}>Mestre dos queijos</Text>
            </View>

            {/* Napolitana */}
            <View style={styles.saborCard}>
              <Image
                source={require("@/src/assets/hamburguer/hamb7.png")}
                style={styles.saborImg}
              />
              <Text style={styles.saborLabel}>Dos Deuses</Text>
            </View>

            {/* Lombo Canadense */}
            <View style={styles.saborCard}>
              <Image
                source={require("@/src/assets/hamburguer/hamb8.png")}
                style={styles.saborImg}
              />
              <Text style={styles.saborLabel}>Saudável</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem}>
          <Entypo name="home" size={26} color="black" />
          <Text style={styles.footerText}>Início</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem}>
          <Feather name="search" size={26} color="black" />
          <Text style={styles.footerText}>Buscar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem}>
          <MaterialCommunityIcons
            name="list-box-outline"
            size={26}
            color="black"
          />
          <Text style={styles.footerText}>Pedidos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem}>
          <FontAwesome5 name="user-alt" size={24} color="black" />
          <Text style={styles.footerText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
