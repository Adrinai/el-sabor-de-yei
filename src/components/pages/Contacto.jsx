import React from 'react'
import Navbar from "../../components/navbar/Navbar";
import Logo from "../../components/logo/Logo";
import Footer from "../../components/footer/Footer";
import Formulario from "../../components/formulario/Formulario";
import "../../components/formulario/Formulario.css";
import InfoContacto from '../../components/inforcontacto/InfoContacto';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import "../components/InfoContactoStyle.css"



export default function Contacto() {
    
    
  return (
    <Container fluid>
    <Row>
      <Col>
        <Logo/><Navbar/>
      </Col>
    </Row>
    <Row>
        <Col>
            <Formulario/>
        </Col>
    </Row> 

    <Row>
        <Col>
            <InfoContacto/>
        </Col>
    </Row> 
    <Footer/>
   </Container>
 
  );
  }
