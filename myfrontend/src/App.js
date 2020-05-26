import React from 'react';
import logo from './logo.svg';
import './App.css';
import Weather from './Weather';
import data from './data';
import Home from './screen/Home';
import Product from './screen/Product';
import { BrowserRouter,Route } from 'react-router-dom';
import Demo from './screen/Demo';

function App() {
  return (
    <BrowserRouter>

    <div className="grid-container">

      <header className="header">
        <div className="header-l1">
          <a href="/"> Shop</a>

        </div>

        <div className="header-link">
          
          <a href="#">Sign In</a>

        </div>

      </header>



      <Route path="/" exact={true} component={Home} />
      <Route path="/product/:id"  component={Product} />

      <Demo/>


    </div>
    </BrowserRouter>


  );
}

export default App;
