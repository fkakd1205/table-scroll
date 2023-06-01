import React from 'react';
import './App.css';
import Home from './routes/home/Home';
import { Route, Router, Routes } from 'react-router-dom';
import HomeV2 from './routes/home/HomeV2';
import HomeV3 from './routes/home/HomeV3';
import HomeV4 from './routes/home/HomeV4';
import HomeV5 from './routes/home/HomeV5';

function App() {
  return (
    <div className="App">
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/" element={<HomeV2 />} /> */}
          {/* <Route path="/" element={<HomeV3 />} /> */}
          {/* <Route path="/" element={<HomeV4 />} /> */}
          <Route path="/" element={<HomeV5 />} />
        </Routes>
    </div>
  );
}

export default App;
