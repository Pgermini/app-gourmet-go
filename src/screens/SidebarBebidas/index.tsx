import { SubMenu } from "@/components/MenuGlobal/SubMenuGlobal";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function SidebarBebidas() {
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


          <Text style={styles.titleSection}>Bebidas</Text>


          <Image
            source={require("@/assets/lanches/Hamburguer.png")}
            style={styles.bigHamburguer}
          />

          <Text style={styles.titleSabores}>SABORES</Text>

          <View style={styles.gridContainer}>


            <TouchableOpacity
              style={styles.saborCard}
              onPress={() =>
                router.push({
                  pathname: "/(stacks)/produto-detalhe-screens",
                  params: {
                    name: "cappuccino",
                    price: "19,90",
                    description:
                      "Café expresso, Leite vaporizado e Espuma de leite cremosa.",
                    image:
                      "https://res.cloudinary.com/djdwgtphs/image/upload/v1763579233/Cappuccino_bu3tbp.jpg",
                  },
                })
              }
            >
              <Image
                source={{
                  uri:
                    "https://res.cloudinary.com/djdwgtphs/image/upload/v1763579233/Cappuccino_bu3tbp.jpg",
                }}
                style={styles.saborImg}
              />
              <Text style={styles.saborLabel}>cappuccino</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.saborCard}
              onPress={() =>
                router.push({
                  pathname: "/(stacks)/produto-detalhe-screens",
                  params: {
                    name: "café expresso",
                    price: "12,90",
                    description:
                      "Café moído, extraído sob pressão com água quente — resultando em um café concentrado, encorpado e aromático, com uma espuma cremosa chamada crema.",
                    image:
                      "https://res.cloudinary.com/djdwgtphs/image/upload/v1763579231/caf%C3%A9_expresso_pys56t.jpg",
                  },
                })
              }
            >
              <Image
                source={{
                  uri:
                    "https://res.cloudinary.com/djdwgtphs/image/upload/v1763579231/caf%C3%A9_expresso_pys56t.jpg",
                }}
                style={styles.saborImg}
              />
              <Text style={styles.saborLabel}>café expresso</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.saborCard}
              onPress={() =>
                router.push({
                  pathname: "/(stacks)/produto-detalhe-screens",
                  params: {
                    name: "milkshake de morango",
                    price: "24,90",
                    description:
                      "Sorvete de morango cremoso, Leite gelado, Morangos e Chantilly. ",
                    image:
                      "https://res.cloudinary.com/djdwgtphs/image/upload/v1763579230/milkshake_de_morango_fnws3b.webp",
                  },
                })
              }
            >
              <Image
                source={{
                  uri:
                    "https://res.cloudinary.com/djdwgtphs/image/upload/v1763579230/milkshake_de_morango_fnws3b.webp",
                }}
                style={styles.saborImg}
              />
              <Text style={styles.saborLabel}>milkshake de morango</Text>
            </TouchableOpacity>


            <TouchableOpacity
              style={styles.saborCard}
              onPress={() =>
                router.push({
                  pathname: "/(stacks)/produto-detalhe-screens",
                  params: {
                    name: "suco verde detox",
                    price: "11,90",
                    description:
                      "Sorvete de morango cremoso, Leite gelado, Morangos e Chantilly. ",
                    image:
                      "https://res.cloudinary.com/djdwgtphs/image/upload/v1763579223/suco-verde-detox_mlqztk.jpg",
                  },
                })
              }
            >
              <Image
                source={{
                  uri:
                    "https://res.cloudinary.com/djdwgtphs/image/upload/v1763579223/suco-verde-detox_mlqztk.jpg",
                }}
                style={styles.saborImg}
              />
              <Text style={styles.saborLabel}>suco verde detox
              </Text>
            </TouchableOpacity>


            <TouchableOpacity
              style={styles.saborCard}
              onPress={() =>
                router.push({
                  pathname: "/(stacks)/produto-detalhe-screens",
                  params: {
                    name: "caipirinha",
                    price: "15.0",
                    description:
                      "Limão macerado, Açúcar, Gelo e Cachaça — refrescante e sabor autêntico do Brasil",
                    image:
                      "https://res.cloudinary.com/djdwgtphs/image/upload/v1763579223/caipirinhas_xz1kqh.jpg",
                  },
                })
              }
            >
              <Image
                source={{
                  uri:
                    "https://res.cloudinary.com/djdwgtphs/image/upload/v1763579223/caipirinhas_xz1kqh.jpg",
                }}
                style={styles.saborImg}
              />
              <Text style={styles.saborLabel}>caipirinha</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.saborCard}
              onPress={() =>
                router.push({
                  pathname: "/(stacks)/produto-detalhe-screens",
                  params: {
                    name: "Eisenbahn",
                    price: "15,0",
                    description:
                      "Cerveja puro malte, de coloração dourada e sabor equilibrado entre malte e lúpulo",
                    image:
                      "https://res.cloudinary.com/djdwgtphs/image/upload/v1764013299/Eisenbah-2_khxlnf.jpg",
                  },
                })
              }
            >
              <Image
                source={{
                  uri:
                    "https://res.cloudinary.com/djdwgtphs/image/upload/v1764013299/Eisenbah-2_khxlnf.jpg",
                }}
                style={styles.saborImg}
              />
              <Text style={styles.saborLabel}>Eisenbahn</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.saborCard}
              onPress={() =>
                router.push({
                  pathname: "/(stacks)/produto-detalhe-screens",
                  params: {
                    name: "guaranás",
                    price: "7.6",
                    description:
                      "Guaraná gelado com gás, sem adição de açúcar — sabor leve e refrescante",
                    image:
                      "https://res.cloudinary.com/djdwgtphs/image/upload/v1764013299/guarana-antarctica-zero_iyy9kh.jpg",
                  },
                })
              }
            >
              <Image
                source={{
                  uri:
                    "https://res.cloudinary.com/djdwgtphs/image/upload/v1764013299/guarana-antarctica-zero_iyy9kh.jpg",
                }}
                style={styles.saborImg}
              />
              <Text style={styles.saborLabel}>guaraná</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.saborCard}
              onPress={() =>
                router.push({
                  pathname: "/(stacks)/produto-detalhe-screens",
                  params: {
                    name: "coca-cola",
                    price: "10.5",
                    description:
                      "Refrigerante gelado sabor cola, servido com gelo — clássico e refrescante.",
                    image:
                      "https://res.cloudinary.com/djdwgtphs/image/upload/v1764013301/coca-cola-2_ovtfgn.jpg",
                  },
                })
              }
            >
              <Image
                source={{
                  uri:
                    "https://res.cloudinary.com/djdwgtphs/image/upload/v1764013301/coca-cola-2_ovtfgn.jpg",
                }}
                style={styles.saborImg}
              />
              <Text style={styles.saborLabel}>coca-cola</Text>
            </TouchableOpacity>

          </View>
        </View>
      </ScrollView>
    </View>
  );
}
