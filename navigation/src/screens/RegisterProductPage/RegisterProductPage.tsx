import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../Routes";
import { ProductService } from "../../core/services";
import { styles } from "./RegisterProductPageStyles";

const RegisterProductPage = () => {
    const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

    const [nombre, setNombre] = useState("");
    const [sku, setSku] = useState("");
    const [cantidad, setCantidad] = useState("");
    const [costoCompra, setCostoCompra] = useState("");
    const [precioVenta, setPrecioVenta] = useState("");
    const [descripcion, setDescripcion] = useState("");

    const handleCreate = () => {
        try {
            ProductService.create({
                nombre,
                sku,
                cantidad: parseInt(cantidad),
                costoCompra: parseFloat(costoCompra),
                precioVenta: parseFloat(precioVenta),
                descripcion
            });
            Alert.alert("✅ Éxito", "El producto se ha registrado con éxito", [
                { text: "OK", onPress: () => navigation.navigate("Dashboard") }
            ]);
        } catch (error) {
            Alert.alert("❌ Error", "No se pudo registrar el producto");
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>REGISTRAR PRODUCTO</Text>
            <Text style={styles.subtitle}>Create a new product listing</Text>

            <Text style={styles.label}>Nombre del producto</Text>
            <TextInput
                style={styles.input}
                placeholder="Ej: Camisa Azul"
                value={nombre}
                onChangeText={setNombre}
            />

            <Text style={styles.label}>SKU/CÓDIGO</Text>
            <TextInput
                style={styles.input}
                placeholder="Ej: CA001"
                value={sku}
                onChangeText={setSku}
                autoCapitalize="characters"
            />

            <Text style={styles.label}>CANTIDAD EN STOCK</Text>
            <TextInput
                style={styles.input}
                placeholder="Ej: 25"
                value={cantidad}
                onChangeText={setCantidad}
                keyboardType="numeric"
            />

            {/* Costo y Precio en la misma fila */}
            <View style={styles.row}>
                <View style={styles.halfContainer}>
                    <Text style={styles.label}>COSTO DE COMPRA</Text>
                    <View style={styles.currencyContainer}>
                        <Text style={styles.currencySign}>$</Text>
                        <TextInput
                            style={styles.currencyInput}
                            placeholder="0.00"
                            value={costoCompra}
                            onChangeText={setCostoCompra}
                            keyboardType="numeric"
                        />
                    </View>
                </View>

                <View style={styles.halfContainer}>
                    <Text style={styles.label}>PRECIO DE VENTA ($)</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="0.00"
                        value={precioVenta}
                        onChangeText={setPrecioVenta}
                        keyboardType="numeric"
                    />
                </View>
            </View>

            <Text style={styles.label}>DESCRIPCIÓN</Text>
            <TextInput
                style={styles.textarea}
                placeholder="Describe el producto..."
                value={descripcion}
                onChangeText={setDescripcion}
                multiline
                numberOfLines={4}
            />

            <TouchableOpacity style={styles.createButton} onPress={handleCreate}>
                <Text style={styles.createButtonText}>CREAR PRODUCTO</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
                <Text style={styles.backText}>Back to Catalog</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default RegisterProductPage;