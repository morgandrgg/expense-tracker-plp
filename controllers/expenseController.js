const Expense = require("../models/expenseModel");

// Add Expense
exports.addExpense = async (req, res) => {
  try {
    const { userId } = req.user;
    const { amount, date, category } = req.body;

    const newExpense = await Expense.create({
      user_id: userId,
      amount,
      date,
      category,
    });

    res
      .status(201)
      .json({ message: "Expense added successfully", expense: newExpense });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// View Expenses
exports.getExpenses = async (req, res) => {
  try {
    const { userId } = req.user;
    const expenses = await Expense.findByUserId(userId);

    res.json({ expenses });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// (Optional) Edit Expense
exports.editExpense = async (req, res) => {
  try {
    const { expenseId } = req.params;
    const { amount, date, category } = req.body;

    const updatedExpense = await Expense.update(expenseId, {
      amount,
      date,
      category,
    });

    res.json({
      message: "Expense updated successfully",
      expense: updatedExpense,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// (Optional) Delete Expense
exports.deleteExpense = async (req, res) => {
  try {
    const { expenseId } = req.params;

    await Expense.delete(expenseId);

    res.json({ message: "Expense deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
