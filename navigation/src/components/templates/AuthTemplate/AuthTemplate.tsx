import React, { Children } from "react";
import {View, Text} from "react-native";

interface AuthTemplateProps {
    title: string;
    subtitle?: string;
    children:  React.ReactNode;

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
