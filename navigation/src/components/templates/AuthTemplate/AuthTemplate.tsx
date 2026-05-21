import React, { Children } from "react";
import {View, Text} from "react-native";
import { ScrollView } from "react-native";
import { styles } from "./AuthTemplateStyles";

interface AuthTemplateProps {
    title: string;
    subtitle?: string;
    children:  React.ReactNode;

}

const AuthTemplate = (
    {title, subtitle, children}: AuthTemplateProps) => {
        return (
            <ScrollView
                contentContainerStyle={styles.scrollContainer}
                keyboardShouldPersistTaps="handled">
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                <Text style={styles.title}>{title}</Text>
                {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
            </View>
               <View>
                {children}
               </View> 
            </View>
            </ScrollView>
        );
    }; 

export default AuthTemplate;
