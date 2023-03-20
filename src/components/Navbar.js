import React, { useRef, useState, useEffect, forwardRef } from 'react';
//import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";
import './Navbar.css';
import About from '../components/About'
import Projects from '../components/Projects'

const Navbar = () => {
    const [mobile, setMobile] = useState(false);
    const [navWindow, setNavWindow] = useState(false);
  
    // const form = useRef();
    // const homeRef = useRef(false);
    // const section = useRef(false);
    // const contactRef = useRef(false);
    const homeRef = useRef(false);
    const projectRef = useRef(false);
    const contactRef = useRef(false);
  
    useEffect(() => {
      if(window.innerWidth < 720) {
          setMobile(true);
      }
    }, []);
  
    useEffect(() => {
      const handleResize = () => {
          if(window.innerWidth < 720) {
              setMobile(true);
          } else {
              setMobile(false);
              setNavWindow(false);
          }
      };
  
      window.addEventListener("resize", handleResize)
  
      return () => {
          window.removeEventListener("resize", handleResize);
      };
    }, [])
  
    const handleClick = (ref) => {
      ref.current?.scrollIntoView({ behavior: 'smooth' });
      setNavWindow(false);
    };

  return (
    <>
        <nav className='navigation'>
        <div className='name-logo' onClick={ () => handleClick(homeRef) }>黃</div>
        {!mobile && <ul className='navi-items'>
          <li className='navi-item' onClick={ () => handleClick(homeRef) }>About</li>
          <li className='navi-item' onClick={ () => handleClick(projectRef) }>Projects</li>
          <li className='navi-item' onClick={ () => handleClick(contactRef) }>Contact</li>
        </ul>
        }
        {mobile && (
          navWindow ? (
            <div className='nav-bars' onClick={ () => { setNavWindow(!navWindow) } }><FaTimes /></div>
          ) : (
            <div className='nav-bars' onClick={ () => { setNavWindow(!navWindow) } }><FaBars /></div>
          )
        )}
      </nav>
      
      {mobile && (
        navWindow ? (
          <>
            <div style={ {height: '4rem'}}></div>
            <div className='navi-menu'>
            <ul className='mini-navi-items'>
              <li className='mini-navi-item' onClick={ () => { setNavWindow(false); handleClick(homeRef) } }>About</li>
              <li className='mini-navi-item' onClick={ () => { setNavWindow(false); handleClick(projectRef) } }>Projects</li>
              <li className='mini-navi-item' onClick={ () => { setNavWindow(false); handleClick(contactRef) } }style={ {color: '#dcb481'} }>Contact</li>
            </ul>
          </div>
          </>
          
        ) : (
          <></>
        )
      )}

      <div className='navi-pad'  style={ {height: '4rem', scrollMargin: '4rem'}}></div>
      <About ref={homeRef} />
      <Projects ref={projectRef} />
    </>
  );
};

export default Navbar;