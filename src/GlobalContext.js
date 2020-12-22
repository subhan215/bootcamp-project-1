import React , {createContext , useReducer} from "react";
import abc from './transreducer';
 
const initialTransactions = {
    transactions: []
}

export const GlobalContext = createContext(initialTransactions);


export const GlobalProvider = ({children}) => {
    const [state , dispatch] = useReducer(abc  ,initialTransactions)

    function deleteTransaction(id) {
        dispatch({
            type : "DELETE_TRANSACTION" ,
            payload : id 
        })
    }
   
    function addTransaction(newTransaction){
        dispatch({
            type: "ADD_TRANSACTION",
            payload: newTransaction
            
        })
    }
    return(
       <GlobalContext.Provider value={{
          transactions: state.transactions,
          deleteTransaction, 
          addTransaction 

        }}>
          {children}
        </GlobalContext.Provider>

    )
}
