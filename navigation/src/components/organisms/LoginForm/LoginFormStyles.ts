import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    label: {
        fontSize: 14,
        fontWeight: "600",
        color: "#222222",
        marginBottom: 6,
        marginTop: 14,
    },
    input: {
        borderWidth: 1,
        borderColor: "#CCCCCC",
        borderRadius: 8,
        paddingHorizontal: 14,
        paddingVertical: 11,
        fontSize: 14,
        color: "#222222",
        backgroundColor: "#F9F9F9",
    },
    passwordContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#CCCCCC",
        borderRadius: 8,
        backgroundColor: "#F9F9F9",
        paddingHorizontal: 14,
    },
    passwordInput: {
        flex: 1,
        paddingVertical: 11,
        fontSize: 14,
        color: "#222222",
    },
    eyeIcon: {
        fontSize: 18,
        paddingLeft: 8,
    },
    forgotContainer: {
        marginTop: 10,
        marginBottom: 4,
    },
    forgotText: {
        fontSize: 13,
        color: "#555555",
        fontWeight: "600",
    },
    buttonContainer: {
        marginTop: 28,
        marginBottom: 20,
    },
    signUpContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    signUpText: {
        fontSize: 14,
        color: "#555555",
    },
    signUpLink: {
        fontSize: 14,
        fontWeight: "700",
        color: "#ef7f00",
    },
});