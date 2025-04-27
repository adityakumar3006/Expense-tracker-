import { useEffect, useState } from 'react';
import { getExpenses, addExpense, updateExpense, deleteExpense } from './services/expenseService';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Dashboard from './components/Dashboard';
import './App.css'; // Optional for styling

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [selectedExpense, setSelectedExpense] = useState(null);

  const fetchAllExpenses = async () => {
    const { data } = await getExpenses();
    setExpenses(data);
  };

  useEffect(() => {
    fetchAllExpenses();
  }, []);

  const handleAddOrUpdate = async (expenseData) => {
    if (selectedExpense) {
      await updateExpense(selectedExpense._id, expenseData);
    } else {
      await addExpense(expenseData);
    }
    fetchAllExpenses();
    setSelectedExpense(null);
  };

  const handleDelete = async (id) => {
    await deleteExpense(id);
    fetchAllExpenses();
  };

  const handleEdit = (expense) => {
    setSelectedExpense(expense);
  };

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <ExpenseForm
        onSubmit={handleAddOrUpdate}
        selectedExpense={selectedExpense}
        clearSelectedExpense={() => setSelectedExpense(null)}
      />
      <ExpenseList
        expenses={expenses}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <Dashboard expenses={expenses} />
    </div>
  );
};

export default App;
