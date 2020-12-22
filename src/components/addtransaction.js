
import '../App.css';
import { GlobalContext } from '../GlobalContext';
import React , { useContext, useState } from 'react';

export const  AddTransaction = () => {

    const { addTransaction } = useContext(GlobalContext);
    const [desc,newDesc ] = useState('');
    const [amount, setAmount] = useState(0);

    const onSubmit = e => {
        e.preventDefault();
        

        
        
            const newTransaction = {
                amount : +amount,
                desc,
                id : Math.floor(Math.random() * 10000)
            }
            addTransaction(newTransaction);
            
             
        
    }

    return (
        <>
          <h3>Add new Transaction</h3>
          <form onSubmit={onSubmit} >
              <div className="form-Control">
                  <label htmlfor="text">Text</label>
                  <input value={desc} onChange={(e) => newDesc(e.target.value)} type="text" placeholder="Enter text..." />

              </div>
              <div className="form-Control">
                  <label htmlFor="amount" >Amount<br />
                  (negative - expense, positive - income)
                  </label>
                  <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" placeholder="Enter amount..." />
              </div>
              <button  className="btn">Add transaction</button>

          </form>
          </>
        )
}


export default AddTransaction 
   