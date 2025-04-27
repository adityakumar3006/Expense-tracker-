import { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const Dashboard = ({ expenses }) => {
    const pieChartRef = useRef(null);
    const barChartRef = useRef(null);

    useEffect(() => {
        if (!expenses.length) return;

        // Destroy previous charts
        if (pieChartRef.current) {
            pieChartRef.current.destroy();
        }
        if (barChartRef.current) {
            barChartRef.current.destroy();
        }

        const categoryData = expenses.reduce((acc, expense) => {
            acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
            return acc;
        }, {});

        const monthlyData = expenses.reduce((acc, expense) => {
            const month = new Date(expense.date).toLocaleString('default', { month: 'short' });
            acc[month] = (acc[month] || 0) + expense.amount;
            return acc;
        }, {});

        const pieCtx = document.getElementById('pieChart').getContext('2d');
        pieChartRef.current = new Chart(pieCtx, {
            type: 'pie',
            data: {
                labels: Object.keys(categoryData),
                datasets: [{
                    data: Object.values(categoryData),
                    backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56', '#4BC0C0', '#9966FF'],
                }],
            },
        });

        const barCtx = document.getElementById('barChart').getContext('2d');
        barChartRef.current = new Chart(barCtx, {
            type: 'bar',
            data: {
                labels: Object.keys(monthlyData),
                datasets: [{
                    label: 'Monthly Expenses',
                    data: Object.values(monthlyData),
                    backgroundColor: '#36A2EB',
                }],
            },
        });

    }, [expenses]);

    return (
        <div className="dashboard">
            <h2>Expense Analytics</h2>
            <div className="charts">
                <canvas id="pieChart"></canvas>
                <canvas id="barChart"></canvas>
            </div>
        </div>
    );
};

export default Dashboard;
