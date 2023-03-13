import React from 'react'
import CarruselEjemplo from '../carrusel/CarruselEjemplo';

import Navbar from '../navbar/Navbar';
import Logo from '../logo/Logo';

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
               
        <CarruselEjemplo/>
    </div>
    
  )
}

export default Cursos