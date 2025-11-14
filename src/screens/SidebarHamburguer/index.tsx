import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function SidebarHamburguer() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hambúrguer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontSize: 28,
    fontWeight: "bold",
  },
});
