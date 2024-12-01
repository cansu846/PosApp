import './App.css';
import React from 'react';
import Header from './components/header/Header';
import Category from './components/category/Category';

function App() {

  return (
    <div>
      <Header />
      <div className="content flex justify-between px-3 gap-3">

        <div className='category flex-2 overflow-auto 
      max-h-[calc(100vh-_-112px)]'>
          <Category />
        </div>
        <div className='product flex-[8]'>
          Product
        </div>
        <div className='cardtotal'>
          Card Total
        </div>
      </div>
    </div>
  );
}

export default App;
