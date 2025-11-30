import { SubMenu } from "@/components/MenuGlobal/SubMenuGlobal";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";

export default function SidebarRefeicoes() {
  const handleOpenProduct = (item: {
    name: string;
    price: number;
    description: string;
    image: string;
  }) => {
    router.push({
      pathname: "/(stacks)/produto-detalhe-screens",
      params: item,
    });
  };

  const meals = [
    {
      name: "Bife à Parmegiana",
      price: 32.9,
      description: "Filé empanado com molho e queijo.",
      image:
        "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504390/BifeParmegiana_nteudc.png",
    },
    {
      name: "Camarão na Moranga",
      price: 47.9,
      description: "Camarões cremosos servidos na moranga tradicional.",
      image:
        "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504391/Camar%C3%A3oMoranga_gqwpoz.png",
    },
    {
      name: "Churrasco",
      price: 54.9,
      description: "Carne grelhada com acompanhamentos.",
      image:
        "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504392/Churrasco_nlwwl8.png",
    },
    {
      name: "Empadão de Frango",
      price: 26.5,
      description: "Empadão tradicional recheado com frango desfiado.",
      image:
        "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504392/Empad%C3%A3oFrango_xzeylg.png",
    },
    {
      name: "Escondidinho Carne Seca",
      price: 29.9,
      description: "Purê cremoso com carne seca desfiada.",
      image:
        "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504393/EscondidinhoCarneSeca_vxofxw.png",
    },
    {
      name: "Espaguete",
      price: 24.0,
      description: "Espaguete tradicional ao molho de tomate especial.",
      image:
        "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504392/Espaguete_ps8biu.png",
    },
    {
      name: "Feijoada",
      price: 34.9,
      description: "A feijoada completa que todo brasileiro ama.",
      image:
        "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504393/Feijoada_fizgou.png",
    },
    {
      name: "Hot Roll",
      price: 21.9,
      description: "Hot roll crocante recheado e empanado.",
      image:
        "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504394/HotRoll_o7prxr.png",
    },
    {
      name: "Lasanha",
      price: 28.9,
      description: "Lasanha tradicional com muito queijo.",
      image:
        "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504394/Lasanha_ikslot.png",
    },
    {
      name: "Moqueca Baiana",
      price: 49.9,
      description: "Moqueca tradicional preparada com dendê e pimentões.",
      image:
        "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504394/MoquecaBaiana_ta9jgy.png",
    },
    {
      name: "Paella Espanhola",
      price: 55.9,
      description: "Paella com frutos do mar e tempero clássico.",
      image:
        "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504395/PaellaEspanhola_u6k9ep.png",
    },
    {
      name: "Panqueca de Carne",
      price: 24.9,
      description: "Panquecas recheadas com carne moída ao molho.",
      image:
        "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504395/PanquecaCarne_kvwvik.png",
    },
    {
      name: "Ramen Japonês",
      price: 36.9,
      description: "Sopa japonesa tradicional com noodles.",
      image:
        "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504396/RamenJapon%C3%AAs_oxydrb.png",
    },
    {
      name: "Risoto de Cogumelos",
      price: 41.0,
      description: "Risoto cremoso com cogumelos selecionados.",
      image:
        "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504396/RisotoCogumelos_ny3ecn.png",
    },
    {
      name: "Salada Caesar",
      price: 19.9,
      description: "Salada clássica com croûtons e molho especial.",
      image:
        "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504397/SaladaCaesar_mtajxx.png",
    },
    {
      name: "Salmão Grelhado",
      price: 42.5,
      description: "Salmão grelhado com legumes.",
      image:
        "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504397/Salm%C3%A3oGrelhado_ecetuq.png",
    },
    {
      name: "Strogonoff de Frango",
      price: 27.9,
      description: "Clássico strogonoff acompanhado de arroz e batata.",
      image:
        "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504398/StrogonoffFrango_gfrhpb.png",
    },
    {
      name: "Sushi",
      price: 31.5,
      description: "Peças selecionadas de sushi tradicional.",
      image:
        "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504398/Sushi_luhlyp.png",
    },
    {
      name: "Temaki",
      price: 24.9,
      description: "Temaki fresquinho com arroz e alga crocante.",
      image:
        "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504399/Temaki_pmltln.png",
    },
    {
      name: "Yakisoba Tradicional",
      price: 29.9,
      description: "Macarrão com legumes e proteína ao molho oriental.",
      image:
        "https://res.cloudinary.com/djdwgtphs/image/upload/v1763504399/YakisobaTradicional_mnua9j.png",
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
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

          <Text style={styles.title}>Refeições</Text>
          <Text style={styles.subtitle}>Pratos Principais</Text>

          <View style={styles.blocoImagem}>
            <Image
              source={require("@/assets/Refeições/refeições.png")}
              style={styles.imagemGrande}
            />
            <Text style={styles.textoSobreImagem}>PRATOS PRINCIPAIS</Text>
          </View>

          {/* GRID */}
          <View style={styles.grid}>
            {meals.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.card}
                onPress={() => handleOpenProduct(item)}
              >
                <Image
                  source={{
                    uri:
                      item.image ||
                      "https://via.placeholder.com/300x200.png?text=Sem+Imagem",
                  }}
                  style={styles.imgCard}
                />
                <Text style={styles.nomeCard}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
