# Backend Project Documentation

## Overview
This project is a backend application built with Node.js, Express, and MongoDB. It provides authentication, user management, news, and cable management functionalities.

## Project Structure
```
backend/
├── .env
├── package.json
├── server.js
├── models/
│   ├── User.js
│   ├── News.js
│   └── Cable.js
├── routes/
│   ├── auth.js
│   ├── users.js
│   ├── news.js
│   └── cables.js
└── middleware/
    ├── auth.js
    └── admin.js
```

## Setup Instructions
1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   npm run dev
   ```

## API Endpoints

### Authentication
- **POST /api/auth/register**: Register a new user
  - Request Body: `{ email, password, role }`
  - Response: `201` with user object, `400` if missing info, `409` if user exists

- **POST /api/auth/login**: Login a user
  - Request Body: `{ email, password }`
  - Response: `200` with user object, `400` if missing info, `401` if invalid credentials

### Users
- **GET /api/users**: List all users (admin only)
- **GET /api/users/:id**: Get a user by ID (admin only)
- **PUT /api/users/:id/password**: Update a user's password
- **PUT /api/users/:id/role**: Update a user's role (admin only)
- **DELETE /api/users/:id**: Delete a user (admin only)

### News
- **GET /api/news**: List all news
- **GET /api/news/:id**: Get a news item by ID
- **POST /api/news**: Create a news item (authenticated)
- **PUT /api/news/:id**: Update a news item (authenticated)
- **DELETE /api/news/:id**: Delete a news item (authenticated)

### Cables
- **GET /api/cables**: List all cables
- **GET /api/cables/:id**: Get a cable by ID
- **POST /api/cables**: Create a cable (authenticated)
- **PUT /api/cables/:id**: Update a cable (authenticated)
- **DELETE /api/cables/:id**: Delete a cable (authenticated)

## Environment Variables
- `MONGO_URI`: MongoDB connection URI
- `JWT_SECRET`: Secret key for JWT token generation

## Dependencies
- `bcryptjs`: Password hashing
- `body-parser`: Request body parsing
- `dotenv`: Environment variable management
- `express`: Web framework
- `jsonwebtoken`: JWT token generation
- `mongoose`: MongoDB ODM
- `nodemon`: Development server auto-restart

## Roles
- `user`: Regular user
- `admin`: Administrator with full access
- `editor`: User with limited access to news and cable management