import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 48,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  back: {
    fontSize: 22,
    color: "#000",
  },

  headerTitle: {
    fontSize: 16,
    fontWeight: "600",
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    marginVertical: 12,
  },

  modeSwitcher: {
    flexDirection: "row",
    alignSelf: "stretch",
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 14,
  },

  modeBtn: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    backgroundColor: "#f3f3f3",
  },

  modeBtnActive: {
    backgroundColor: "#000",
  },

  modeText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },

  modeTextActive: {
    color: "#fff",
  },

  scanBox: {
    paddingVertical: 18,
    paddingHorizontal: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#eee",
    alignItems: "center",
  },

  scanText: {
    textAlign: "center",
    color: "#666",
    marginBottom: 6,
  },

  scanTextSmall: {
    textAlign: "center",
    color: "#999",
    marginBottom: 12,
    fontSize: 12,
  },

  manualBox: {
    // same visual as scan
  },

  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginBottom: 10,
    fontSize: 16,
    backgroundColor: "#fff",
  },

  primaryBtn: {
    marginTop: 6,
    backgroundColor: "#000",
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 8,
    alignItems: "center",
    alignSelf: "stretch",
  },

  primaryBtnText: {
    color: "#fff",
    fontWeight: "700",
  },
});
