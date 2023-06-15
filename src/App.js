import React from 'react'
import {useState} from 'react';
//import ExpenseItem from './component/Expenses/Expense-item/ExpenseItem';
import Expenses from './component/Expenses/Expenses';
import NewExpense from './component/new_expenses/New_expense';

const DUMMY_DATA = [
  {
    id: 'e1',
    title: 'HouseHold stattionaries',
    amount: 94.12,
    date: new Date(2021, 7, 14)
  },
  { id: 'e2', title: 'New Mobile', amount: 799.49, date: new Date(2020, 2, 12) },
  {
    id: 'e3',
    title: 'Car Repair',
    amount: 294.67,
    date: new Date(2021, 2, 28)
  },
  {
    id: 'e4',
    title: 'New work desk',
    amount: 450,
    date: new Date(2021, 5, 12)
  }
];
function App(){
    const[expenses,setExpenses] = useState(DUMMY_DATA)
    const onAddExpense = (newValue) => {
       //setExpenses([...expenses,newValue])
      setExpenses((prev) => [newValue,...prev])
    }

    return(
    <div className="App">
    <NewExpense onAddExpense={onAddExpense}/>
    <Expenses expenses= {expenses}/>
    </div>
  );
  
}
export default App;