import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from '../HomePage/HomePage';
import Cart from '../Cart/Cart';
import Track from '../Track/Track';
import Header from '../Header/Header';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/track" element={<Track />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
