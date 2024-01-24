import React, { useState, useEffect, useContext } from 'react';
import { ExpenseContext } from '@/context/context';

function TotalExpense() {
  const { expenses } = useContext(ExpenseContext);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const calculatedTotal = expenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);
    setTotalAmount(calculatedTotal);
  }, [expenses]);

  return (
    <div>
      <div>
        <h1>{totalAmount}</h1>
      </div>
    </div>
  );
}

export default TotalExpense;

