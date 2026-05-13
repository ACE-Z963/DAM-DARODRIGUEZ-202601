import React from "react";
import { AuthTemplate } from "../../components/templates";
import { RegisterForm } from "../../components/organisms";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../Routes";

const RegisterPage = () => {
    const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

    const handleRegister = () => {
        console.log("Tap en Registro");
        navigation.navigate("Login");
    }

    return (
        <AuthTemplate
            title="Register"
            subtitle="Create a new account">
            <RegisterForm onSubmit={handleRegister} />
        </AuthTemplate>
    )
}

export default RegisterPage;