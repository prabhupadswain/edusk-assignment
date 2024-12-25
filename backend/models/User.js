const db = require("../config/db");

class User {
  // Constructor
  constructor(username, age, email) {
    this.username = username;
    this.age = age;
    this.email = email;
  }

  // Save user to DB
  save() {
    const sql = `INSERT INTO users (username, age, email) VALUES (?,?,?)`;
    return db.query(sql, [this.username, this.age, this.email]);
  }

  // Static method - Fetch all users from DB
  static getAllUsers() {
    const sql = `SELECT * FROM users`;
    return db.query(sql);
  }

  // Static method - To check if email exists or not at DB
  // Check before creating new user or edit existing user
  // Parameter - Valid email input received from client via validation module
  static checkEmailExistsOrNot(emailToCheck) {
    const sql = `SELECT COUNT(*) AS count FROM users WHERE email = ?`;
    return db.query(sql, [emailToCheck]);
  }

  // Static method - Edit existing user based on id parameter.
  // Parameter (2 params) - First: id (numeric), Second: single user data(object)
  static editAnUser(userId, recordToUpdate) {
    const sql = `UPDATE users SET ? WHERE id = ?`;
    return db.query(sql, [recordToUpdate, userId]);
  }
}

module.exports = User;
