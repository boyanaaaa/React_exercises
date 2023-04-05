import React from 'react';
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from './Cards';

const Expenses = (props) => {
    return (
        <Card className ="expenses">
            <ExpenseItem title= {props.items[0].title} price = {props.items[0].amount} date= {props.items[0].date} />            <ExpenseItem title= {props.items[0].title} price = {props.items[0].amount} date= {props.items[0].date}></ExpenseItem>
            <ExpenseItem title= {props.items[1].title} price = {props.items[1].amount} date= {props.items[1].date} />            <ExpenseItem title= {props.items[0].title} price = {props.items[0].amount} date= {props.items[0].date}></ExpenseItem>
            <ExpenseItem title= {props.items[2].title} price = {props.items[2].amount} date= {props.items[2].date} />
        </Card>
    )
}

export default Expenses;
