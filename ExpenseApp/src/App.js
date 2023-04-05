import React from 'react';
import './App.css';
import Expenses from './components/Expenses';

const  App = () => {
  const expenses = [
    {
      id: 'el',
      title: 'Toilet Paper',
      amount: 94.29,
      /* date: new Date(2020, 4, 24), */
    
    },
    {
      id: 'el',
      title: 'car Insurance',
      amount: 294.29,
      
    },
    {
      id: 'el',
      title: 'Brrrr',
      amount: 984.29,
      
    }
  ]

  return (
    <div>
      <h2> Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
    
  );
}

export default App;
