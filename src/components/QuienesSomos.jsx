import React from 'react'
import Navbar from "./Navbar";
import Logo from "./Logo";
import Footer from "./Footer";
import "./Styles/MainStyle.css";
import perfil from '../assets/img/perfil 4.jpeg';
import "./QuieneStyle.css";
import { Grid, GridItem } from '@chakra-ui/react';
import { Flex, Spacer } from '@chakra-ui/react';

export default function QuienesSomos() {
  return (
    
   
    <div className="portada">
      <div>
        <Navbar />
        <Logo />
      </div>
      
      <div className='capa'> 
      <Grid templateColumns='repeat(5, 1fr)' gap={4}>
  <GridItem colSpan={2} h='10'  />
  <GridItem colStart={4} colEnd={6} h='10'  />
</Grid>  
        <img className='foto'
        src={perfil}/>
        <div className='historia'>
      <p>
      El sabor de yei conocido en instagram como @el sabor.ve , es una empresa familiar que se encarga de elaborar tortas temáticas panes dulces pasapalos, Brownies, tortas 3D en fondant y mucho más.
    Fue fundada en julio del 2018 pero es estando en  Pandemia dónde se  dio a conocer mucho más e incluso internacionalmente, ya que familiares que viven fuera de Venezuela nos contactan para mandar hacer un agasajo a sus seres queridos que están aún en nuestro país.   Mireya Viana , Nathalia Jalón y Gabriel jalón  son las personas que trabajan en el sabor de yei 
    El origen del nombre se debe a que es como suelen llamar a Mireya cuando era pequeña, así que ella decidió incluirlo en el  emprendimiento.
     Está ubicado en Venezuela exactamente en Cua , estado Miranda en su propio hogar.
     Mireya y Nathalia poseen conocimientos de repostería panadería ventas y finanzas por lo que esta idea le genera un negocio . 
    Gabriel se encarga del delivery y deL amasado de las pizzas y panes .
    </p>
   </div> 
    
    </div>
    
      <div className="footer">
        <div>
        <Footer />
        </div>
      </div>
    </div>
    
  );
}
