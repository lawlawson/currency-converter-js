import React, { useEffect, useState } from 'react';

import AmountInput from './components/AmountInput';
import Currencies from './components/Currencies';
import Convert from './components/Convert';
import './App.css';

const BASE_URL = 'https://api.exchangerate-api.com/v4/latest/GBP';

const App = () => {
  const [currencyOptions, setCurrencyOptions] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
      });
  }, []);

  return (
    <div className='container'>
      <h1 className='display-1 text-center'>Currency Converter</h1>
      <br />
      <AmountInput />
      <br />
      <Currencies currencyOptions={currencyOptions} />
      <br />
      <Currencies currencyOptions={currencyOptions} />
      <br />
      <Convert />
    </div>
  );
};

export default App;
