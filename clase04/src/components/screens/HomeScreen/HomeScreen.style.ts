import { StyleSheet } from "react-native";
import { colors, space } from "../../../Themes";

export const stylesHomeScreen = StyleSheet.create({
  container: {
    backgroundColor: colors.primary[900],
    padding: space.l,
    margin: space.s,
    borderRadius: space.m,
  },
  text: {
    color: colors.white,
    fontSize: space.xl,
  },
});