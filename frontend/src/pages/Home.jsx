import { useEffect, useState } from 'react';
import { fetchExpenses, createExpense, updateExpense, deleteExpense } from '../services/expenseService';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';

const Home = () => {
    const [expenses, setExpenses] = useState([]);
    const [selectedExpense, setSelectedExpense] = useState(null);

    const loadExpenses = async () => {
        const { data } = await fetchExpenses();
        setExpenses(data);
    };

    useEffect(() => {
        loadExpenses();
    }, []);

    const handleSubmit = async (expenseData) => {
        if (selectedExpense) {
            await updateExpense(selectedExpense._id, expenseData);
        } else {
            await createExpense(expenseData);
        }
        loadExpenses();
    };

    const handleDelete = async (id) => {
        await deleteExpense(id);
        loadExpenses();
    };

    return (
        <div className="home">
            <ExpenseForm
                onSubmit={handleSubmit}
                selectedExpense={selectedExpense}
                clearSelection={() => setSelectedExpense(null)}
            />
            <ExpenseList
                expenses={expenses}
                onDelete={handleDelete}
                onEdit={(expense) => setSelectedExpense(expense)}
            />
        </div>
    );
};

export default Home;
