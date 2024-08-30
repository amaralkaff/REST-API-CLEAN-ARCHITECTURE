const { createLogger, format, transports } = require('winston');

const logger = createLogger({
    level: process.env.LOG_LEVEL || 'info', // Configure logging level based on environment
    format: format.combine(
        format.timestamp(),
        format.json()
    ),
    transports: [
        new transports.Console({ 
            handleExceptions: true 
        }), 
        new transports.File({ 
            filename: 'error.log', 
            level: 'error', 
            handleExceptions: true 
        }), 
        new transports.File({ 
            filename: 'combined.log' 
        })
    ],
    exitOnError: false, // Do not exit on handled exceptions
});

module.exports = logger;
