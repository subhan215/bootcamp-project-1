import React , {useContext} from 'react';
import {GlobalContext} from '../GlobalContext';
import {Transaction} from './Transactions';

export const Transactionlist = () => {
    const { transactions} = useContext(GlobalContext);
    return (
        <>

        <h3>History</h3>
        <ul className="list">
            {transactions.map(transaction => (
                 <Transaction key={transaction.id} transaction={transaction} />
            )
            )}
        </ul>
        </>
    )
} 

export default Transactionlist 