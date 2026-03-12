import { StyleSheet } from "react-native";
import { colors, space } from "./Themes";

export const stylesApp = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary[900],
    justifyContent: "center",
    alignItems: "center",
    padding: space.l,
  },
  display: {
    backgroundColor: colors.primary[800],
    width: "100%",
    padding: space.l,
    marginBottom: space.l,
    borderRadius: space.m,
    alignItems: "flex-end",
  },
  displayText: {
    color: colors.white,
    fontSize: 48,
    fontWeight: "bold",
  },
  buttonsContainer: {
    width: "100%",
  },
  row: {
    flexDirection: "row",
    marginBottom: space.m,
    gap: space.m,
  },
  button: {
    flex: 1,
    backgroundColor: colors.primary[700],
    borderRadius: space.m,
    padding: space.l,
    alignItems: "center",
    justifyContent: "center",
  },
  operationButton: {
    backgroundColor: colors.warning,
  },
  equalsButton: {
    backgroundColor: colors.success,
  },
  clearButton: {
    backgroundColor: colors.danger,
  },
  buttonText: {
    color: colors.white,
    fontSize: space.xl,
    fontWeight: "bold",
  },
});