import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SearchSection from './components/SearchSection';
import Current from './components/Current';
import Block from './components/SingleBlock';
import TransactionBox from './components/TransactionBox';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Header/>
    <SearchSection/>
    <Current/>
    <div>
      <TransactionBox/>
      <TransactionBox/>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
