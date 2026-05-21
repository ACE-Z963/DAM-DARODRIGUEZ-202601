import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../Routes";
import { ProductService } from "../../core/services";
import { Product } from "../../core/entities";
import { styles } from "./DashboardPageStyles";

const DashboardPage = () => {
    const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = () => {
        try {
            const data = ProductService.findAll();
            setProducts(data);
        } catch (error) {
            console.error("Error al cargar productos", error);
        }
    };

    const handleLogout = () => {
        navigation.navigate("Login");
    };

    const handleNewProduct = () => {
        navigation.navigate("RegisterProduct");
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.welcome}>Bienvenido</Text>
                <Text style={styles.username}>John Doe</Text>
            </View>

            {/* Buttons */}
            <View style={styles.buttonRow}>
                <TouchableOpacity
                    style={styles.newProductButton}
                    onPress={handleNewProduct}>
                    <Text style={styles.newProductText}>NUEVO PRODUCTO</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.logoutButton}
                    onPress={handleLogout}>
                    <Text style={styles.logoutText}>CERRAR SESIÓN</Text>
                </TouchableOpacity>
            </View>

            {/* Search placeholder */}
            <View style={styles.searchContainer}>
                <Text style={styles.searchText}>🔍 Buscar productos...</Text>
            </View>

            {/* Products list */}
            <Text style={styles.sectionTitle}>RECENT PRODUCTS</Text>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id?.toString() ?? ""}
                renderItem={({ item }) => (
                    <View style={styles.productCard}>
                        <View style={styles.productInfo}>
                            <Text style={styles.productName}>{item.nombre}</Text>
                            <Text style={styles.productSku}>SKU: {item.sku}</Text>
                            <Text style={styles.productStock}>Stock: {item.cantidad}</Text>
                            <Text style={styles.productDescription}>{item.descripcion}</Text>
                        </View>
                        <TouchableOpacity style={styles.sellButton}>
                            <Text style={styles.sellButtonText}>VENDER</Text>
                        </TouchableOpacity>
                    </View>
                )}
                ListEmptyComponent={
                    <Text style={styles.emptyText}>No hay productos registrados</Text>
                }
            />
        </View>
    );
};

export default DashboardPage;