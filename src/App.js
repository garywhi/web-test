import { React, useRef } from 'react';
import './App.css';
import { HashRouter, Route, Routes, Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  // const homeRef = useRef(null);
  // const projectRef = useRef(null);
  // const contactRef = useRef(null);

  return (
    // <Router>
    //   <Navbar homeRef={homeRef} projectRef={projectRef} contactRef={contactRef} />
    //   <About homeRef={homeRef} />
    //   <Projects projectRef={projectRef} />
    // </Router>
    // BrowserRouter basename={window.location.pathname || ''}
    <HashRouter basename={window.Location.pathname || ''}>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/projects' exact element={<Projects />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
