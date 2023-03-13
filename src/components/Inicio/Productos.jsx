import React from 'react';
import CarruselCumple from "../carrusel/CarruselCumple";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "../Productos.css";


export default function Productos() {
  return (
  <div className='producto'>

      <div className='menu'>
        <Navbar/>
      </div>
          <div className='titulo'>
            <h1>Productos</h1>
          </div>
      <div className='fotos'>
        <div>
        <CarruselCumple/>
        </div>
        {/* <div>
        <CarruselFoundan/>
        </div>
        <div>
          <CarruselSalados/>
        </div> */}
      </div>
      <div className='redes'>
        <Footer/>
      </div>
</div>

  )
}
