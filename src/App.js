import './common/css/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './common/view/Main';
import Login from './common/view/Login';
import SingUp from './common/view/SingUp';
import Notice1 from './common/view/notice1';
import Notice2 from './common/view/notice2';
import Header from './common/view/Header';
import Nav from './common/view/Nav';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Nav />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<SingUp />} />
        <Route path="/notice1" element={<Notice1 />} />
        <Route path="/notice2" element={<Notice2 />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
