# Product Management API

This is a Product Management API built using Node.js, Express, and Prisma ORM. It provides endpoints to manage products, including creating, reading, updating, and deleting products. The project is structured to follow best practices for scalable and maintainable applications.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Running the Project](#running-the-project)
- [Logging](#logging)
- [Error Handling](#error-handling)
- [Contributing](#contributing)
- [License](#license)

## Features

- RESTful API with CRUD operations for products.
- Input validation using `express-validator`.
- Centralized error handling with custom error classes.
- Logging using Winston with support for different environments (development/production).
- Middleware for request logging and input validation.
- Prisma ORM for database interactions.
- Environment-based configuration.

## Technologies

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Prisma](https://www.prisma.io/)
- [Winston](https://github.com/winstonjs/winston)
- [Express Validator](https://express-validator.github.io/docs/)

## Getting Started

### Prerequisites

- Node.js v14 or later
- PostgreSQL or any other database supported by Prisma

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/amaralkaff/REST-API-CLEAN-ARCHITECTURE.git
   ```

2. Navigate to the project directory:

   ```bash
   cd REST-API-CLEAN-ARCHITECTURE
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Set up the environment variables (see [Environment Variables](#environment-variables)).

5. Set up the database using Prisma:

   ```bash
   npx prisma migrate dev --name init
   ```

## Project Structure

```plaintext
.
├── node_modules               # Node.js modules
├── prisma
│   └── schema.prisma          # Prisma schema
├── src
│   ├── config
│   │   └── logger.js          # Logger configuration
│   ├── db
│   │   └── index.js           # Prisma client setup
│   ├── middlewares
│   │   ├── errorHandler.js    # Centralized error handling middleware
│   │   ├── requestLogger.js   # Request logging middleware
│   │   └── validate.js        # Validation middleware
│   ├── product
│   │   ├── product.controller.js # Product controllers
│   │   ├── product.repository.js # Database queries using Prisma
│   │   ├── product.routes.js  # Product routes
│   │   ├── product.service.js # Business logic for products
│   │   └── product.validation.js # Input validation logic
│   └── utils
│       ├── ApiError.js        # Custom error class
│       └── index.js           # Utility functions (if any)
├── .env                       # Environment variables file
├── .env.development           # Environment variables for development
├── .gitignore                 # Files and directories to ignore in git
├── combined.log               # Log file for combined logs
├── error.log                  # Log file for error logs
├── package-lock.json          # Lock file for npm dependencies
├── package.json               # Project dependencies and scripts
└── README.md                  # Project documentation (this file)
```

## API Endpoints

### Products

- **GET** `/products`
  - Retrieve all products.

- **GET** `/products/:id`
  - Retrieve a product by its ID.

- **POST** `/products`
  - Create a new product.
  - Validation:
    - `name`: string, required
    - `price`: float, required, must be greater than 0

- **PUT** `/products/:id`
  - Update an existing product.
  - Validation:
    - `name`: string, optional
    - `price`: float, optional, must be greater than 0

- **PATCH** `/products/:id/price`
  - Update the price of an existing product.
  - Validation:
    - `price`: float, required, must be greater than 0

- **DELETE** `/products/:id`
  - Delete a product by its ID.

## Environment Variables

The following environment variables should be set in a `.env` file at the root of the project:

```plaintext
DATABASE_URL=postgresql://user:password@localhost:5432/database_name
PORT=3000
LOG_LEVEL=info
```

- `DATABASE_URL`: Connection string for the PostgreSQL database.
- `PORT`: Port on which the application will run.
- `LOG_LEVEL`: Logging level (e.g., `info`, `warn`, `error`).

## Running the Project

1. Start the application:

   ```bash
   npm start
   ```

2. The server should now be running on `http://localhost:3000`.

## Logging

- **Console Logging**: All logs are output to the console by default.
- **File Logging**: Errors are logged to `error.log`, and all logs are logged to `combined.log`.

## Error Handling

- **Custom Error Handling**: The `ApiError` class is used for consistent error responses.
- **Global Error Handler**: All errors are handled by a global error handler middleware.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
