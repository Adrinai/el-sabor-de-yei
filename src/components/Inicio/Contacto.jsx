import React from 'react'
import Navbar from "../../components/navbar/Navbar";
import Logo from "../../components/logo/Logo";
import Footer from "../../components/footer/Footer";
import Formulario from "../../components/formulario/Formulario";
import "../../components/formulario/Formulario.css";
import InfoContacto from '../../components/inforcontacto/InfoContacto';
// import "../components/InfoContactoStyle.css"
import "../Contacto.css"


export default function Contacto() {
    
    
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
       <div className='formulario'>
        <Formulario/>
         </div>
         <div className='capa'>
        <div>
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
