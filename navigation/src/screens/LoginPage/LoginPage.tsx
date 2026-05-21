import React from "react";
import { Alert } from "react-native";
import { AuthTemplate } from "../../components/templates";
import { LoginForm } from "../../components/organisms";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../Routes";
import { AuthService } from "../../core/services";

const LoginPage = () => {
    const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

    const loginAction = (username: string, password: string) => {
        try {
            const user = AuthService.login(username, password);
            console.log("Usuario logueado:", user);
            navigation.navigate("Dashboard");
        } catch (error) {
            Alert.alert("❌ Error", "Usuario o contraseña incorrectos");
            console.error("Error al iniciar sesión:", error);
        }
    }

    const handleGoToRegister = () => {
        navigation.navigate("Register");
    }

    return (
        <AuthTemplate
            title="LOGIN"
            subtitle="Welcome back">
            <LoginForm
                onSubmit={loginAction}
                onSignUp={handleGoToRegister}
            />
        </AuthTemplate>
    )
}

export default LoginPage;