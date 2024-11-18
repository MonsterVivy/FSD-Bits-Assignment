// server/models/userModel.js
const db = require('../database/db'); // Assuming db.js contains your PostgreSQL connection logic
const bcrypt = require('bcryptjs');

const createUser = async (email, password) => {
    const salt = bcrypt.genSaltSync(10); // Generate salt
    const hashedPassword = bcrypt.hashSync(password, salt); // Hash password
    const query = `INSERT INTO users (email, password) VALUES ($1, $2) RETURNING user_id, email`;
    const result = await db.query(query, [email, hashedPassword]);
    return result.rows[0];
};

const findUserByEmail = async (email) => {
    const query = `SELECT * FROM users WHERE email = $1`;
    const result = await db.query(query, [email]);
    return result.rows[0];
};

module.exports = { createUser, findUserByEmail };
