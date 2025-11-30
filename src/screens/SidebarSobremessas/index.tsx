import { SubMenu } from "@/components/MenuGlobal/SubMenuGlobal";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function SidebarSobremesas() {
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

  const desserts = [
    {
      name: "Panqueca Doce",
      price: 22.9,
      description: "Panquecas doces com chocolate e calda especial.",
      image:
        "https://res.cloudinary.com/djdwgtphs/image/upload/v1763578146/panqueca_doce_uazdoc.webp",
    },
    {
      name: "Crepe de Nutella",
      price: 24.9,
      description: "Crepe crocante recheado com Nutella.",
      image:
        "https://res.cloudinary.com/djdwgtphs/image/upload/v1763578152/crepe_de_nutella_ttyisg.jpg",
    },
    {
      name: "Pavê de Chocolate",
      price: 19.9,
      description: "Pavê clássico de chocolate com creme especial.",
      image:
        "https://res.cloudinary.com/djdwgtphs/image/upload/v1763578149/pav%C3%AA_de_chocolate_sgfj7k.png",
    },
    {
      name: "Tiramisù",
      price: 27.5,
      description: "Receita italiana clássica com mascarpone.",
      image:
        "https://res.cloudinary.com/djdwgtphs/image/upload/v1763578147/tiramis%C3%B9_hewsll.webp",
    },
    {
      name: "Petit Gateau",
      price: 25.0,
      description: "Bolo de chocolate com casquinha crocante e recheio cremoso.",
      image:
        "https://res.cloudinary.com/djdwgtphs/image/upload/v1763578833/petit-gateau_nltozg.jpg",
    },
    {
      name: "Brownie com Sorvete",
      price: 26.9,
      description: "Brownie morno servido com sorvete artesanal.",
      image:
        "https://res.cloudinary.com/djdwgtphs/image/upload/v1763578833/brownie_com_sorvete_rsxiyl.jpg",
    },
    {
      name: "Sorvete Artesanal",
      price: 17.9,
      description: "Sorvete artesanal em diversos sabores.",
      image:
        "https://res.cloudinary.com/djdwgtphs/image/upload/v1763578150/sorvete_artesanal_f6kmxr.jpg",
    },
    {
      name: "Açaí na Tigela",
      price: 18.9,
      description: "Açaí batido com acompanhamentos clássicos.",
      image:
        "https://res.cloudinary.com/djdwgtphs/image/upload/v1763578148/a%C3%A7a%C3%AD_de_tigela_zbwmdu.jpg",
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

          <Text style={styles.titleSection}>Sobremessas</Text>
          <Text style={styles.titlePizzas}>DOCES / SORVETES</Text>

          <Image
            source={require("@/assets/Sobremesas/Sobremesas.png")}
            style={styles.bigDoce}
          />

          {/* GRID */}
          <View style={styles.gridContainer}>
            {desserts.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.saborCard}
                onPress={() => handleOpenProduct(item)}
              >
                <Image
                  source={{
                    uri:
                      item.image ||
                      "https://via.placeholder.com/300x200.png?text=Sem+Imagem",
                  }}
                  style={styles.saborImg}
                />
                <Text style={styles.saborLabel}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
