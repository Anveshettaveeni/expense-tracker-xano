import React, { useState } from 'react';
import axios from 'axios';

function AddExpenseForm() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/expenses', { title, amount })
      .then(() => {
        setTitle('');
        setAmount('');
      })
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Expense title" required />
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" required />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default AddExpenseForm;