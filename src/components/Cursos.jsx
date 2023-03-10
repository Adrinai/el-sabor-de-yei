import React from 'react'
import CarruselEjemplo from './CarruselEjemplo';
import Navbar from './Navbar';
import Logo from './Logo';

const Cursos = () => {
  return (
    <div className='carrul'>
    <div className='cursos'>
          <div>
          <Logo />
          </div>
          <div>
          <Navbar />
          </div>
      </div>
    <div>
        <CarruselEjemplo/>
    </div>
    </div>
  )
}

export default Cursos