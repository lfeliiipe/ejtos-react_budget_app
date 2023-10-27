import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const DropdownCurrency = () => {
    const { dispatch, currency } = useContext(AppContext);

    const [ newCurrency, setNewCurrency ] = useState(currency);

    const changeCurrency = (event) => {
        setNewCurrency(event.target.value);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });
    };

    return (
        <div className='alert alert-success'>
            <label>Currency</label>
            <select className="form-select" value={newCurrency} onChange={changeCurrency}>
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
            </select>

        </div>
        
    );
};
export default DropdownCurrency;
