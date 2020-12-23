import React from 'react' ; 
import './App.css';
import { Header} from './components/header';
import {Balance } from './components/balance';
import {Incomeandexpenses} from './components/incomeandexpenses';
import {AddTransaction} from './components/addtransaction';
import {Transactionlist} from './components/Transactionlist';

import {GlobalProvider} from './GlobalContext';

function App() {
  return (
    <>

    <GlobalProvider>
      <Header />
      <div className="container">
      <Balance />
      <Incomeandexpenses />
      <Transactionlist />
      <AddTransaction />
      </div>
    </GlobalProvider>
    </>
    
  );
  
}
export default App