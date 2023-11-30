import React, {useState} from 'react';
import NewExpenses from './components/NewExpenses/NewExpenses/NewExpenses';
import Expenses from './components/Expenses/Expenses/Expenses'

const dummy_expenses =[
  {
    id: '1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2022, 7, 14)
  },
  {
    id: '2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2020, 6, 15)
  },
  {
    id: '3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2020, 5, 16)
  },
  {
    id: '4',
    title: 'New Desk(Wooden)',
    amount: 450,
    date: new Date(2021, 4, 17)
  }
]

function App() {
  const [expenses, setExpenses] = useState(dummy_expenses);

  const addExpenseHandler= (expense) => {
    setExpenses((prevExpenses) =>{
      return [expense, ...prevExpenses]
    })
  }

  return (
    <>
      <NewExpenses onAddExpense = {addExpenseHandler}/>
      <Expenses items={expenses}/>
    </>
  )
}
export default App;
