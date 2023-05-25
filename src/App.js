import React from 'react';
import './App.css';
import Home from './routes/home/Home';
import { Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </div>
  );
}

export default App;
