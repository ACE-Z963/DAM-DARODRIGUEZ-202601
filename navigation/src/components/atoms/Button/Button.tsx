import React from "react";
import { Pressable, Text } from "react-native";
import { styles } from "./ButtonStyle";

interface ButtonProps {
    title: string;
    disabled?: boolean;
    onSubmit?: () => void;

}
//Atomo de Boton, renderice el botton
const Button = (
    { title, disabled = false, onSubmit }: ButtonProps) => {
    return (
        <Pressable
             onPress={onSubmit}
             disabled={disabled}
             style={({ pressed }) => [
                styles.button,
                pressed && styles.buttonPressed,
             ]}>
            <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
    );
};

export default Button;