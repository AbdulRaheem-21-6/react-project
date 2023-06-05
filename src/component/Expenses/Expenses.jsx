import React from "react";
import ExpenseItem from "./Expense-item/ExpenseItem";
import './Expenses.css'

const Expenses = (props) => {
    const expenses = props.expenses;
    return(
            <div className="expenses">
                {
                    expenses.map(each_expense=> (<ExpenseItem
                    key = {each_expense.id}
                    date={each_expense.date}
                    title={each_expense.title}
                    amount={each_expense.amount}
                    />))
                }
                
               
            </div>
    )
}
export default Expenses;


comment:
{/* title={expenses[0].title}
                amount={expenses[0].amount}
                date={expenses[0].date}
                /> 
                <ExpenseItem
                title={expenses[1].title}
                amount={expenses[1].amount}
                date={expenses[1].date}
                /> 
                <ExpenseItem
                title={expenses[2].title}
                amount={expenses[2].amount}
                date={expenses[2].date}
                /> 
                <ExpenseItem
                title={expenses[3].title}
                amount={expenses[3].amount}
                date={expenses[3].date}
                
            />*/} 