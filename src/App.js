import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About';
import Home from './component/Home';
import Nav from './component/Nav';
import User from './component/User';
import Users from './component/Users';

function App() {
  const [itemId, setItemId] = useState();
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/users" element={<Users setItemId={setItemId} />} />
            <Route path={`/users/:${itemId}`} element={<User itemId={itemId} setItemId={setItemId} />} />
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
