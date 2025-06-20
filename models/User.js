const db = require('../config/db');

exports.create = async (fullName, email, hashedPassword) => {
  const [result] = await db.execute(
    'INSERT INTO users (fullname, email, password) VALUES (?, ?, ?)',
    [fullName, email, hashedPassword]
  );
  return result;
};

exports.findByEmail = async (email) => {
  const [rows] = await db.execute(
    'SELECT * FROM users WHERE email = ?',
    [email]
  );
  return rows[0];
};
