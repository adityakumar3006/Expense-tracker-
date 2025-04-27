import { useEffect, useState } from 'react';
import API from '../api.js';
import Dashboard from '../components/Dashboard';
import { Chart, registerables } from 'chart.js';


Chart.register(...registerables);

const Analytics = () => {
    const [expenses, setExpenses] = useState([]);

    const fetchExpenses = async () => {
        try {
            const { data } = await API.get('/expenses');
            setExpenses(data);
        } catch (error) {
            console.error('Failed to fetch expenses:', error);
        }
    };

    useEffect(() => {
        fetchExpenses();
    }, []);

    return (
        <div>
            <h1>Analytics</h1>
            <Dashboard expenses={expenses} />
        </div>
    );
};

export default Analytics;
