// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Header from './components/Header/header';
import Home from './components/Home/Home';
import Catalog from './components/Catalog/catalog';
import Item from './components/Item/Item';
import Footer from './components/Footer/footer'; 
import { BookProvider } from './components/BookContext';

const Cart = () => {
  return (
    <div>
      <h2>Ваш кошик</h2>
      <p>Кошик поки що порожній.</p>
    </div>
  );
};

const App = () => {
  return (
    <BookProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/item/:id" element={<Item />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </BookProvider>
  );
};

export default App;
