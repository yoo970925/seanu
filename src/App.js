import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './common/css/App.css';
import Main from './common/view/Main';
import Login from './common/view/Login';
import SingUp from './common/view/SingUp';
import Schedule from './common/view/Schedule';
import Notice from './common/view/Notice';
import Header from './common/view/Header';
import Nav from './common/view/Nav';

function App() {
  const [selectedItem, setSelectedItem] = useState('default');

  const handleSidebarSelection = (theme) => {
    setSelectedItem(theme);
  };

  return (
    <BrowserRouter>
    <div className={`App ${selectedItem }`}>
      <Header />
      <Nav onSelectItem={handleSidebarSelection} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<SingUp />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/notice" element={<Notice />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;