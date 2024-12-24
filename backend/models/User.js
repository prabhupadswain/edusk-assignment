const db = require("../config/db");

class User {
  constructor(username, age, email) {
    this.username = username;
    this.age = age;
    this.email = email;
  }

  static getAllUsers() {
    const sql = `SELECT * FROM users`;
    return db.query(sql);
  }

  static checkEmailExistsOrNot(emailToCheck) {
    const sql = `SELECT COUNT(*) AS count FROM users WHERE email = ?`;
    return db.query(sql, [emailToCheck]);
  }
}

module.exports = User;
