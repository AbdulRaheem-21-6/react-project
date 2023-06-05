import React from "react";
import Expenseform from "./Expenseform/Expenseform";
import './New_expense.css'
const NewExpense = (props) => {

    const onSave = (value) => {
     // const expense
     const expense_data = {
        ...value,
        id:Math.random().toString()
     }
     props.onAddExpense(expense_data)
    }

    return (
        <div className="new-expense">
            <Expenseform  onSave={onSave}/>
             </div> )
    
    
};
export default NewExpense;