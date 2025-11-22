import { SubMenu } from "@/src/components/MenuGlobal/SubMenuGlobal";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function SidebarSobremesas() {
  return (
    <View>
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
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

          <Text style={styles.titleSection}>Sobremessas</Text>

          <Text style={styles.titlePizzas}>DOCES / SORVETES</Text>

          <Image
            source={require("@/src/assets/Sobremesas/Sobremesas.png")}
            style={styles.bigDoce}
          />

          <View style={styles.gridContainer}>
            <View style={styles.saborCard}>
              <Image
                source={{
                  uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763578146/panqueca_doce_uazdoc.webp",
                }}
                style={styles.saborImg}
              />
              <Text style={styles.saborLabel}>Panqueca Doce</Text>
            </View>

            <View style={styles.saborCard}>
              <Image
                source={{
                  uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763578152/crepe_de_nutella_ttyisg.jpg",
                }}
                style={styles.saborImg}
              />
              <Text style={styles.saborLabel}>Crepe de Nutella</Text>
            </View>

            <View style={styles.saborCard}>
              <Image
                source={{
                  uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763578149/pav%C3%AA_de_chocolate_sgfj7k.png",
                }}
                style={styles.saborImg}
              />
              <Text style={styles.saborLabel}>Pavê de Chocolate</Text>
            </View>

            <View style={styles.saborCard}>
              <Image
                source={{
                  uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763578147/tiramis%C3%B9_hewsll.webp",
                }}
                style={styles.saborImg}
              />
              <Text style={styles.saborLabel}>Tiramisù</Text>
            </View>

            <View style={styles.saborCard}>
              <Image
                source={{
                  uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763578833/petit-gateau_nltozg.jpg",
                }}
                style={styles.saborImg}
              />
              <Text style={styles.saborLabel}>Petit Gateau</Text>
            </View>

            <View style={styles.saborCard}>
              <Image
                source={{
                  uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763578833/brownie_com_sorvete_rsxiyl.jpg",
                }}
                style={styles.saborImg}
              />
              <Text style={styles.saborLabel}>Brownie com Sorvete</Text>
            </View>

            <View style={styles.saborCard}>
              <Image
                source={{
                  uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763578150/sorvete_artesanal_f6kmxr.jpg",
                }}
                style={styles.saborImg}
              />
              <Text style={styles.saborLabel}>Sorvete Artesanal</Text>
            </View>

            <View style={styles.saborCard}>
              <Image
                source={{
                  uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763578148/a%C3%A7a%C3%AD_de_tigela_zbwmdu.jpg",
                }}
                style={styles.saborImg}
              />
              <Text style={styles.saborLabel}>Açaí na Tigela</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
