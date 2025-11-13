import { MaterialCommunityIcons } from "@expo/vector-icons";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useRouter } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function Sidebar() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.replace("/(stacks)/home-screen")}
        >
          <Entypo name="arrow-left" size={24} color="black" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>APROVEITE O GOURMET GO</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionTitle}>Categorias</Text>
        <View style={styles.categoriesContainer}>
          {[
            {
              nome: "Lanches",
              icon: require("@/src/assets/subMenu/Lanches.png"),
            },
            {
              nome: "Refeições",
              icon: require("@/src/assets/subMenu/Refeições (2).png"),
            },
            {
              nome: "Sobremesas",
              icon: require("@/src/assets/subMenu/Sobremesas (2).png"),
            },
            {
              nome: "Bebidas",
              icon: require("@/src/assets/subMenu/Bebidas (2).png"),
            },
          ].map((item, index) => (
            <TouchableOpacity key={index} style={styles.categoryCard}>
              <Image source={item.icon} style={styles.categoryIcon} />
              <Text style={styles.categoryLabel}>{item.nome}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View>
          <Text style={styles.SubTitle}>Destaques do Gourmet Go</Text>

          <View style={styles.DestaquesContainer}>
            <Image
              source={require("@/src/assets/Img_sidibar/hamburguer.png")}
              style={styles.imgHamburguer}
              resizeMode="cover"
            />
            <Image
              source={require("@/src/assets/Img_sidibar/espaguete.png")}
              style={styles.imgEspaguete}
              resizeMode="cover"
            />
            <Image
              source={require("@/src/assets/Img_sidibar/empadão.png")}
              style={styles.imgEmpadao}
              resizeMode="cover"
            />
            <Image
              source={require("@/src/assets/Img_sidibar/sushi.png")}
              style={styles.imgSushi}
              resizeMode="cover"
            />
            <Image
              source={require("@/src/assets/Img_sidibar/salmão.png")}
              style={styles.imgSalmao}
              resizeMode="cover"
            />
            <Image
              source={require("@/src/assets/Img_sidibar/pet_gato.png")}
              style={styles.imgPet_Gato}
              resizeMode="cover"
            />
            <Image
              source={require("@/src/assets/Img_sidibar/açai.png")}
              style={styles.imgAcai}
              resizeMode="cover"
            />
            <Image
              source={require("@/src/assets/Img_sidibar/feijoada.png")}
              style={styles.imgFeijoada}
              resizeMode="cover"
            />
            <Image
              source={require("@/src/assets/Img_sidibar/tacos.png")}
              style={styles.imgTacos}
              resizeMode="cover"
            />
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
