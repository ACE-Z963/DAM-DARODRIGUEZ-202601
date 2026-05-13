import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '../../atoms';

interface RegisterFormProps {
    onSubmit?: () => void;

}

const RegisterForm = (
    { onSubmit }: RegisterFormProps
) => {
    return (
        <View>
            <Text>Formulario Registro</Text>
            <Button 
            title="Registrarme" 
            onSubmit={onSubmit} />
        </View>
    );
};
export default RegisterForm;