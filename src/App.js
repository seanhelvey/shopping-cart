import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import CartItems from "./components/CartItems"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <CartItems/>
        <Footer copyright={2016}/>
      </div>
    );
  }
}

export default App;
