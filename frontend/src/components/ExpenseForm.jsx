import { useState, useEffect } from 'react';

const ExpenseForm = ({ onSubmit, selectedExpense, clearSelectedExpense }) => {
    const [formData, setFormData] = useState({
        amount: '',
        category: '',
        description: '',
        date: '',
    });

    useEffect(() => {
        if (selectedExpense) {
            setFormData(selectedExpense);
        }
    }, [selectedExpense]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({ amount: '', category: '', description: '', date: '' });
        if (clearSelectedExpense) clearSelectedExpense();
    };

    return (
        <form onSubmit={handleSubmit} className="expense-form">
            <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="Amount"
                required
            />
            <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                placeholder="Category"
                required
            />
            <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Description"
            />
            <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
            />
            <button type="submit">{selectedExpense ? 'Update' : 'Add'} Expense</button>
        </form>
    );
};

export default ExpenseForm;
