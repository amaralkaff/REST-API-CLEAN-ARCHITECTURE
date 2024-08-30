const express = require('express');
const productRoutes = require('./product/product.routes');
const errorHandler = require('./middlewares/errorHandler');
const requestLogger = require('./middlewares/requestLogger');

const app = express();
app.use(express.json());
app.use(requestLogger);

app.use('/products', productRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
