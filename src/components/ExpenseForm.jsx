import { useState } from 'react';

function ExpenseForm( { onAdd } ){
    
    const [name , setName] = useState('');
    const [amount, setAmount] = useState('') ;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !amount) return;
        onAdd({ name, amount });
        setName('');
        setAmount('');
      };
    

    
    return(
     <form onSubmit={handleSubmit}>
       <input  type="text"
           placeholder="Expense Name"
           value = {name}
           onChange={(e) =>setName(e.target.value)} />

       <input type="number"
          placeholder="amount"
          value = {amount}  
          onChange={(e)=> setAmount(e.target.value)}/>

    <button type="submit">Add</button>
    </form>
  ) ;
}

export default ExpenseForm ;