const {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    updateProductPrice,
    deleteProduct
} = require('./product.service')

const logger = require('../config/logger');

const handleServerError = (error, res) => {
    logger.error(error);
    res.status(500).send("Server Error");
};

const getAllProductsController = async (req, res) => {
    try {
        const products = await getAllProducts();
        res.json({ data: products, message: "Products retrieved successfully" });
    } catch (error) {
        handleServerError(error, res);
    }
};

const getProductByIdController = async (req, res) => {
    try {
        const productId = parseInt(req.params.id);
        const product = await getProductById(productId);
        res.json({ data: product, message: "Product found successfully" });
    } catch (error) {
        handleServerError(error, res);
    }
};

const createProductController = async (req, res) => {
    try {
        const productData = req.body;
        const newProduct = await createProduct(productData);
        res.status(201).json({ data: newProduct, message: "Product created successfully" });
    } catch (error) {
        handleServerError(error, res);
    }
};

const updateProductController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const productData = req.body;
        const updatedProduct = await updateProduct(id, productData);
        res.json({ data: updatedProduct, message: "Product updated successfully" });
    } catch (error) {
        handleServerError(error, res);
    }
};

const updateProductPriceController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { price } = req.body;

        if (typeof price !== 'number') {
            return res.status(400).json({ message: "Invalid price" });
        }

        const updatedProduct = await updateProductPrice(id, price);
        res.json({ data: updatedProduct, message: "Product price updated successfully" });
    } catch (error) {
        handleServerError(error, res);
    }
};

const deleteProductController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await deleteProduct(id);
        res.json({ data: id, message: "Product deleted successfully" });
    } catch (error) {
        handleServerError(error, res);
    }
};

module.exports = {
    getAllProductsController,
    getProductByIdController,
    createProductController,
    updateProductController,
    updateProductPriceController,
    deleteProductController
};
