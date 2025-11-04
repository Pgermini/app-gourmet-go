import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export const Home = () => {
  return (
    <View>
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
      </View>

      {/* SUBMENU */}
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
      <View></View>
    </View>
  );
};
