import React from 'react';
import './App.css';
import Header from './components/GlobalComponents/Header';
import Footer from './components/GlobalComponents/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Address from './pages/Address';

function App() {
  return (
    <div className="App">
    <Header/>
       <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/address" element={<Address />} />
      </Routes>
   
    <Footer/>
    </div>
  );
}

export default App;
