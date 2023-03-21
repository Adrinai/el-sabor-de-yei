import React from "react";
import Logo from "../logo/Logo";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import { Container, Row, Col } from 'react-bootstrap';
import fondo from '../../assets/img/fondo.jpg';

export default function Inicio() {
  return (
    <Container fluid>
      <style>
      {`
      .cabecera {
        margin-bottom: 50px; 
      }
      .footer{
        width:100%;
        margin: 0;
        padding:0;
      }
      .body{
        height: 70vh;
      }
      .contacto-container {
        position: relative;
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
      `}
      </style>
    <div className="container">
    <div className="background-imagen" style={{ backgroundImage: `url(${fondo})` }} />
  <Row className="image-row">
  <Row className='cabecera'>
        <Col>
          <Logo/><Navbar/>
        </Col>
  </Row>
      <Row className="body">
        <Col>
          
        </Col>
        
      </Row>
      <Row className="footer">
      <Footer/>
      </Row>
  </Row>
  </div>
   </Container> 
  );
}
