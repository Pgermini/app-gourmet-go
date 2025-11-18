import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export const Home = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <View style={styles.container}>
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

          <View style={styles.line} />
        </View>

        <View>
          <Text style={styles.title}>Lanches</Text>
          <View style={styles.lanchesContainer}>
            <TouchableOpacity
              onPress={() => router.push("/Sidibar-Pizza-screens")}
            >
              <Image
                source={require("@/src/assets/lanches/pizza.png")}
                style={styles.ImagePizza}
                resizeMode="cover"
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                router.push("/(stacks)/Sidibar-Hamburguer-screens")
              }
            >
              <Image
                source={require("@/src/assets/lanches/Hamburguer.png")}
                style={styles.ImageHamburger}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Text style={styles.title}>Refeições</Text>
          <View style={styles.RefeicoesContainer}>
            <TouchableOpacity
              onPress={() => router.push("/(stacks)/Sidebar-Refeicoes-screens")}
            >
              <View style={styles.ImageRefeicoes}>
                <Image
                  source={require("@/src/assets/Refeições/refeições.png")}
                  style={styles.ImageRefeicoes}
                  resizeMode="cover"
                />
                <Text style={styles.textSobreImagem}>PRATOS PRINCIPAIS</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Text style={styles.title}>Sobremesas</Text>

          <View style={styles.SobremesasContainer}>
            <View style={styles.ImageSobremesas}>
              <Image
                source={require("@/src/assets/Sobremesas/Sobremesas.png")}
                style={styles.ImageSobremesas}
                resizeMode="cover"
              />
              <Text style={styles.textSobreImagem}>DOCES / SORVETES</Text>
            </View>
          </View>
        </View>

        <View>
          <Text style={styles.title}>Bebidas</Text>

          <View style={styles.BebidasContainer}>
            <View style={styles.cardFundo}>
              <Image
                source={require("@/src/assets/Bebidas/Bebidas.png")}
                style={styles.ImageBebidas}
                resizeMode="cover"
              />
              <Text style={styles.textSobreImagem}>DRINKS / REFRESCOS</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
