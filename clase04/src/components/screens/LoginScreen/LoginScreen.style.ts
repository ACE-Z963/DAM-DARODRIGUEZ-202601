import { StyleSheet } from "react-native";
import { colors, space } from "../../../Themes";

export const stylesLoginScreen = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    padding: space.l,
    margin: space.s,
    borderRadius: space.m,
  },
  text: {
    color: colors.white,
    fontSize: space.xl,
  },
});