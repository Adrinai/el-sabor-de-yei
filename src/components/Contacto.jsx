import React from 'react'
import Navbar from "./Navbar";
import Logo from "./Logo";
import Footer from "./Footer";
import Formulario from "./Formulario";

export default function Contacto() {
    
    
  return (
    <div className="portada">
      <div>
        <Navbar />
        <Logo />
      </div>
      <div className='formulario'>
        <Formulario/>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  )
  }
