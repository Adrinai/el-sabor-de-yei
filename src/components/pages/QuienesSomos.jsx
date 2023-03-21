import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import fondo from '../../assets/img/fondo.jpg';
import perfil from '../../assets/img/perfil 4.jpg';
import Logo from '../logo/Logo';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

export default function QuienesSomos() {
  return (  
    <Container fluid style={{ maxWidth: '100%', padding: '20px', margin: '0' }}>
    <style>
    {`
    .image-row {
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background-image: url(${fondo});
      background-size: cover;
      background-repeat: no-repeat;
    }
    .footer-row{
      width:100%;
      margin: 0;
      padding:0;
    }
    .background-imagen {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: -1;
      background-size: cover;
      opacity: 0.5;
    }
  
    @media (max-width: 767px) {
      .image-row p {
        font-size: 20px;
      }
    }
    `}
  </style>  
  <div className="container">
    <div className="background-imagen" style={{ backgroundImage: `url(${fondo})` }} />
  <Row className="image-row">
  <Row className='cabecera'>
      
            <Col>
              <Logo /><Navbar />
            </Col>
          </Row>
          
            <Col>
            <Image src={perfil} fluid style={{ float: 'left', marginRight: '20px', maxWidth: '50%', maxHeight: '50vh' }} />

              <p style={{ fontFamily: 'Arial', fontSize: '18px', textAlign: 'justify' }}>El sabor de yei conocido en instagram como @el sabor.ve , es una empresa familiar que se encarga de elaborar tortas temáticas panes dulces pasapalos, Brownies, tortas 3D en fondant y mucho más.
                Fue fundada en julio del 2018 pero es estando en  Pandemia dónde se  dio a conocer mucho más e incluso internacionalmente, ya que familiares que viven fuera de Venezuela nos contactan para mandar hacer un agasajo a sus seres queridos que están aún en nuestro país.   Mireya Viana , Nathalia Jalón y Gabriel jalón  son las personas que trabajan en el sabor de yei 
                El origen del nombre se debe a que es como suelen llamar a Mireya cuando era pequeña, así que ella decidió incluirlo en el  emprendimiento.
                 Está ubicado en Venezuela exactamente en Cua , estado Miranda en su propio hogar.
                Mireya y Nathalia poseen conocimientos de repostería panadería ventas y finanzas por lo que esta idea le genera un negocio . 
                Gabriel se encarga del delivery y deL amasado de las pizzas y panes .</p>
            </Col>
          
          <Row className="footer-row">
            <Col>
              <Footer />
            </Col>
          </Row>
        
          </Row>
          </div>
          </Container>
      
    
  );
}

