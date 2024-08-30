const prisma = require("../db");

const findProducts = async () => {
    return await prisma.product.findMany();
};

const findProductById = async (id) => {
    return await prisma.product.findUnique({
        where: { id: parseInt(id) },
    });
};

const createNewProduct = async (productData) => {
    return await prisma.product.create({
        data: productData,
    });
};

const updateProductById = async (id, productData) => {
    return await prisma.product.update({
        where: { id: parseInt(id) },
        data: productData,
    });
};

const updateProductPriceById = async (id, price) => {
    return await prisma.product.update({
        where: { id: parseInt(id) },
        data: { price },
    });
};

const deleteProductById = async (id) => {
    return await prisma.product.delete({
        where: { id: parseInt(id) },
    });
};

module.exports = {
    findProducts,
    findProductById,
    createNewProduct,
    updateProductById,
    updateProductPriceById,
    deleteProductById
};
