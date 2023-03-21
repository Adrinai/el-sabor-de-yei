import React from 'react';
import fondo from '../../assets/img/fondo.jpg';
import Navbar from '../../components/navbar/Navbar';
import Logo from '../../components/logo/Logo';
import Footer from '../../components/footer/Footer';
import Formulario from '../../components/formulario/Formulario';
import InfoContacto from '../../components/inforcontacto/InfoContacto';
import { Container, Row, Col } from 'react-bootstrap';



export default function Contacto() {
  return (
    <Container fluid>
      <style>
        {`
          .contacto-container {
            position: relative;
          }
          
          .background-image {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            z-index: -1;
            background-size: cover;
            opacity: 0.5;
          }
          
          .logo {
            margin-top: 10px;
          }
          .cabecera{
            margin bootom:10px;
          }
          
          
          @media (max-width: 768px) {
            .formulario,
            .info-contacto {
              margin-top: 50px;
            }
          }
          
        `}
      </style>
      <div className="contacto-container">
      <div className="background-image" style={{ backgroundImage: `url(${fondo})` }} />
      <Row className="image-row">
      <Row className='cabecera'>
        <Col>
          <Logo/><Navbar/>
        </Col>
      </Row>
      <Row className="form-row">
        <Col>
          <Formulario />
        </Col>
        <Col>
          <InfoContacto />
        </Col>
      </Row>
      <Footer/>
      </Row>
      </div>
    </Container>
    
  );
}


