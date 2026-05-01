import React from "react";
import { AuthTemplate } from "../../components/templates";
import { RegisterForm } from "../../components/organisms";

const RegisterPage = () => {
    return (
        <AuthTemplate
            title="Register"
            subtitle="Create a new account">
            <RegisterForm />
        </AuthTemplate>
    );
};

export default RegisterPage;