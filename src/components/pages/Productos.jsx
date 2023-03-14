import React from 'react';
import CarruselCumple from "../carrusel/CarruselCumple";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Logo from "../logo/Logo";


export default function Productos() {
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
       <div className='titulo'>
            <h1>Productos</h1>
          </div>
      <div className='fotos'>
        <div>
        <CarruselCumple/>
        </div>
       </div>
    <div className="footer">
          <Footer />
      </div>
  </div> 
  </div> 
  )
}
