import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './common/Main';
import About from './common/About';
import Content from './common/Content';
import Header from './common/Header';
import Nav from './common/Nav';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/content" element={<Content />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
