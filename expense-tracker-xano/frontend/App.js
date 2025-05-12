import React from 'react';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';

function App() {
  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <AddExpenseForm />
      <ExpenseList />
    </div>
  );
}

export default App;