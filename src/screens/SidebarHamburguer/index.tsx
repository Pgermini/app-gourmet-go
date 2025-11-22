import { SubMenu } from "@/src/components/MenuGlobal/SubMenuGlobal";
import { MaterialCommunityIcons } from "@expo/vector-icons";
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

          {/* Logo */}
          <Image
            source={require("@/src/assets/logo/logo.png")}
            style={styles.logo}
          />

          <SubMenu />

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
