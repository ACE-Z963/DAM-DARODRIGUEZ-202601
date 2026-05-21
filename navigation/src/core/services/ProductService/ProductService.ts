import { Product } from "../../entities";
import ProductRepository from "../../repositories/ProductRepository/ProductRepository";

const ProductService = {
    create: (product: Product): Product => {
        const id = ProductRepository.create(product);

        if (id === undefined) {
            console.error("Error al crear el producto");
            throw new Error("El producto no se pudo crear");
        }

        return { ...product, id };
    },

    findAll: (): Product[] => {
        return ProductRepository.findAll();
    },

    delete: (productId: number): void => {
        ProductRepository.delete(productId);
    }
};

export default ProductService;
