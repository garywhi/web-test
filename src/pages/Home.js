import { React, useRef } from 'react'
// import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Projects from '../components/Projects'

export default function Home() {

  return (
    <>
    {/* <Navbar /> */}
    {/*<Hero
      cName='hero'
      heroImg='https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80'
      title='Gary Wong'
      position='Software Engineer'
      text=''
  />*/}
    {/* <About />
    <Project ref={projectRef} /> */}
    
    {/* <Navbar homeRef={homeRef} projectRef={projectRef} contactRef={contactRef} /> */}
    <Navbar />
    {/* <About homeRef={homeRef} />
    <Projects projectRef={projectRef} /> */}
    
    </>
    
  )
}
