import React from "react";
import {View, Text }  from "react-native";
import { Button } from "../../atoms";


interface LoginFormProps {
    onSubmit?: () => void;  
}

const LoginForm = (
    { onSubmit }: LoginFormProps
) => {
    return (
        <View>
            <Text>Formulario Login</Text>
            <Button title="Iniciar Sesión" onSubmit={onSubmit}></Button>
        </View>
    )
}
export default LoginForm;

