import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const CURRENCY_TEXTS = {
    "$": '$ Dollar',
    "£": '£ Pound',
    "€": '€ Euro',
    "₹": '₹ Ruppee',
};

const DropdownCurrency = () => {
    const { dispatch, currency } = useContext(AppContext);

    const [ newCurrency, setNewCurrency ] = useState(currency);

    const [ currencyText, setCurrencyText ] = useState('Currency ('.concat(CURRENCY_TEXTS[currency].concat(')')));

    const changeCurrency = (event) => {
        setNewCurrency(event.target.value);
        setCurrencyText('Currency (' + CURRENCY_TEXTS[event.target.value] + ')');
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });
    };

    return (
        <div class="dropdown">
            <button class="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                {currencyText}
            </button>
            <ul class="dropdown-menu text-bg-success">
                <option onClick={changeCurrency} value="$">$ Dollar</option>
                <option onClick={changeCurrency} value="£">£ Pound</option>
                <option onClick={changeCurrency} value="€">€ Euro</option>
                <option onClick={changeCurrency} value="₹">₹ Ruppee</option>
            </ul>
        </div>
    );
};
export default DropdownCurrency;
