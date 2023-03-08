import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <BrowserRouter basename={window.location.pathname || ''}>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/projects' exact element={<Projects />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
