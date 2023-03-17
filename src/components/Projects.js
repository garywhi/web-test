import React from 'react'
import sampleImg from '../assets/coding_laptop.jpg'

export default function Projects() {
  return (
    <>
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
    </>
  )
}
