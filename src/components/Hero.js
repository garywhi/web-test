import React from 'react'
import './Hero.css';
import * as Icons from 'react-icons/fa';
import { Link } from 'react-router-dom';
/*** <p>{props.text}</p> ***/
export default function Hero(props) {
  return (
    <>
        <div className={props.cName}>
            <img alt='HeroImg' src={props.heroImg} />
        </div>
        <div className='hero-text'>
            <h1>{props.title}</h1>
            <h2>{props.position}</h2>
            <div className='media-links'>
              <Link to="https://www.linkedin.com/in/gary-wong33/" target='_blank' className='media-link'><Icons.FaLinkedin /></Link>
              <Link to="https://github.com/garywhi" target='_blank' className='media-link'><Icons.FaGithub /></Link>
            </div>
        </div>
    </>
  )
}
