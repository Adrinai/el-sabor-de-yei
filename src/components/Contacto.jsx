import React from 'react'
import Navbar from "./Navbar";
import Logo from "./Logo";
import Footer from "./Footer";
import Formulario from "./Formulario";
import "../components/Formulario.css"
import InfoContacto from './InfoContacto';
import "../components/InfoContactoStyle.css"
import "../components/Contacto.css"

export default function Contacto() {
    
    
  return (
    
    <div className="portada">
      <div>
      <div>
        <Navbar />
        {/* <Logo /> */}
      </div>
      <div className='contenedor'>
      <div className='formulario'>
        <Formulario/>
      </div>
      
      <div className='info'>
        
       <InfoContacto/>
      </div>
      </div>
      
    </div>
      <div className="footer">
        <Footer />
      </div>
    </div> 
  )
  }
