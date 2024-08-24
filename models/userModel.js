const db = require("../config/db");

const User = {
  findByUsername: (username) => {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM users WHERE username = ?",
        [username],
        (err, result) => {
          if (err) return reject(err);
          resolve(result[0]);
        }
      );
    });
  },

  create: (user) => {
    return new Promise((resolve, reject) => {
      db.query("INSERT INTO users SET ?", user, (err, result) => {
        if (err) return reject(err);
        resolve({ id: result.insertId, ...user });
      });
    });
  },
};

module.exports = User;
