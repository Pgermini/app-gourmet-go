import { SubMenu } from "@/components/MenuGlobal/SubMenuGlobal";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function Sidebar() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView contentContainerStyle={styles.content}>

        <View style={styles.categoriesContainer}>
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
