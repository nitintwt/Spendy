import React, { useState , useEffect} from 'react';
import Header from './Header/Header';
import { AddExpense } from './card/AddExpense';
import { ExpensesTable } from './table/ExpensesTable';
import { ExpenseProvider } from '../context/context';
import TotalExpense from './TotalExpense';

function Home() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses((prev) => [{ id: Date.now(), ...expense }, ...prev]);
  };

  useEffect(() => {
    const expenses = JSON.parse(localStorage.getItem("expenses"))

    if (expenses && expenses.length > 0) {
      setExpenses(expenses)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses))
  }, [expenses])

  return (
    <ExpenseProvider value={{ expenses, addExpense }}>
      <div>
        <div>
          <Header />
        </div>
        <div className='flex min-h-screen '>
          <div className='ml-20 pt-20'>
            <AddExpense />
          </div>
          <div className='ml-20 p-20'>
            <ExpensesTable expenses={expenses} />
          </div>
          <div className='ml-20 p-20'>
            <TotalExpense expenses={expenses}/>
          </div>
        </div>
      </div>
    </ExpenseProvider>
  );
}

export default Home;

