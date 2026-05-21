import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Button } from "../../atoms";
import { styles } from "./LoginFormStyles";

interface LoginFormProps {
    onSubmit?: (username: string, password: string) => void;
    onSignUp?: () => void;
}

const LoginForm = ({ onSubmit, onSignUp }: LoginFormProps) => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [showPassword, setShowPassword] = React.useState(false);

    const handleSubmit = () => {
        onSubmit?.(username, password);
    };

    return (
        <View>
            <Text style={styles.label}>Username</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your username"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
            />

            <Text style={styles.label}>Password</Text>
            <View style={styles.passwordContainer}>
                <TextInput
                    style={styles.passwordInput}
                    placeholder="Enter your password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!showPassword}
                    autoCapitalize="none"
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <Text style={styles.eyeIcon}>{showPassword ? "🙈" : "👁️"}</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.forgotContainer}>
                <Text style={styles.forgotText}>FORGOT PASSWORD</Text>
            </TouchableOpacity>

            <View style={styles.buttonContainer}>
                <Button title="LOGIN" onSubmit={handleSubmit} />
            </View>

            <View style={styles.signUpContainer}>
                <Text style={styles.signUpText}>Don't have an account? </Text>
                <TouchableOpacity onPress={onSignUp}>
                    <Text style={styles.signUpLink}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default LoginForm;