import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [newTitle, setNewTitle] = useState('');
  const [newAmount, setNewAmount] = useState('');
  const [newDate, setNewDate] = useState('');
  // the value of the event.target.value it will always be a string, that is why the state is initialized with a empty string

  // const [userInput, setUserInput] = useState({
  //   title: '',
  //   amount: '',
  //   date: ''
  // });

  const titleChangeHandler = ({ target: { value } }) => {
    setNewTitle(value); 
    // setUserInput({
    //   ...userInput,
    //   title: value,
    // });
    // Se a atualização do estado depender de um prevState, essa forma garante que será usado o último snapshot
    // setUserInput((prevState) => {
    //   return { ...prevState, title: value };
    // });    
  }

  const amountChangeHandler = (event) => {
    setNewAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   amount: value,
    // });
  }

  const dateChangeHandler = ({ target: { value } }) => {
    setNewDate(value);
    // setUserInput({
    //   ...userInput,
    //   date: value,
    // });
  }

  const submitHandler = (event) => {
    event.preventDefault();
    
    const expenseDate = {
      title: newTitle,
      amount: newAmount,
      date: new Date(newDate),
    };
  
    props.onSaveExpenseData(expenseDate);
    
    // two way binding - armazena as info do formulário e limpa os campos depois que o formulário for submetido
    setNewTitle('');
    setNewAmount('');
    setNewDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input 
            type='text'
            value={newTitle}
            onChange={titleChangeHandler} 
            name="title"
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input 
            type='number' 
            min='0.01' 
            step='0.01' 
            value={newAmount} 
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input 
            type='date' 
            min='2019-01-01' 
            max='2022-31-12' 
            value={newDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>

  )
}

export default ExpenseForm;