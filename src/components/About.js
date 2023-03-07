import React from 'react';
import './About.css';
import { SiReact, SiMysql, SiMicrosoftsqlserver, SiJava, SiJavascript } from "react-icons/si";
import { skills } from './TechSkills';

export default function About() {
  return (
    <> 
        <div>
            <h1 className='about-title'>About me</h1>
            <p className='about-text'>I'm a software engineer with a passion for solving puzzles. I've been enamored by technology since I was a kid and it has been a big part of my life.</p>
            <p className='about-text'>I enjoy playing video games and checking out gadgets.</p>
        </div>
        <div>
            <h1 className='skills-title'>Technical Skills</h1>
            <ul className='skill-items'>
                {skills.map((skill) => {
                    return (
                        <li className={skills.cName}>
                            {skill.icon}
                            {skill.skill}
                        </li>
                    );
                })}
            </ul>
        </div>
        
    </>
  )
}
