import React from "react";
import { View } from "react-native";
import { Text } from "react-native-gesture-handler";


interface AuthTemplateProps {
    title: string;
    subtitle?: string;
    children: React.ReactNode;
}

const AuthTemplate = (
    {title, subtitle, children}: AuthTemplateProps) => {
    return (
        <View>
            <Text>{title}</Text>
            {subtitle && <Text>{subtitle}</Text>}
            <View>
                {children}
            </View>
        </View>
    );
};

export default AuthTemplate;