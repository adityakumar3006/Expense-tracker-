const Expense = require('../models/Expense');

// Create Expense
exports.createExpense = async (req, res) => {
    try {
        const newExpense = await Expense.create(req.body);
        res.status(201).json(newExpense);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get All Expenses
exports.getExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find();
        res.json(expenses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update Expense
exports.updateExpense = async (req, res) => {
    try {
        const updatedExpense = await Expense.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updatedExpense);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete Expense
exports.deleteExpense = async (req, res) => {
    try {
        await Expense.findByIdAndDelete(req.params.id);
        res.json({ message: 'Expense deleted' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
