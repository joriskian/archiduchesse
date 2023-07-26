import React, { useState } from 'react';
// eslint-disable-next-line
import { Route, Routes, HashRouter } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Account from './pages/users/Account';
import Register from './pages/users/Register';
import Login from './pages/users/Login';
import Profile from './pages/users/Profile';
import Items from './pages/items/Items';
import Item from './pages/items/Item';
import Navbar from './components/Navbar';
import { hasAuthenticated } from './services/AuthApi';
import Authentication from './contexts/Auth';

function App() {
  // creation du state
  // eslint-disable-next-line
  const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated());
  return (
    // recupere le context
    <hasAuthenticated value={{ isAuthenticated }}>
      <HashRouter>
        <div className="container-fluid">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/items" element={<Items />} />
            <Route exact path="/item/:id" element={<Item />} />
            <Route path="/account" element={<Account />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </HashRouter>
    </hasAuthenticated>
  );
}

export default App;
