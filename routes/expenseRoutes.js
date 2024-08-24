const express = require("express");
const router = express.Router();
const expenseController = require("../controllers/expenseController");
const authMiddleware = require("../middleware/authMiddleware");

// Add Expense
router.post("/expenses", authMiddleware, expenseController.addExpense);

// View Expenses
router.get("/expenses", authMiddleware, expenseController.getExpenses);

// (Optional) Edit Expense
router.put(
  "/expenses/:expenseId",
  authMiddleware,
  expenseController.editExpense
);

// (Optional) Delete Expense
router.delete(
  "/expenses/:expenseId",
  authMiddleware,
  expenseController.deleteExpense
);

module.exports = router;
