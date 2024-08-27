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
import MyPage from './common/view/MyPage';

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
        <Route path="/Login" element={<Login />} />
        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/Singup" element={<SingUp />} />
        <Route path="/Schedule" element={<Schedule />} />
        <Route path="/Notice" element={<Notice />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;