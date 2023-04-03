import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
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
      <h2> Let's get started!
        <ExpenseItem title= {expenses[1].title} price = {expenses[1].amount} date= {expenses[1].date}></ExpenseItem>
        <ExpenseItem title= {expenses[0].title} price = {expenses[0].amount} date= {expenses[0].date}></ExpenseItem>
        <ExpenseItem title= {expenses[2].title} price = {expenses[2].amount} date= {expenses[2].date}></ExpenseItem>
      </h2>
    </div>
    
  );
}

export default App;
