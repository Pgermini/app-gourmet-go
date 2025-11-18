import Entypo from "@expo/vector-icons/Entypo";
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
              source={{
                uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504405/hamburguer_rdzjgo.png",
              }}
              style={styles.destaqueImg}
              resizeMode="cover"
            />

            <Image
              source={{
                uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504404/espaguete_olgaid.png",
              }}
              style={styles.destaqueImg}
              resizeMode="cover"
            />

            <Image
              source={{
                uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504404/empad%C3%A3o_p60xn6.png",
              }}
              style={styles.destaqueImg}
              resizeMode="cover"
            />

            <Image
              source={{
                uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504406/sushi_s0rofe.png",
              }}
              style={styles.destaqueImg}
              resizeMode="cover"
            />

            <Image
              source={{
                uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504407/salm%C3%A3o_ov3b1q.png",
              }}
              style={styles.destaqueImg}
              resizeMode="cover"
            />

            <Image
              source={{
                uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504406/pet_gato_hq97qg.png",
              }}
              style={styles.destaqueImg}
              resizeMode="cover"
            />

            <Image
              source={{
                uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504403/a%C3%A7ai_dn7g37.png",
              }}
              style={styles.destaqueImg}
              resizeMode="cover"
            />

            <Image
              source={{
                uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504405/feijoada_lfphp2.png",
              }}
              style={styles.destaqueImg}
              resizeMode="cover"
            />

            <Image
              source={{
                uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504407/tacos_l3xcd6.png",
              }}
              style={styles.destaqueImg}
              resizeMode="cover"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
