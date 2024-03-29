import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser'
import './Projects.css'
import { FaReact, FaJsSquare, FaJava, FaHtml5, FaCss3Alt, FaBars, FaTimes, FaCode, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiMysql, SiMicrosoftsqlserver } from "react-icons/si";
import sampleImg from '../assets/coding_laptop.jpg'

export default function Projects() {

  const [mobile, setMobile] = useState(false);
  const [navWindow, setNavWindow] = useState(false);

  const form = useRef();
  const homeRef = useRef(false);
  const section = useRef(false);
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
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start'});
    setNavWindow(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
      <nav className='navigation'>
        <div className='name-logo' onClick={ () => handleClick(homeRef) }>黃</div>
        {!mobile && <ul className='navi-items'>
          <li className='navi-item' onClick={ () => handleClick(homeRef) }>About</li>
          <li className='navi-item' onClick={ () => handleClick(section) }>Projects</li>
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
              <li className='mini-navi-item' onClick={ () => { setNavWindow(false); handleClick(section) } }>Projects</li>
              <li className='mini-navi-item' onClick={ () => { setNavWindow(false); handleClick(contactRef) } }style={ {color: '#dcb481'} }>Contact</li>
            </ul>
          </div>
          </>
          
        ) : (
          <></>
        )
      )}

      <div className='navi-pad' ref={homeRef} style={ {height: '4rem', scrollMargin: '4rem'}}></div>

      <div className='page-content' id='about'>
        <div className='intro'>
          <h1>Gary Wong</h1>
          <h2>Software Engineer</h2>
        </div>
        <div className='cta'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <button className='contact-btn'>Contact Me</button>
        </div>
      </div>

      <div className='my-skills' ref={section} id='projects'>
        <h1>Skills</h1>
        <div className='tech-stacks'>
          <div className='frontend'>
            <h2 style={{textAlign: "center"}}>Frontend</h2>
            <ul className='frontend-items'>
              <li className='frontend-item'><FaJsSquare /> Javascript</li>
              <li className='frontend-item'><FaReact /> React</li>
              <li className='frontend-item'><FaHtml5 /> HTML</li>
              <li className='frontend-item'><FaCss3Alt /> CSS</li>
            </ul>
          </div>
          <div className='backend'>
            <h2 style={{textAlign: "center"}}>Backend</h2>
            <ul className='backend-items'>
              <li className='backend-item'><SiMicrosoftsqlserver /> T-SQL</li>
              <li className='backend-item'><FaJava /> Java</li>
              <li className='backend-item'><SiMysql /> MySQL</li>
            </ul>
          </div>
        </div>
      </div>

      <h1 className='project-title'>Projects</h1>
      <div className='card-container'>
        <div className='card' style={{ width: '18rem'}}>
          <img className='cardImg' src={sampleImg} alt='sample' />
          <div className='card-body'>
            <h1 className='card-title'>Card title</h1>
            <p className='card-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className='card-btn'>Click on me</button>
          </div>
        </div>
        <div className='card' style={{ width: '18rem'}}>
          <img className='cardImg' src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbISwIP9EiX4JTFGldKHc8qaozNRPuIdO8rg&usqp=CAU'} alt='sample' />
          <div className='card-body'>
            <h1 className='card-title'>Card title</h1>
            <p className='card-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className='card-btn'>Click on me</button>
          </div>
        </div>
        <div className='card' style={{ width: '18rem'}}>
          <img className='cardImg' src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmvZEDCLiaOOIfx_vOLiJ5JDVF-PiFLGwvWg&usqp=CAU'} alt='sample' />
          <div className='card-body'>
            <h1 className='card-title'>Card title</h1>
            <p className='card-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className='card-btn'>Click on me</button>
          </div>
        </div>
        <div className='card' style={{ width: '18rem'}}>
          <img className='cardImg' src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXyo78AyvfET_CS3AyWfn3NOucYFCvTyDVfA&usqp=CAU'} alt='sample' />
          <div className='card-body'>
            <h1 className='card-title'>Card title</h1>
            <p className='card-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className='card-btn'>Click on me</button>
          </div>
        </div>
      </div>

      <h1 className='project-title' style={{ marginTop: '3rem'}}>Contact Me</h1>
      <div className='contact-section' ref={contactRef}>
        <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input className='form-field' type="text" name="user_name" />
        <label>Email</label>
        <input className='form-field' type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input className='contact-form-btn' type="submit" value="Send" />
        </form>
      </div>
      <div className='media-links'>
              <Link to="https://www.linkedin.com/in/gary-wong33/" target='_blank' className='media-link'><FaLinkedin /></Link>
              <Link to="https://github.com/garywhi" target='_blank' className='media-link'><FaGithub /></Link>
        </div>
    </>
  )
}
