import React from 'react'

import ExpenseForm from '../ExpenseForm/ExpenseForm'
import './NewExpenses.css'

export default function NewExpenses(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData ={
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData)
  }
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  )
}
 