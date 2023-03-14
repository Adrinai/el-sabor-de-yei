import React from 'react'
import CarruselEjemplo from '../carrusel/CarruselEjemplo';
import Footer from "../footer/Footer";

import Navbar from '../navbar/Navbar';
import Logo from '../logo/Logo';

const Cursos = () => {
  return (
    
    <div className="portada">
    <div className="cabecera">
      <div>
        <Logo />
          </div>
          <div>
        <Navbar />
      </div>
      </div>
       <div className="body">
       <CarruselEjemplo/>
       </div>
    <div className="footer">
          <Footer />
      </div>
  </div>  
  )
}

export default Cursos