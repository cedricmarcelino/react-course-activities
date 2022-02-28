import React from 'react';
import './App.css';
import Expenses from './components/Expenses';

export type ExpensesTemplate = Array<ExpenseItem>

interface ExpenseItem {
  title: string,
  amount: number,
  date: Date
}

const App: React.FC = () => {
  const expenses: ExpensesTemplate = [
    {title: 'Sample Expense', amount: 245.98, date: new Date(2022, 2, 28)},
    {title: 'Sample Expense 2', amount: 123.98, date: new Date(2022, 3, 28)},
    {title: 'Sample Expense 3', amount: 423.98, date: new Date(2022, 4, 28)},
    {title: 'Sample Expense 4', amount: 535.98, date: new Date(2022, 5, 28)}
  ]

  return (
    <Expenses expenses={expenses}/>
  );
}

export default App;
