// src/middlewares/errorHandler.js

const logger = require('../config/logger');
const ApiError = require('../utils/ApiError');

const errorHandler = (err, req, res, next) => {
    logger.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`, err);

    if (err instanceof ApiError) {
        return res.status(err.statusCode).json({ message: err.message });
    }

    res.status(500).json({ message: 'Internal Server Error' });
};

module.exports = errorHandler;
