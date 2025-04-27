const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    description: String,
    date: {
        type: Date,
        required: true,
    }
});

module.exports = mongoose.model('Expense', ExpenseSchema);
