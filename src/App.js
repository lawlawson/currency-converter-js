import React, { useEffect, useState } from 'react';

import AmountInput from './components/AmountInput';
import Currencies from './components/Currencies';
import Convert from './components/Convert';
import './App.css';

const App = () => {
  return (
    <div className='container'>
      <h1 className='display-1 text-center'>Currency Converter</h1>
      <br />
      <AmountInput />
      <br />
      <Currencies />
      <br />
      <Currencies />
      <br />
      <Convert />
    </div>
  );
};

export default App;
