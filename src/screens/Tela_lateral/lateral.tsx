import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function Lateral() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* ===== Cabeçalho ===== */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialCommunityIcons name="arrow-left" size={26} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>APROVEITE O GOURMET GO</Text>
      </View>

      {/* ===== Conteúdo ===== */}
      <ScrollView contentContainerStyle={styles.content}>
        {/* ===== Categorias ===== */}
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

        {/* ===== Destaques ===== */}
        <Text style={styles.sectionTitle}>Destaque do Gourmet Go</Text>
        <View style={styles.highlightContainer}>
          <Image
            source={require("@/src/assets/lanches/Hamburguer.png")}
            style={styles.highlightImage}
          />
          <Image
            source={require("@/src/assets/Refeições/refeições.png")}
            style={styles.highlightImage}
          />
          <Image
            source={require("@/src/assets/Sobremesas/Sobremesas.png")}
            style={styles.highlightImage}
          />
        </View>
      </ScrollView>
    </View>
  );
}
