import React from 'react';
import './App.css';
// eslint-disable-next-line
import { Route, Routes, HashRouter } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Account from './pages/users/Account';
import Register from './pages/users/Register';
import Login from './pages/users/Login';
import Profile from './pages/users/Profile';
import Items from './pages/items/Items';
import Item from './pages/items/Item';

function App() {
  return (
    <HashRouter>
      <div className="container-fluid">
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/account" element={<Account />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/items" element={<Items />} />
          <Route exact path="/item/:id" element={<Item />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
