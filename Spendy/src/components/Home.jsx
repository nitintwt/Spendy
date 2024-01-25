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
  <div className="bg-blue-600 text-white min-h-screen">
    <Header />
    <div className="container mx-auto flex justify-center items-center pt-8">
      <div className="w-full max-w-screen-lg flex flex-col md:flex-row">
        <div className="mb-4 md:mb-0 md:w-1/4">
          <div className="bg-blue-800 p-6 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4">Total Expense</h2>
            <TotalExpense expenses={expenses} />
          </div>
        </div>
        <div className="md:w-3/4 md:ml-4">
          <div className="bg-blue-800 rounded-md shadow-md mb-4">
            <AddExpense />
          </div>
          <div className="bg-blue-800 p-6 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4">Expense List</h2>
            <ExpensesTable expenses={expenses} />
          </div>
        </div>
      </div>
    </div>
  </div>
</ExpenseProvider>









  );
}

export default Home;

