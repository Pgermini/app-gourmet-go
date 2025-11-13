import { MaterialCommunityIcons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function SidebarPizza() {
  return (
    <View>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <View style={styles.container}>
          {/* Barra superior */}
          <View style={styles.topBar}>
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
          {/* Logo */}
          <Image
            source={require("@/src/assets/logo/logo.png")}
            style={{
              width: 160,
              height: 80,
              resizeMode: "contain",
              marginTop: 10,
            }}
          />
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.menuRapidoContainer}
        >
          <TouchableOpacity onPress={() => router.replace("/Sidibar-screens")}>
            <AntDesign
              name="menu"
              size={28}
              color="black"
              style={{ marginRight: 10 }}
            />
          </TouchableOpacity>

          {[
            {
              src: require("@/src/assets/subMenu/Lanches.png"),
              nome: "Lanches",
            },
            {
              src: require("@/src/assets/subMenu/Refeições (2).png"),
              nome: "Refeições",
            },
            {
              src: require("@/src/assets/subMenu/Sobremesas (2).png"),
              nome: "Sobremesas",
            },
            {
              src: require("@/src/assets/subMenu/Bebidas (2).png"),
              nome: "Bebidas",
            },
          ].map((item, index) => (
            <TouchableOpacity key={index} style={styles.menuItem}>
              <View style={styles.menuCardFundo}>
                <Image
                  source={item.src}
                  style={styles.menuImage}
                  resizeMode="cover"
                />
                <Text style={styles.menuLabel}>{item.nome}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
}
