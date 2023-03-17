import React from 'react';
import './About.css';
import { FaReact, FaJsSquare, FaJava, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiMysql, SiMicrosoftsqlserver } from "react-icons/si";

export default function About() {
  return (
    <> 
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
        /***add reference useRef */
      <div className='my-skills'  id='projects'>
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
        
    </>
  )
}
