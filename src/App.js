import React from 'react';
import './App.css';

import ProductList from './components/ProductList';
import CartList from './components/CartList';

function App() {
  return (
    <div className="App">
      <div className="container-row">
        <ProductList/>
        <CartList/>
      </div>
    </div>
  );
}

export default App;
