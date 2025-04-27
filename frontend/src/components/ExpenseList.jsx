const ExpenseList = ({ expenses, onEdit, onDelete }) => {
    return (
        <div className="expense-list">
            <h2>All Expenses</h2>
            {expenses.length === 0 ? (
                <p>No expenses found.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Amount</th>
                            <th>Category</th>
                            <th>Description</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {expenses.map((expense) => (
                            <tr key={expense._id}>
                                <td>₹{expense.amount}</td>
                                <td>{expense.category}</td>
                                <td>{expense.description}</td>
                                <td>{new Date(expense.date).toLocaleDateString()}</td>
                                <td>
                                    <button onClick={() => onEdit(expense)}>Edit</button>
                                    <button onClick={() => onDelete(expense._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default ExpenseList;
