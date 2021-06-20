import React, { useEffect, useState } from 'react';

import AmountInput from './components/AmountInput';
import Currencies from './components/Currencies';
import Convert from './components/Convert';
import './App.css';

const BASE_URL = 'https://api.exchangerate-api.com/v4/latest/GBP';

const App = () => {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);
  const [exchangeRate, setExchangeRate] = useState();
  console.log(exchangeRate);

  let toAmount, fromAmount;
  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        const initialCurrency = Object.keys(data.rates)[0];
        setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
        setFromCurrency(data.base);
        setToCurrency(initialCurrency);
        setExchangeRate(data.rates[initialCurrency]);
      });
  }, []);

  return (
    <div className='container'>
      <h1 className='display-1 text-center'>Currency Converter</h1>
      <br />
      <AmountInput />
      <br />
      <Currencies
        currencyOptions={currencyOptions}
        selectedCurrency={fromCurrency}
        onChangeCurrency={(e) => setToCurrency(e.target.value)}
        amount={fromAmount}
      />
      <br />
      <Currencies
        currencyOptions={currencyOptions}
        selectedCurrency={toCurrency}
        onChangeCurrency={(e) => setToCurrency(e.target.value)}
        amount={toAmount}
      />
      <br />
      <Convert />
    </div>
  );
};

export default App;
