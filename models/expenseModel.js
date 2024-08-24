const db = require("../config/db");

const Expense = {
  create: (expense) => {
    return new Promise((resolve, reject) => {
      db.query("INSERT INTO expenses SET ?", expense, (err, result) => {
        if (err) return reject(err);
        resolve({ id: result.insertId, ...expense });
      });
    });
  },

  findByUserId: (userId) => {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM expenses WHERE user_id = ?",
        [userId],
        (err, result) => {
          if (err) return reject(err);
          resolve(result);
        }
      );
    });
  },

  update: (expenseId, data) => {
    return new Promise((resolve, reject) => {
      db.query(
        "UPDATE expenses SET ? WHERE id = ?",
        [data, expenseId],
        (err, result) => {
          if (err) return reject(err);
          resolve(result);
        }
      );
    });
  },

  delete: (expenseId) => {
    return new Promise((resolve, reject) => {
      db.query(
        "DELETE FROM expenses WHERE id = ?",
        [expenseId],
        (err, result) => {
          if (err) return reject(err);
          resolve(result);
        }
      );
    });
  },
};

module.exports = Expense;
