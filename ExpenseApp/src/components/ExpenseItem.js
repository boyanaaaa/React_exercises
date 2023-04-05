import React from 'react';
import './ExpenseItem.css';
import Card from './Cards';



const  ExpenseItem = (props) => {
    //const month = props.date.toLocaleString('en-US', {month: 'long'});
    //const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    //const year = props.date.getFullyear();
    return (
        <Card classname='espense-item'>
            <div className = 'expense-item'>
        
                <div className = 'expense-item__description'>
                <h2>{props.title}</h2>
                </div>
                <div className = 'expense-item__price'>${props.amount}</div>
            </div>  
     </Card> 
    );
}

export default ExpenseItem;
