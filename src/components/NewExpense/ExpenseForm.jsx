import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  // the value of the event.target.value it will always be a string, that is why the state is initialized with a empty string


  const titleChangeHandler = ({ target: { value } }) => {
    setTitle(value); 
    console.log(value);
  }

  const amountChangeHandler = ({ target: { value } }) => {
    setAmount(value);
  }

  const dateChangeHandler = ({ target: { value } }) => {
    setDate(value);
  }

  return (
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={titleChangeHandler} name="title"/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-31-12' onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>

  )
}

export default ExpenseForm;