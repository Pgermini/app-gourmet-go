import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  topBar: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 50,
  },

  line: {
    width: "90%",
    height: 1,
    backgroundColor: "#ccc",
    marginTop: 10,
    alignSelf: "center",
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 150,
    marginTop: 25,
    color: "#000",
  },

  menuRapidoContainer: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    gap: 15,
  },

  menuItem: {
    marginRight: 15,
  },

  menuCardFundo: {
    backgroundColor: "#E0E0E0",
    borderRadius: 16,
    width: 120,
    height: 140,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },

  menuImage: {
    width: 100,
    height: 100,
    borderRadius: 12,
  },

  menuLabel: {
    position: "absolute",
    top: 10,
    left: 50,
    right: 0,
    textAlign: "center",
    fontSize: 12,
    fontWeight: "bold",
    color: "#000",
  },
});
