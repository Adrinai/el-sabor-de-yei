import React from 'react';
import Navbar from "../navbar/Navbar";
import Carrusel from "../carrusel/CarruselCumple"
import Footer from "../footer/Footer";
import Logo from "../logo/Logo";


export default function Productos() {
  return (
    <div className='phater'>
      <div className="cabecera">
        <Logo />
       <Navbar />
    </div>
      <div className="wrapper">
        <div className='card mt-5 mx-auto w-25 shadow-lg'>
            <Carrusel />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}