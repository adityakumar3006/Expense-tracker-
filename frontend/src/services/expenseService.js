import axios from 'axios';

// 👨‍💻 Base API setup
const API = axios.create({
    baseURL: 'http://localhost:5000/api', // change if your backend is hosted differently
});

// 🧹 API Service Methods
export const getExpenses = () => API.get('/expenses');
export const addExpense = (expenseData) => API.post('/expenses', expenseData);
export const updateExpense = (id, updatedData) => API.put(`/expenses/${id}`, updatedData);
export const deleteExpense = (id) => API.delete(`/expenses/${id}`);
