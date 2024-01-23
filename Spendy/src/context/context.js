import { createContext, useContext } from "react";

export const ExpenseContext= createContext({
  expenses:[
    {
      id:1,
      amount:"100",
      description:"Food"
    }
  ],
  addExpense:(expense)=>{},
  deleteExpense:(id)=>{}
})

export const useExpense=()=>{
  return useContext(ExpenseContext)
}

export const ExpenseProvider =ExpenseContext.Provider