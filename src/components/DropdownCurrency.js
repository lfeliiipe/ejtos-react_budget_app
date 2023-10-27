import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const DropdownCurrency = () => {
    const { dispatch, currency } = useContext(AppContext);

    const [ newCurrency, setNewCurrency ] = useState('');

    return (
        <div className='input-group'>
            <span className='input-group-text'>{currency}</span>
            <button className='btn btn-secondary dropdown-toggle' type="button" data-bs-toggle="dropdown">Currency</button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item">$ Dollar</a></li>
                <li><a class="dropdown-item">£ Pound</a></li>
                <li><a class="dropdown-item">€ Euro</a></li>
                <li><a class="dropdown-item">₹ Ruppee</a></li>
            </ul>
        </div>
    );
};
export default DropdownCurrency;
