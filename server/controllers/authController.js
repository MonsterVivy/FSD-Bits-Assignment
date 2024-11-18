// server/controllers/authController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { createUser, findUserByEmail } = require('../models/userModel');

const SECRET_KEY = '123456789'; // Set your secret key for JWT

// Register new user
const register = async (req, res) => {
    const { email, password } = req.body;
    
    // Check if the email already exists
    const existingUser = await findUserByEmail(email);
    if (existingUser) return res.status(400).send('User already exists');
    
    try {
        const user = await createUser(email, password);
        res.status(201).send({ message: 'User registered successfully', user });
    } catch (error) {
        res.status(500).send('Internal server error');
    }
};

// Login user
const login = async (req, res) => {
    const { email, password } = req.body;
    
    const user = await findUserByEmail(email);
    if (!user) return res.status(404).send('User not found');
    
    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) return res.status(400).send('Invalid credentials');
    
    const token = jwt.sign({ userId: user.user_id }, SECRET_KEY, { expiresIn: '1h' }); // JWT with 1-hour expiry
    res.status(200).send({ message: 'Login successful', token });
};

// Handle password recovery (basic flow, add email service for full implementation)
const resetPassword = async (req, res) => {
    const { email } = req.body;
    const user = await findUserByEmail(email);
    if (!user) return res.status(404).send('User not found');
    
    // In a real application, here you'd send an email with a password reset link
    res.status(200).send('Password reset link sent');
};

module.exports = { register, login, resetPassword };
