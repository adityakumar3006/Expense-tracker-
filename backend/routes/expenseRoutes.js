const express = require('express');
const router = express.Router();
const {
    createExpense,
    getExpenses,
    updateExpense,
    deleteExpense
} = require('../controllers/expenseController');

router.post('/expenses', createExpense);
router.get('/expenses', getExpenses);
router.put('/expenses/:id', updateExpense);
router.delete('/expenses/:id', deleteExpense);

module.exports = router;
