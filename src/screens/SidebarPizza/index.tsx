import { SubMenu } from "@/components/MenuGlobal/SubMenuGlobal";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Entypo from "@expo/vector-icons/Entypo";
import { router } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function SidebarPizza() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <View style={styles.container}>
          {/* Top Bar */}
          <View style={styles.topBar}>
            <TouchableOpacity onPress={() => router.replace("/(stacks)/car-screens")}>
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

          {/* Lanches */}
          <Text style={styles.titleSection}>Lanches</Text>

          {/* Pizzas */}
          <Text style={styles.titlePizzas}>PIZZAS</Text>

          <Image
            source={require("@/assets/lanches/pizza.png")}
            style={styles.bigPizza}
          />

          {/* Sabores */}
          <Text style={styles.titleSabores}>SABORES</Text>

            <View style={styles.gridContainer}>

              {/* Mussarela */}
              <TouchableOpacity
                style={styles.saborCard}
                onPress={() =>
                  router.push({
                    pathname: "/(stacks)/produto-detalhe-screens",
                    params: {
                      name: "Pizza Mussarela",
                      price: "28.90",
                      image:
                        "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504409/mussarela_nncb4b.png",
                      description: "Pizza de mussarela tradicional com molho da casa."
                    }
                  })
                }
              >
                <Image
                  source={{
                    uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504409/mussarela_nncb4b.png",
                  }}
                  style={styles.saborImg}
                />
                <Text style={styles.saborLabel}>Mussarela</Text>
              </TouchableOpacity>

              {/* Quatro Queijos */}
              <TouchableOpacity
                style={styles.saborCard}
                onPress={() =>
                  router.push({
                    pathname: "/(stacks)/produto-detalhe-screens",
                    params: {
                      name: "Quatro Queijos",
                      price: "33.90",
                      image:
                        "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504410/quatro_queijo_wfjx71.png",
                      description: "Combinação perfeita de parmesão, mussarela, provolone e gorgonzola."
                    }
                  })
                }
              >
                <Image
                  source={{
                    uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504410/quatro_queijo_wfjx71.png",
                  }}
                  style={styles.saborImg}
                />
                <Text style={styles.saborLabel}>Quatro Queijos</Text>
              </TouchableOpacity>

              {/* Frango com Catupiry */}
              <TouchableOpacity
                style={styles.saborCard}
                onPress={() =>
                  router.push({
                    pathname: "/(stacks)/produto-detalhe-screens",
                    params: {
                      name: "Frango c/ Catupiry",
                      price: "34.90",
                      image:
                        "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504411/FrangoCatupiry_zzl1v9.png",
                      description:
                        "Frango temperado e Catupiry original cremoso."
                    }
                  })
                }
              >
                <Image
                  source={{
                    uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504411/FrangoCatupiry_zzl1v9.png",
                  }}
                  style={styles.saborImg}
                />
                <Text style={styles.saborLabel}>Frango c/ Catupiry</Text>
              </TouchableOpacity>

              {/* Portuguesa */}
              <TouchableOpacity
                style={styles.saborCard}
                onPress={() =>
                  router.push({
                    pathname: "/(stacks)/produto-detalhe-screens",
                    params: {
                      name: "Portuguesa",
                      price: "35.50",
                      image:
                        "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504410/portuguesa_ylmxpl.png",
                      description:
                        "Presunto, ovos, ervilhas, cebola, queijo e molho da casa."
                    }
                  })
                }
              >
                <Image
                  source={{
                    uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504410/portuguesa_ylmxpl.png",
                  }}
                  style={styles.saborImg}
                />
                <Text style={styles.saborLabel}>Portuguesa</Text>
              </TouchableOpacity>

              {/* Calabresa */}
              <TouchableOpacity
                style={styles.saborCard}
                onPress={() =>
                  router.push({
                    pathname: "/(stacks)/produto-detalhe-screens",
                    params: {
                      name: "Calabresa",
                      price: "31.90",
                      image:
                        "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504408/Calabresa_v8i5jg.png",
                      description:
                        "Calabresa fatiada, cebola, molho e queijo."
                    }
                  })
                }
              >
                <Image
                  source={{
                    uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504408/Calabresa_v8i5jg.png",
                  }}
                  style={styles.saborImg}
                />
                <Text style={styles.saborLabel}>Calabresa</Text>
              </TouchableOpacity>

              {/* lombo canadense */}
              <TouchableOpacity
                style={styles.saborCard}
                onPress={() =>
                  router.push({
                    pathname: "/(stacks)/produto-detalhe-screens",
                    params: {
                      name: "lombo canadense",
                      price: "35,90",
                      image:
                        "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504408/LomboCanadense_yxhbsk.png",
                      description:
                        "Carne suína curada e defumada, sabor suave e textura macia."
                    }
                  })
                }
              >
                <Image
                  source={{
                    uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504408/LomboCanadense_yxhbsk.png",
                  }}
                  style={styles.saborImg}
                />
                <Text style={styles.saborLabel}>lombo canadense</Text>
              </TouchableOpacity>

             {/* napolitana */}
              <TouchableOpacity
                style={styles.saborCard}
                onPress={() =>
                  router.push({
                    pathname: "/(stacks)/produto-detalhe-screens",
                    params: {
                      name: "napolitana",
                      price: "27.90",
                      image:
                        "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504410/Napolitana_xq4vo0.png",
                      description:
                        "Molho de tomate, Mussarela, Tomate em rodelas, Azeite e Orégano."
                    }
                  })
                }
              >
                <Image
                  source={{
                    uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504410/Napolitana_xq4vo0.png",
                  }}
                  style={styles.saborImg}
                />
                <Text style={styles.saborLabel}>napolitana</Text>
              </TouchableOpacity>

              {/* bacon milho */}
              <TouchableOpacity
                style={styles.saborCard}
                onPress={() =>
                  router.push({
                    pathname: "/(stacks)/produto-detalhe-screens",
                    params: {
                      name: "napolitana",
                      price: "24.90",
                      image:
                        "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504408/BaconMilho_n3xw5e.png",
                      description:
                        "Molho de tomate, Mussarela, Bacon e Milho."
                    }
                  })
                }
              >
                <Image
                  source={{
                    uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504408/BaconMilho_n3xw5e.png",
                  }}
                  style={styles.saborImg}
                />
                <Text style={styles.saborLabel}>bacon c milho</Text>
              </TouchableOpacity>

            </View>
        </View>
      </ScrollView>
    </View>
  );
}
