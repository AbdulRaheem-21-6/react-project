import React,{useState} from 'react';
import ExpenseDate from '../Expensedate/Expensedate';
import './ExpenseItem.css';

const ExpenseItem = (props = {}) => {
    //const{date= new Date(),title = "",amount = ""} = props;//object destructuring

    const[title,setTitle]=useState(props.title)
    const[date,setDate]=useState(props.date)
    const[amount,setAmount]=useState(props.amount)

    function onChangeClick(event){
        setTitle('updated');
        setAmount(0);
        setDate(new Date());
        console.log(title);
    }

    return(
        <div className = "expense-item">
           <ExpenseDate date={date}/> 
            <div className="expense-item__description">
                    <h2>{title}</h2>
            <div className="expense-item__price">${amount}</div>
             </div> 
             <div  >
                 <button id="changebutton" onClick={onChangeClick}>Change</button>
            </div> 
             
        </div>
    )
}
export default ExpenseItem;