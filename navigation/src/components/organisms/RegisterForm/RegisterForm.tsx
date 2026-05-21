import React from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import { Button } from '../../atoms';
import { styles } from './RegisterFormStyles';

interface RegisterFormProps {
    onSubmit?: (data: {
        nombre: string;
        username: string;
        correo: string;
        fechaNacimiento: string;
        contrasena: string;
    }) => void;
}

const RegisterForm = ({ onSubmit }: RegisterFormProps) => {
    const [fullName, setFullName] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [dateOfBirth, setDateOfBirth] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");

    const handleSubmit = () => {
        if (!fullName || !username || !email || !dateOfBirth || !password) {
            Alert.alert("❌ Error", "Por favor completa todos los campos");
            return;
        }
        if (password !== confirmPassword) {
            Alert.alert("❌ Error", "Las contraseñas no coinciden");
            return;
        }
        onSubmit?.({
            nombre: fullName,
            username,
            correo: email,
            fechaNacimiento: dateOfBirth,
            contrasena: password
        });
    };

    return (
        <View>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your full name"
                value={fullName}
                onChangeText={setFullName}
            />

            <Text style={styles.label}>Username</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your username"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
            />

            <Text style={styles.label}>Email</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
            />

            <Text style={styles.label}>Date of Birth</Text>
            <TextInput
                style={styles.input}
                placeholder="DD/MM/YYYY"
                value={dateOfBirth}
                onChangeText={setDateOfBirth}
            />

            <Text style={styles.label}>Password</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                autoCapitalize="none"
            />

            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
                style={styles.input}
                placeholder="Confirm your password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
                autoCapitalize="none"
            />

            <View style={styles.buttonContainer}>
                <Button title="REGISTER" onSubmit={handleSubmit} />
            </View>
        </View>
    );
};

export default RegisterForm;