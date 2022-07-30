import React from 'react'
import ExpenseDate from './ExpenseDate'
import '../css/expenselist.css'

export default function ExpenseList(props) {
  return (
    <div className='row'>
      <div className='left'>
          <ExpenseDate date={props.date} />
        </div>
        <div className='center'>
          {props.name}
        </div>
        <div className='right'>
          ${props.price}
        </div>
    </div>
  )
}
