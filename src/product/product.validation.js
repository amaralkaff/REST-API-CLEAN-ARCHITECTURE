const { body, param } = require('express-validator');

const createProductValidation = [
    body('name').isString().withMessage('Name must be a string'),
    body('price').isFloat({ gt: 0 }).withMessage('Price must be a number greater than 0'),
];

const updateProductValidation = [
    param('id').isInt().withMessage('Product ID must be an integer'),
    body('name').optional().isString().withMessage('Name must be a string'),
    body('price').optional().isFloat({ gt: 0 }).withMessage('Price must be a number greater than 0'),
];

const updateProductPriceValidation = [
    param('id').isInt().withMessage('Product ID must be an integer'),
    body('price').isFloat({ gt: 0 }).withMessage('Price must be a number greater than 0'),
];

module.exports = {
    createProductValidation,
    updateProductValidation,
    updateProductPriceValidation,
};
