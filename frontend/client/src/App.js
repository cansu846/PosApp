import './App.css';
import React from 'react';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartPage from './pages/CartPage';
import Header from './components/header/Header';
import InvoicePage from './pages/InvoicePage';

function App() {

  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes >
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/invoice" element={<InvoicePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
