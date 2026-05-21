import { Product } from "../../entities";
import { db } from "../../config";

const ProductRepository = {
    create: (product: Product): number | undefined => {
        const query = `INSERT INTO products (nombre, sku, cantidad, costoCompra, precioVenta, descripcion) 
        VALUES (?, ?, ?, ?, ?, ?);`;

        const result = db.execute(query, [
            product.nombre,
            product.sku,
            product.cantidad,
            product.costoCompra,
            product.precioVenta,
            product.descripcion
        ]);
        return result.insertId;
    },

    findAll: (): Product[] => {
        const query = `SELECT * FROM products;`;
        const { rows } = db.execute(query);

        if (rows != undefined) {
            return rows._array.length > 0 ? rows._array : [];
        }
        return [];
    },

    findById: (id: number): Product | null => {
        const query = `SELECT * FROM products WHERE id = ? LIMIT 1;`;
        const { rows } = db.execute(query, [id]);

        if (rows != undefined) {
            return rows._array.length > 0 ? rows._array[0] : null;
        }
        return null;
    },

    delete: (productId: number): void => {
        const query = `DELETE FROM products WHERE id = ?;`;
        db.execute(query, [productId]);
    }
};

export default ProductRepository;

