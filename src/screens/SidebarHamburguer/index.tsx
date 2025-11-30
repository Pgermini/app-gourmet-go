import { SubMenu } from "@/components/MenuGlobal/SubMenuGlobal";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function SidebarHamburguer() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        <View style={styles.container}>
          
          {/* Top Bar */}
          <View style={styles.topBar}>
            <TouchableOpacity
              onPress={() => router.replace("/(stacks)/car-screens")}
            >
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
            source={require("@/assets/logo/logo.png")}
            style={styles.logo}
          />

          <SubMenu />

          {/* Sessão */}
          <Text style={styles.titleSection}>Lanches</Text>
          <Text style={styles.titleSection}>Hamburguer</Text>

          {/* Banner */}
          <Image
            source={require("@/assets/lanches/Hamburguer.png")}
            style={styles.bigHamburguer}
          />

          {/* SABORES */}
          <Text style={styles.titleSabores}>SABORES</Text>

          <View style={styles.gridContainer}>

            {/* Clássico da Casa */}
            <TouchableOpacity
              style={styles.saborCard}
              onPress={() =>
                router.push({
                  pathname: "/(stacks)/produto-detalhe-screens",
                  params: {
                    name: "Clássico da Casa",
                    price: "29,90",
                    description:
                      "Hambúrguer artesanal com queijo, alface, tomate e molho especial.",
                    image:
                      "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504400/hamb1_roxxiu.png",
                  },
                })
              }
            >
              <Image
                source={{
                  uri:
                    "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504400/hamb1_roxxiu.png",
                }}
                style={styles.saborImg}
              />
              <Text style={styles.saborLabel}>Clássico da Casa</Text>
            </TouchableOpacity>

            {/* Burger Raiz */}
            <TouchableOpacity
              style={styles.saborCard}
              onPress={() =>
                router.push({
                  pathname: "/(stacks)/produto-detalhe-screens",
                  params: {
                    name: "Burger Raiz",
                    price: "32,90",
                    description:
                      "Carne dupla, queijo, cebola caramelizada e maionese da casa.",
                    image:
                      "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504400/hamb2_birtp5.png",
                  },
                })
              }
            >
              <Image
                source={{
                  uri:
                    "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504400/hamb2_birtp5.png",
                }}
                style={styles.saborImg}
              />
              <Text style={styles.saborLabel}>Burger Raiz</Text>
            </TouchableOpacity>

            {/* Old School Burger */}
            <TouchableOpacity
              style={styles.saborCard}
              onPress={() =>
                router.push({
                  pathname: "/(stacks)/produto-detalhe-screens",
                  params: {
                    name: "Old School Burger",
                    price: "34,90",
                    description:
                      "Hambúrguer clássico com cheddar e molho barbecue.",
                    image:
                      "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504401/hamb3_rodo1y.png",
                  },
                })
              }
            >
              <Image
                source={{
                  uri:
                    "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504401/hamb3_rodo1y.png",
                }}
                style={styles.saborImg}
              />
              <Text style={styles.saborLabel}>Old School Burger</Text>
            </TouchableOpacity>

            {/* Vintage Burger */}
            <TouchableOpacity
              style={styles.saborCard}
              onPress={() =>
                router.push({
                  pathname: "/(stacks)/produto-detalhe-screens",
                  params: {
                    name: "Vintage Burger",
                    price: "31,90",
                    description:
                      "Sabor retrô com queijo prato, tomate e molho da casa.",
                    image:
                      "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504401/hamb4_tb7blx.png",
                  },
                })
              }
            >
              <Image
                source={{
                  uri:
                    "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504401/hamb4_tb7blx.png",
                }}
                style={styles.saborImg}
              />
              <Text style={styles.saborLabel}>Vintage Burger</Text>
            </TouchableOpacity>

            {/* Burger Monster */}
            <TouchableOpacity
              style={styles.saborCard}
              onPress={() =>
                router.push({
                  pathname: "/(stacks)/produto-detalhe-screens",
                  params: {
                    name: "Burger Monster",
                    price: "36.70",
                    description:
                      "Pão brioche, 5 carnes suculentas, queijo derretido em camadas, alface, tomate e molho especial.",
                    image:
                      "https://res.cloudinary.com/djdwgtphs/image/upload/v1764037176/hamb5_zbqgti.png",
                  },
                })
              }
            >
              <Image
                source={{
                  uri:
                    "https://res.cloudinary.com/djdwgtphs/image/upload/v1764037176/hamb5_zbqgti.png",
                }}
                style={styles.saborImg}
              />
              <Text style={styles.saborLabel}>Burger Monster</Text>
            </TouchableOpacity>

            {/* Mestre dos Queijos */}
            <TouchableOpacity
              style={styles.saborCard}
              onPress={() =>
                router.push({
                  pathname: "/(stacks)/produto-detalhe-screens",
                  params: {
                    name: "Mestre dos Queijos",
                    price: "37,90",
                    description:
                      "Três queijos artesanais e maionese exclusiva.",
                    image:
                      "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504402/hamb6_mevb9r.png",
                  },
                })
              }
            >
              <Image
                source={{
                  uri:
                    "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504402/hamb6_mevb9r.png",
                }}
                style={styles.saborImg}
              />
              <Text style={styles.saborLabel}>Mestre dos Queijos</Text>
            </TouchableOpacity>

            {/* Dos Deuses */}
            <TouchableOpacity
              style={styles.saborCard}
              onPress={() =>
                router.push({
                  pathname: "/(stacks)/produto-detalhe-screens",
                  params: {
                    name: "Dos Deuses",
                    price: "38,90",
                    description:
                      "Carne premium, bacon, cheddar derretido e molho especial.",
                    image:
                      "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504402/hamb7_gdtlnj.png",
                  },
                })
              }
            >
              <Image
                source={{
                  uri:
                    "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504402/hamb7_gdtlnj.png",
                }}
                style={styles.saborImg}
              />
              <Text style={styles.saborLabel}>Dos Deuses</Text>
            </TouchableOpacity>

            {/* Saudável */}
            <TouchableOpacity
              style={styles.saborCard}
              onPress={() =>
                router.push({
                  pathname: "/(stacks)/produto-detalhe-screens",
                  params: {
                    name: "Saudável",
                    price: "33,90",
                    description:
                      "Hambúrguer de frango com salada verde e molho leve.",
                    image:
                      "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504403/hamb8_yxywxz.png",
                  },
                })
              }
            >
              <Image
                source={{
                  uri:
                    "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504403/hamb8_yxywxz.png",
                }}
                style={styles.saborImg}
              />
              <Text style={styles.saborLabel}>Saudável</Text>
            </TouchableOpacity>

          </View>
        </View>
      </ScrollView>
    </View>
  );
}
