import React from 'react'
import ExpenseList from './ExpenseList'
import '../css/expense.css'

export default function Expense(props) {
  const data = props.item;
  return (
    <div className='list'>
      {data.map((data) => (
        <ExpenseList 
          date={data.date}
          name={data.name}
          price={data.price}
        />
      ))}
    </div>
  )
}
