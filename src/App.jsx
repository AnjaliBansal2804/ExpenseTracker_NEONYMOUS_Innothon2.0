import { useState } from 'react' ;
import ExpenseForm from './components/ExpenseForm' ;
import ExpenseList from './components/ExpenseList';

import './App.css'

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) =>{
    setExpenses([...expenses , {... expense, id: Date.now() }] ) ;
  }

  //delete a expense by id 
  const deleteExpense  = (id) =>{
    setExpenses(expenses.filter((exp)=>exp.id != id)) ;
  };

  const total = expenses.reduce((sum, exp) => sum + Number(exp.amount) , 0) ;
 
  return (
    <div className="container bg-white mt-10">
      <h1 classNamw = "text-2xl font-bold text-center mb-4">Expense Tracker</h1>
      <ExpenseForm onAdd = {addExpense} />
      <ExpenseList expenses = {expenses} onDelete = {deleteExpense} />
      <h2>Total :  ₹{total}</h2>
    </div>
  ) ;
  
}

export default App