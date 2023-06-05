import React from 'react';
import './App.css';
import Home from './routes/home/Home';
import { Route, Router, Routes } from 'react-router-dom';
import HomeV2 from './routes/home/HomeV2';
import HomeV3 from './routes/home/HomeV3';
import HomeV4 from './routes/home/HomeV4';
import HomeV5 from './routes/home/HomeV5';
import HomeV6 from './routes/home/HomeV6';
import HomeV7 from './routes/home/HomeV7';
import HomeV8 from './routes/home/HomeV8';
import HomeV9 from './routes/home/HomeV9';
import HomeV10 from './routes/home/HomeV10';
import HomeV11 from './routes/home/HomeV11';
import HomeV12 from './routes/home/HomeV12';
import HomeV13 from './routes/home/HomeV13';

function App() {
  return (
    <div className="App">
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/" element={<HomeV2 />} /> */}
          {/* <Route path="/" element={<HomeV3 />} /> */}
          {/* <Route path="/" element={<HomeV4 />} /> */}
          {/* <Route path="/" element={<HomeV5 />} /> */}
          {/* <Route path="/" element={<HomeV6 />} /> */}
          {/* <Route path="/" element={<HomeV7 />} /> */}
          {/* <Route path="/" element={<HomeV8 />} /> */}
          {/* <Route path="/" element={<HomeV9 />} /> */}
          {/* <Route path="/" element={<HomeV10 />} /> */}
          {/* <Route path="/" element={<HomeV11 />} /> */}
          {/* <Route path="/" element={<HomeV12 />} /> */}
          <Route path="/" element={<HomeV13 />} />
        </Routes>
    </div>
  );
}

export default App;
