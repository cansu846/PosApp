import './App.css';
import React from 'react';
import HomePage from './pages/HomePage';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import CartPage from './pages/CartPage';
import Header from './components/header/Header';

function App() {

  return (
    <>
    <Header />
 <BrowserRouter>
    <Routes >
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/" element={<HomePage />}>
        {/* <Route index element={<RecentActivity />} /> */}
        {/* <Route path="/cart/" element={<CartPage />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
