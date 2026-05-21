import React from "react";
import { Alert } from "react-native";
import { AuthTemplate } from "../../components/templates";
import { RegisterForm } from "../../components/organisms";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../Routes";
import { AuthService } from "../../core/services";

const RegisterPage = () => {
    const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

    const handleRegister = async (data: {
        nombre: string;
        username: string;
        correo: string;
        fechaNacimiento: string;
        contrasena: string;
    }) => {
        try {
            const result = await AuthService.register(data);
            console.log("Usuario registrado:", result);
            Alert.alert("✅ Éxito", "Usuario registrado correctamente", [
                { text: "OK", onPress: () => navigation.navigate("Login") }
            ]);
        } catch (error) {
            Alert.alert("❌ Error", "No se pudo registrar el usuario");
            console.error("Error al registrar usuario:", error);
        }
    }

    return (
        <AuthTemplate
            title="REGISTER"
            subtitle="Create a new account">
            <RegisterForm onSubmit={handleRegister} />
        </AuthTemplate>
    )
}

export default RegisterPage;