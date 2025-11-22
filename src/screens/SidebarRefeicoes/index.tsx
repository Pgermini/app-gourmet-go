import { SubMenu } from "@/src/components/MenuGlobal/SubMenuGlobal";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function SidebarRefeicoes() {
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
          <View>
            <Image
              source={require("@/src/assets/logo/logo.png")}
              style={styles.logo}
            />
          </View>

          <SubMenu />

          {/* Imagem grande */}
          <Text style={styles.title}>Refeições</Text>
          <Text style={styles.subtitle}>Pratos Principais</Text>

          <View style={styles.blocoImagem}>
            <Image
              source={require("@/src/assets/Refeições/refeições.png")}
              style={styles.imagemGrande}
            />
            <Text style={styles.textoSobreImagem}>PRATOS PRINCIPAIS</Text>
          </View>
          {/* GRID DE CARDS */}
          <View style={styles.grid}>
            <View style={styles.card}>
              <Image
                source={{
                  uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504390/BifeParmegiana_nteudc.png",
                }}
                style={styles.imgCard}
              />
              <Text style={styles.nomeCard}>Bife à Parmegiana</Text>
            </View>

            <View style={styles.card}>
              <Image
                source={{
                  uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504391/Camar%C3%A3oMoranga_gqwpoz.png",
                }}
                style={styles.imgCard}
              />
              <Text style={styles.nomeCard}>Camarão na Moranga</Text>
            </View>

            <View style={styles.card}>
              <Image
                source={{
                  uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504392/Churrasco_nlwwl8.png",
                }}
                style={styles.imgCard}
              />
              <Text style={styles.nomeCard}>Churrasco</Text>
            </View>

            <View style={styles.card}>
              <Image
                source={{
                  uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504392/Empad%C3%A3oFrango_xzeylg.png",
                }}
                style={styles.imgCard}
              />
              <Text style={styles.nomeCard}>Empadão de Frango</Text>
            </View>

            <View style={styles.card}>
              <Image
                source={{
                  uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504393/EscondidinhoCarneSeca_vxofxw.png",
                }}
                style={styles.imgCard}
              />
              <Text style={styles.nomeCard}>Escondidinho Carne Seca</Text>
            </View>

            <View style={styles.card}>
              <Image
                source={{
                  uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504392/Espaguete_ps8biu.png",
                }}
                style={styles.imgCard}
              />
              <Text style={styles.nomeCard}>Espaguete</Text>
            </View>

            <View style={styles.card}>
              <Image
                source={{
                  uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504393/Feijoada_fizgou.png",
                }}
                style={styles.imgCard}
              />
              <Text style={styles.nomeCard}>Feijoada</Text>
            </View>

            <View style={styles.card}>
              <Image
                source={{
                  uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504394/HotRoll_o7prxr.png",
                }}
                style={styles.imgCard}
              />
              <Text style={styles.nomeCard}>Hot Roll</Text>
            </View>

            <View style={styles.card}>
              <Image
                source={{
                  uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504394/Lasanha_ikslot.png",
                }}
                style={styles.imgCard}
              />
              <Text style={styles.nomeCard}>Lasanha</Text>
            </View>

            <View style={styles.card}>
              <Image
                source={{
                  uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504394/MoquecaBaiana_ta9jgy.png",
                }}
                style={styles.imgCard}
              />
              <Text style={styles.nomeCard}>Moqueca Baiana</Text>
            </View>

            <View style={styles.card}>
              <Image
                source={{
                  uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504395/PaellaEspanhola_u6k9ep.png",
                }}
                style={styles.imgCard}
              />
              <Text style={styles.nomeCard}>Paella Espanhola</Text>
            </View>

            <View style={styles.card}>
              <Image
                source={{
                  uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504395/PanquecaCarne_kvwvik.png",
                }}
                style={styles.imgCard}
              />
              <Text style={styles.nomeCard}>Panqueca de Carne</Text>
            </View>

            <View style={styles.card}>
              <Image
                source={{
                  uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504396/RamenJapon%C3%AAs_oxydrb.png",
                }}
                style={styles.imgCard}
              />
              <Text style={styles.nomeCard}>Ramen Japonês</Text>
            </View>

            <View style={styles.card}>
              <Image
                source={{
                  uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504396/RisotoCogumelos_ny3ecn.png",
                }}
                style={styles.imgCard}
              />
              <Text style={styles.nomeCard}>Risoto de Cogumelos</Text>
            </View>

            <View style={styles.card}>
              <Image
                source={{
                  uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504397/SaladaCaesar_mtajxx.png",
                }}
                style={styles.imgCard}
              />
              <Text style={styles.nomeCard}>Salada Caesar</Text>
            </View>

            <View style={styles.card}>
              <Image
                source={{
                  uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504397/Salm%C3%A3oGrelhado_ecetuq.png",
                }}
                style={styles.imgCard}
              />
              <Text style={styles.nomeCard}>Salmão Grelhado</Text>
            </View>

            <View style={styles.card}>
              <Image
                source={{
                  uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504398/StrogonoffFrango_gfrhpb.png",
                }}
                style={styles.imgCard}
              />
              <Text style={styles.nomeCard}>Strogonoff de Frango</Text>
            </View>

            <View style={styles.card}>
              <Image
                source={{
                  uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504398/Sushi_luhlyp.png",
                }}
                style={styles.imgCard}
              />
              <Text style={styles.nomeCard}>Sushi</Text>
            </View>

            <View style={styles.card}>
              <Image
                source={{
                  uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504399/Temaki_pmltln.png",
                }}
                style={styles.imgCard}
              />
              <Text style={styles.nomeCard}>Temaki</Text>
            </View>

            <View style={styles.card}>
              <Image
                source={{
                  uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504399/YakisobaTradicional_mnua9j.png",
                }}
                style={styles.imgCard}
              />
              <Text style={styles.nomeCard}>Yakisoba Tradicional</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
