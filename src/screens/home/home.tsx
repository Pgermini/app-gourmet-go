import { MaterialCommunityIcons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { router } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export const Home = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
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
            <Image
              source={require("@/src/assets/lanches/pizza.png")}
              style={styles.ImagePizza}
              resizeMode="cover"
            />

            <Image
              source={require("@/src/assets/lanches/Hamburguer.png")}
              style={styles.ImageHamburger}
              resizeMode="cover"
            />
          </View>
        </View>

        <View>
          <Text style={styles.title}>Refeições</Text>

          <View style={styles.RefeicoesContainer}>
            <View style={styles.ImageRefeicoes}>
              <Image
                source={require("@/src/assets/Refeições/refeições.png")}
                style={styles.ImageRefeicoes}
                resizeMode="cover"
              />
              <Text style={styles.textSobreImagem}>PRATOS PRINCIPAIS</Text>
            </View>
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
};
