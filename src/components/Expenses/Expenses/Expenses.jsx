import React, {useState} from 'react';
import ExpensesList from '../ExpensesList/ExpensesList';
import Card  from '../../UI/Card';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import ExpensesChart from '../ExpensesChart';
import './Expenses.css';

export default function Expenses(props) { 
  const [filteredYear, setFilteredYear] = useState('2020')
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(expenses => {
    return expenses.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <Card className = 'expenses'>
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      <ExpensesChart expenses={filteredExpenses}/> 
      <ExpensesList items={filteredExpenses}/>
      </Card>
    </li>
    
  )
}
