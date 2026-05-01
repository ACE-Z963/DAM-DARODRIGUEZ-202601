import React from "react";
import { AuthTemplate } from "../../components/templates";
import { LoginForm } from "../../components/organisms";

const LoginPage = () => {
    return (
        <AuthTemplate 
            title="Login">
            <LoginForm />
        </AuthTemplate>
    )

}

export default LoginPage;