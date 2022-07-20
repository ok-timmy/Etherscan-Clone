import React from 'react';
import './App.css';
import Header from './components/Header';
import SearchSection from './components/SearchSection';
import Current from './components/Current';
// import Block from './components/SingleBlock';
import Footer from './components/Footer';
import TransactionAndBlockSection from './components/TransactionAndBlockSection';

function App() {
  return (
    <div className="App">
    <Header/>
    <SearchSection/>
    <div style={{backgroundColor: '#FCFCFD', position: 'relative', minHeight:'20rem', paddingBottom:'10rem', margin:'auto 1rem'}}>
    <Current/>
    </div>
   <TransactionAndBlockSection/>
    <Footer/>
    </div>
  );
}

export default App;
