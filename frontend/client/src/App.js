import './App.css';
import React from 'react';
import HomePage from './pages/HomePage';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import CartPage from './pages/CartPage';
import Header from './components/header/Header';
import InvoicePage from './pages/InvoicePage';
import CustomerPage from './pages/CustomerPage';
import StatisticPage from './pages/StatisticPage';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import ProductPage from './pages/ProductPage';

function App() {

  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes >
          <Route
            path="/"
            element={
              <RouteControl>
                <HomePage />
              </RouteControl>
            }
          />
          <Route
            path="/cart"
            element={
              <RouteControl>
                <CartPage />
              </RouteControl>
            }
          />
          <Route
            path="/invoice"
            element={
              <RouteControl>
                <InvoicePage />
              </RouteControl>
            }
          />
          <Route
            path="/customer"
            element={
              <RouteControl>
                <CustomerPage />
              </RouteControl>
            }
          />
          <Route
            path="/statistic"
            element={
              <RouteControl>
                <StatisticPage />
              </RouteControl>
            }
          />
          <Route
            path="/product"
            element={
              <RouteControl>
                <ProductPage />
              </RouteControl>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

export const RouteControl = ({ children }) => {
  if (localStorage.getItem("posUser")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};