const {
    findProducts,
    findProductById,
    createNewProduct,
    updateProductById,
    updateProductPriceById,
    deleteProductById
} = require("./product.repository");

const getAllProducts = async () => {
    return await findProducts();
};

const getProductById = async (id) => {
    if (typeof id !== "number") {
        throw new Error("Invalid ID. Please provide a number");
    }

    const product = await findProductById(id);
    if (!product) {
        throw new Error("Product not found");
    }
    return product;
};

const createProduct = async (productData) => {
    return await createNewProduct(productData);
};

const updateProduct = async (id, productData) => {
    return await updateProductById(id, productData);
};

const updateProductPrice = async (id, price) => {
    return await updateProductPriceById(id, price);
};

const deleteProduct = async (id) => {
    return await deleteProductById(id);
};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    updateProductPrice,
    deleteProduct
};
