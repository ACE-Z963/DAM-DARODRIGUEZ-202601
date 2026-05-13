import React from "react";
import { Pressable, Text } from "react-native";

interface ButtonProps {
    title: string;
    onSubmit?: () => void;

}
//Atomo de Boton, renderice el botton
const Button = (
    { title, onSubmit }: ButtonProps) => {
    return (

        <Pressable onPress={onSubmit}>
            <Text>{title}</Text>
        </Pressable>
    );
}

export default Button;