import { open } from "react-native-quick-sqlite";

export const db = open({
    name: 'navigation_database.sqlite'
});

export const setupDatabase = () => {
    try {
        db.execute(
            `CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT,
            username TEXT,
            correo TEXT,
            fechaNacimiento TEXT,
            contrasena TEXT);`
        );

        db.execute(
            `CREATE TABLE IF NOT EXISTS products (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT,
            sku TEXT,
            cantidad INTEGER,
            costoCompra REAL,
            precioVenta REAL,
            descripcion TEXT);`
        );

        console.log("Base de datos inicializada correctamente");
    } catch (error) {
        console.error("No se pudo inicializar la BBDD", error);
    }
}