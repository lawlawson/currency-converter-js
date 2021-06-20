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
  const [convertedAmount, setConvertedAmount] = useState();
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
        const initialCurrency = Object.keys(data.rates)[7];
        setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
        setFromCurrency(data.base);
        setToCurrency(initialCurrency);
        setExchangeRate(data.rates[initialCurrency]);
      });
  }, []);

  const convert = () => {
    setConvertedAmount(exchangeRate * amount);
  };

  return (
    <div className='container'>
      <h1 className='display-1 text-center'>Currency Converter</h1>
      <br />
      <AmountInput amount={amount} setAmount={setAmount} />
      <br />
      <Currencies
        currencyOptions={currencyOptions}
        selectedCurrency={fromCurrency}
        onChangeCurrency={setFromCurrency}
        amount={fromAmount}
      />
      <br />
      <Currencies
        currencyOptions={currencyOptions}
        selectedCurrency={toCurrency}
        onChangeCurrency={setToCurrency}
        amount={toAmount}
      />
      <br />
      {convertedAmount}
      <Convert onClick={convert} />
    </div>
  );
};

export default App;
