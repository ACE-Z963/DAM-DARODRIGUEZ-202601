import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
    },
    header: {
        marginTop: 20,
        marginBottom: 20,
    },
    welcome: {
        fontSize: 14,
        color: "#555",
    },
    username: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#007680",
    },
    buttonRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
        gap: 10,
    },
    newProductButton: {
        flex: 1,
        backgroundColor: "#007680",
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
    },
    newProductText: {
        color: "#fff",
        fontWeight: "700",
        fontSize: 13,
    },
    logoutButton: {
        flex: 1,
        backgroundColor: "#ef7f00",
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
    },
    logoutText: {
        color: "#fff",
        fontWeight: "700",
        fontSize: 13,
    },
    searchContainer: {
        borderWidth: 1,
        borderColor: "#CCCCCC",
        borderRadius: 8,
        padding: 12,
        marginBottom: 20,
        backgroundColor: "#F9F9F9",
    },
    searchText: {
        color: "#999",
        fontSize: 14,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "700",
        color: "#222",
        marginBottom: 12,
    },
    productCard: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#CCCCCC",
        borderRadius: 8,
        padding: 14,
        marginBottom: 10,
        backgroundColor: "#F9F9F9",
    },
    productInfo: {
        flex: 1,
    },
    productName: {
        fontSize: 15,
        fontWeight: "700",
        color: "#222",
    },
    productSku: {
        fontSize: 13,
        color: "#555",
        marginTop: 2,
    },
    productStock: {
        fontSize: 13,
        color: "#555",
        marginTop: 2,
    },
    sellButton: {
        backgroundColor: "#007680",
        padding: 10,
        borderRadius: 8,
    },
    sellButtonText: {
        color: "#fff",
        fontWeight: "700",
        fontSize: 13,
    },
    emptyText: {
        textAlign: "center",
        color: "#999",
        marginTop: 40,
        fontSize: 14,
    },
    productDescription: {
    fontSize: 12,
    color: "#777",
    marginTop: 2,
},
});