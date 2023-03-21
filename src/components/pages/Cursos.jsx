import React from 'react'
import Footer from "../footer/Footer";
import Navbar from '../navbar/Navbar';
import Logo from '../logo/Logo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CarruselCumple from "../carrusel/CarruselCumple"



const Cursos = () => {
  return (
    
    <Container fluid>
      <style>
        {`
        .carousel-control-prev,
        .carousel-control-next {
          width: 5%;
        }
        
        .carousel-control-prev-icon,
        .carousel-control-next-icon {
          width: 100%;
          height: 100%;
        }
        
        .carousel-control-prev {
          left: 0;
        }
        
        .carousel-control-next {
          right: 0;
        }
        
        `}
      </style>
    <Row>
      <Col>
        <Logo/><Navbar/>
      </Col>
    </Row>
    <Row>
        <Col>
          <CarruselCumple/>
        </Col>
    </Row> 
    <Footer/>
   </Container>
 
  )
}

export default Cursos