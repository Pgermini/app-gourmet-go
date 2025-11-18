import { MaterialCommunityIcons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
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

          {/* Menu Rápido */}
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
                style={{ marginRight: 15 }}
              />
            </TouchableOpacity>

            {/* Item 1 */}
            <View style={styles.menuItem}>
              <View style={styles.menuCardFundo}>
                <Image
                  source={require("@/src/assets/subMenu/Lanches.png")}
                  style={styles.menuImage}
                />
                <Text style={styles.menuLabel}>Lanches</Text>
              </View>
            </View>

            {/* Item 2 */}
            <View style={styles.menuItem}>
              <View style={styles.menuCardFundo}>
                <Image
                  source={require("@/src/assets/subMenu/Refeições (2).png")}
                  style={styles.menuImage}
                />
                <Text style={styles.menuLabel}>Refeições</Text>
              </View>
            </View>

            {/* Item 3 */}
            <View style={styles.menuItem}>
              <View style={styles.menuCardFundo}>
                <Image
                  source={require("@/src/assets/subMenu/Sobremesas (2).png")}
                  style={styles.menuImage}
                />
                <Text style={styles.menuLabel}>Sobremesas</Text>
              </View>
            </View>

            {/* Item 4 */}
            <View style={styles.menuItem}>
              <View style={styles.menuCardFundo}>
                <Image
                  source={require("@/src/assets/subMenu/Bebidas (2).png")}
                  style={styles.menuImage}
                />
                <Text style={styles.menuLabel}>Bebidas</Text>
              </View>
            </View>
          </ScrollView>

          {/* Imagem grande */}
          <Text style={styles.title}>Refeições</Text>
          <Text style={styles.subtitle}>Pratos Principais</Text>

          <View style={styles.blocoImagem}>
            <Image
              source={require("@/src/assets/PratoPrincipal/Tacos.png")}
              style={styles.imagemGrande}
            />
            <Text style={styles.textoSobreImagem}>PRATOS PRINCIPAIS</Text>
          </View>

          {/* GRID DE CARDS */}
          <View style={styles.grid}>
            <View style={styles.card}>
              <Image
                source={require("@/src/assets/PratoPrincipal/BifeParmegiana.png")}
                style={styles.imgCard}
              />
              <Text style={styles.nomeCard}>Bife à Parmegiana</Text>
            </View>

            <View style={styles.card}>
              <Image
                source={require("@/src/assets/PratoPrincipal/CamarãoMoranga.png")}
                style={styles.imgCard}
              />
              <Text style={styles.nomeCard}>Camarão na Moranga</Text>
            </View>

            <View style={styles.card}>
              <Image
                source={require("@/src/assets/PratoPrincipal/Churrasco.png")}
                style={styles.imgCard}
              />
              <Text style={styles.nomeCard}>Churrasco</Text>
            </View>

            <View style={styles.card}>
              <Image
                source={require("@/src/assets/PratoPrincipal/EmpadãoFrango.png")}
                style={styles.imgCard}
              />
              <Text style={styles.nomeCard}>Empadão de Frango</Text>
            </View>

            <View style={styles.card}>
              <Image
                source={require("@/src/assets/PratoPrincipal/EscondidinhoCarneSeca.png")}
                style={styles.imgCard}
              />
              <Text style={styles.nomeCard}>Escondidinho Carne Seca</Text>
            </View>

            <View style={styles.card}>
              <Image
                source={require("@/src/assets/PratoPrincipal/Espaguete.png")}
                style={styles.imgCard}
              />
              <Text style={styles.nomeCard}>Espaguete</Text>
            </View>

            <View style={styles.card}>
              <Image
                source={require("@/src/assets/PratoPrincipal/Feijoada.png")}
                style={styles.imgCard}
              />
              <Text style={styles.nomeCard}>Feijoada</Text>
            </View>

            <View style={styles.card}>
              <Image
                source={require("@/src/assets/PratoPrincipal/HotRoll.png")}
                style={styles.imgCard}
              />
              <Text style={styles.nomeCard}>Hot Roll</Text>
            </View>

            <View style={styles.card}>
              <Image
                source={require("@/src/assets/PratoPrincipal/Lasanha.png")}
                style={styles.imgCard}
              />
              <Text style={styles.nomeCard}>Lasanha</Text>
            </View>

            <View style={styles.card}>
              <Image
                source={require("@/src/assets/PratoPrincipal/MoquecaBaiana.png")}
                style={styles.imgCard}
              />
              <Text style={styles.nomeCard}>Moqueca Baiana</Text>
            </View>

            <View style={styles.card}>
              <Image
                source={require("@/src/assets/PratoPrincipal/PaellaEspanhola.png")}
                style={styles.imgCard}
              />
              <Text style={styles.nomeCard}>Paella Espanhola</Text>
            </View>

            <View style={styles.card}>
              <Image
                source={require("@/src/assets/PratoPrincipal/PanquecaCarne.png")}
                style={styles.imgCard}
              />
              <Text style={styles.nomeCard}>Panqueca de Carne</Text>
            </View>

            {/* Ramen — CORRIGIDO SEM ACENTO */}
            <View style={styles.card}>
              <Image
                source={require("@/src/assets/PratoPrincipal/RamenJaponês.png")}
                style={styles.imgCard}
              />
              <Text style={styles.nomeCard}>Ramen Japonês</Text>
            </View>

            <View style={styles.card}>
              <Image
                source={require("@/src/assets/PratoPrincipal/RisotoCogumelos.png")}
                style={styles.imgCard}
              />
              <Text style={styles.nomeCard}>Risoto de Cogumelos</Text>
            </View>

            <View style={styles.card}>
              <Image
                source={require("@/src/assets/PratoPrincipal/SaladaCaesar.png")}
                style={styles.imgCard}
              />
              <Text style={styles.nomeCard}>Salada Caesar</Text>
            </View>

            <View style={styles.card}>
              <Image
                source={require("@/src/assets/PratoPrincipal/SalmãoGrelhado.png")}
                style={styles.imgCard}
              />
              <Text style={styles.nomeCard}>Salmão Grelhado</Text>
            </View>

            <View style={styles.card}>
              <Image
                source={require("@/src/assets/PratoPrincipal/StrogonoffFrango.png")}
                style={styles.imgCard}
              />
              <Text style={styles.nomeCard}>Strogonoff de Frango</Text>
            </View>

            <View style={styles.card}>
              <Image
                source={require("@/src/assets/PratoPrincipal/Sushi.png")}
                style={styles.imgCard}
              />
              <Text style={styles.nomeCard}>Sushi</Text>
            </View>

            <View style={styles.card}>
              <Image
                source={require("@/src/assets/PratoPrincipal/Temaki.png")}
                style={styles.imgCard}
              />
              <Text style={styles.nomeCard}>Temaki</Text>
            </View>

            <View style={styles.card}>
              <Image
                source={require("@/src/assets/PratoPrincipal/YakisobaTradicional.png")}
                style={styles.imgCard}
              />
              <Text style={styles.nomeCard}>Yakisoba Tradicional</Text>
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
}
