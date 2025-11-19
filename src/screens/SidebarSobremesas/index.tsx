import { Image, Text, View } from "react-native";
import styles from "./styles";

export default function SidebarSobremesas() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Sobremesas</Text>

      <Image
        source={{
          uri: "https://res.cloudinary.com/djdwgtphs/image/upload/v1763505000/Brownie.png",
        }}
        style={styles.img}
      />

      <Text style={styles.descricao}>Tela básica de sobremesas 🍨</Text>
    </View>
  );
}
