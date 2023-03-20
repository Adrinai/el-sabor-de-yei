import React from 'react'
import Footer from "../footer/Footer";
import Navbar from '../navbar/Navbar';
import Logo from '../logo/Logo';
import Carrusel3d from '../carrusel/Carrusel3d';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const Cursos = () => {
  return (
    
    <Container fluid>
    <Row>
      <Col>
        <Logo/><Navbar/>
      </Col>
    </Row>
    <Row>
        <Col>
          <Carrusel3d/>
        </Col>
    </Row> 
    <Footer/>
   </Container>
 
  )
}

export default Cursos