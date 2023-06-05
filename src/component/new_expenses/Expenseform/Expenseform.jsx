import React, { useState } from "react";
import './Expenseform.css'
const Expenseform = (props) => {

    const[enteredTitle,setEnteredTitle] = useState('');
    const[enteredAmount,setEnteredAmount] = useState(0);
    const[enteredDate,setEnteredDate] = useState(new Date());

    const onTitleChange = (event) => {
        setEnteredTitle(event.target.value);
    }

    const onAmountChange = (event) => {
        setEnteredAmount(event.target.value);
    }

    const onDateChange = (event) => {
        setEnteredDate(event.target.value);
    }

    const onExpenseSubmit = (event) =>{
        event.preventDefault();
        console.log('call from form',enteredTitle,enteredAmount,enteredDate);

        const new_expense ={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        }
        props.onSave(new_expense);
    }

    return (
        <form onSubmit={onExpenseSubmit}>
        <div className="new-expense__controls">
            {/*Title*/}
            <div className="new-expense__control">

                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" onChange={onTitleChange} value={enteredTitle}/>
            </div>
            {/*Amount*/}
            <div className="new-expense__control">
                <label htmlFor="amount">Amount</label>
                <input type="number" name="amount" id="amount" min="0" value={enteredAmount} onChange={onAmountChange}/>
            </div>
            {/*Date*/}
            <div className="new-expense__control">
                <label htmlFor="date">Date</label>
                <input type="date" name="date" id="date" value={enteredDate} onChange={onDateChange}/>
            </div>
        </div>
        {/*Button Container*/}
        <div>
            <button id="cancel">Cancel</button>
            <button type="submit" id="add">Add Expense</button>
        </div>
        {/*<div><button id="submit">SUBMIT</button></div>*/}
       </form>

    )
}
export default Expenseform