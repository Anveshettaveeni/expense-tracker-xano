import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ExpenseList() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    axios.get('/expenses')
      .then(response => setExpenses(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <ul>
      {expenses.map(expense => (
        <li key={expense.id}>{expense.title} - ₹{expense.amount}</li>
      ))}
    </ul>
  );
}

export default ExpenseList;