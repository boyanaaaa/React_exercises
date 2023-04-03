import './ExpenseItem.css';

function ExpenseItem(props) {
    //const month = props.date.toLocaleString('en-US', {month: 'long'});
    //const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    //const year = props.date.getFullyear();
    return (
     <div className = 'expense-item'>
        
        <div className = 'expense-item__description'>
            <h2>{props.title}</h2>
        </div>
        <div className = 'expense-item__price'>${props.price}</div>
     </div>   
    )
}

export default ExpenseItem;