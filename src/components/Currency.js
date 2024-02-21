import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const {dispatch, currency } = useContext(AppContext);
  const [newCurrency, setNewCurrency] = useState(currency);

    const changeCurrency = (val)=>{
            setNewCurrency(val);

            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    

  return (
    <div className='alert alert-secondary'>
    <span style={{
            backgroundColor: 'lightgreen',
            padding: 2,
            color: 'white',
        }}>Currency ( </span>
    <select
        name="Currency"
        id="Currency"
        value={newCurrency}
        onChange={(event) => changeCurrency(event.target.value)}
        style={{
            backgroundColor: 'lightgreen',
            borderColor: 'lightgreen',
            marginLeft: -5,
            marginRight: -5,
            padding: 0,
            color: 'white',
        }}
        >
        <option value="$" style={{ backgroundColor: 'lightgreen', color: 'black' }}>
            $ Dollar
        </option>
        <option value="£" style={{ backgroundColor: 'lightgreen', color: 'black' }}>
            £ Pound
        </option>
        <option value="€" style={{ backgroundColor: 'lightgreen', color: 'black' }}>
            € Euro
        </option>
        <option value="₹" style={{ backgroundColor: 'lightgreen', color: 'black' }}>
            ₹ Ruppee
        </option>
    </select>
    <span style={{
            backgroundColor: 'lightgreen',
            padding: 2,
            color: 'white',
        }}>) </span>
    </div>

    
    );
};

export default Currency;