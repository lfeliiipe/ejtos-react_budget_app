import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa'
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        dispatch({
            type: 'RED_EXPENSE',
            payload: {
                name: name,
                cost: 10
            }
        });
    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td><FaPlusCircle size='2em' color='green' onClick={()=> increaseAllocation(props.name)}></FaPlusCircle></td>
            <td><FaMinusCircle size='2em' color='red' onClick={() => decreaseAllocation(props.name)}></FaMinusCircle></td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
