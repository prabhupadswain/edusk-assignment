const db = require("../config/db");

class User {
  constructor(username, age, email) {
    this.username = username;
    this.age = age;
    this.email = email;
  }

  save() {
    const sql = `INSERT INTO users (username, age, email) VALUES (?,?,?)`;
    return db.query(sql, [this.username, this.age, this.email]);
  }

  static getAllUsers() {
    const sql = `SELECT * FROM users`;
    return db.query(sql);
  }

  static checkEmailExistsOrNot(emailToCheck) {
    const sql = `SELECT COUNT(*) AS count FROM users WHERE email = ?`;
    return db.query(sql, [emailToCheck]);
  }

  static editAnUser(userId, recordToUpdate) {
    const sql = `UPDATE users SET ? WHERE id = ?`;
    return db.query(sql, [recordToUpdate, userId]);
  }
}

module.exports = User;
