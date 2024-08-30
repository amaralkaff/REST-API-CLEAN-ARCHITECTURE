const express = require('express');
const {
    getAllProductsController,
    getProductByIdController,
    createProductController,
    updateProductController,
    updateProductPriceController,
    deleteProductController
} = require('./product.controller');

const validate = require('../middlewares/validate');
const {
    createProductValidation,
    updateProductValidation,
    updateProductPriceValidation
} = require('./product.validation');

const router = express.Router();

router.get('/', getAllProductsController);
router.get('/:id', getProductByIdController);
router.post('/', validate(createProductValidation), createProductController);
router.put('/:id', validate(updateProductValidation), updateProductController);
router.patch('/:id/price', validate(updateProductPriceValidation), updateProductPriceController);
router.delete('/:id', deleteProductController);

module.exports = router;
