import './App.css';
import React from 'react';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartPage from './pages/CartPage';
import Header from './components/header/Header';
import InvoicePage from './pages/InvoicePage';
import CustomerPage from './pages/CustomerPage';
import StatisticPage from './pages/StatisticPage';

function App() {

  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes >
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/invoice" element={<InvoicePage />} />
          <Route path="/customer" element={<CustomerPage />} />
          <Route path="/statistic" element={<StatisticPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
