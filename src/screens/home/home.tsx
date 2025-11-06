import { MaterialCommunityIcons } from "@expo/vector-icons";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <View style={styles.container}>
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

          <Image source={require("@/src/assets/logo/logo.png")} />

          <View style={styles.menuContainer}>
            <View style={styles.sub}>
              <Image
                source={require("@/src/assets/subMenu/lanches.png")}
                style={styles.subImage}
                resizeMode="cover"
              />
            </View>

            <View style={styles.sub}>
              <Image
                source={require("@/src/assets/subMenu/Refeições.png")}
                style={styles.subImage}
                resizeMode="cover"
              />
            </View>

            <View style={styles.sub}>
              <Image
                source={require("@/src/assets/subMenu/sobremessa.png")}
                style={styles.subImage}
                resizeMode="cover"
              />
            </View>
          </View>

          <View style={styles.line} />
          <Text style={styles.title}>Lanches</Text>

          <View style={styles.Image}>
            <Image
              source={require("@/src/assets/pizza/pizza.png")}
              style={styles.ImagePizza}
              resizeMode="cover"
            />
          </View>
          <View style={styles.line} />
          <Text style={styles.title}>Sabores</Text>
        </View>

        <View style={styles.saboresContainer}>
          <Image
            source={require("@/src/assets/pizza/sabores/Mussarela.png")}
            style={styles.ImageMussarela}
            resizeMode="cover"
          />

          <Image
            source={require("@/src/assets/pizza/sabores/QuatroQueijo.png")}
            style={styles.ImageQuatroQueijos}
            resizeMode="cover"
          />
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
