# Book Exchange Platform

## Description

The **Book Exchange Platform** is a full-stack web application built with **React.js** for the frontend and **Node.js/Express** for the backend. This platform allows users to securely register, log in, add books to their collection, search for books, and initiate book exchange requests with other users.

### Features:
- **User Authentication**: Secure login, registration, and password recovery.
- **Book Listings**: Add, edit, and delete books from the user's collection.
- **Search**: Search for books based on title, author, genre, or availability.
- **Exchange Requests**: Users can send, accept, reject, or modify book exchange requests.
- **Transaction Management**: Track the status of book exchange requests and manage ongoing transactions.

## Technologies Used

- **Frontend**: React.js, Axios, React Router
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL with Sequelize ORM
- **Authentication**: JWT (JSON Web Tokens)
- **Password Security**: bcryptjs

## Requirements

- **Node.js** (v14.x or higher)
- **npm** or **yarn**
- **PostgreSQL** database

## Steps to Deploy and Run

cd backend
npm install
DB_HOST=localhost
DB_PORT=5432
DB_USER=your-db-username
DB_PASSWORD=your-db-password
DB_NAME=book_exchange
JWT_SECRET=your-jwt-secret-key
npx sequelize-cli db:migrate
npm start
cd ../frontend
npm install


Configure the API Endpoint
In the frontend, configure the Axios instance to point to the backend API. Update the following file:

src/api/axios.js (or wherever the API call is defined):
const axios = require('axios');

const api = axios.create({
  baseURL: 'http://localhost:5000/api'
});

export default api;


4. Access the Application
Open your browser and navigate to http://localhost:3000 to access the platform.
You can now register, log in, add books, search for books, and manage exchange requests.
API Endpoints
Authentication
POST /api/auth/register: Register a new user.
POST /api/auth/login: Login with email and password.
POST /api/auth/logout: Logout the user.
POST /api/auth/forgot-password: Reset the user's password.
Book Management
GET /api/books: Get all books.
POST /api/books: Add a new book.
PUT /api/books/
: Update an existing book.
DELETE /api/books/
: Delete a book.
Exchange Requests
POST /api/exchanges: Create a new exchange request.
GET /api/exchanges: Get all exchange requests.
PUT /api/exchanges/
: Update an exchange request (accept/reject/modify).
Troubleshooting
If you encounter issues with JWT authentication, ensure that the JWT secret key is correctly set in the .env file.
Ensure that your PostgreSQL service is running and accessible by the backend server.