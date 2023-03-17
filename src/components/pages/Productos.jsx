import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './productos.css';
import Navbar from "../navbar/Navbar";
import Logo from "../logo/Logo";
import Footer from "../footer/Footer";
import perfil from "../../assets/img/perfil 4.jpg";
import "../pages/MainStyle.scss";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
 

function Productos() {
  const productos = [
    {
      id: 1,
      nombre: "Pastel de zanahoria",
      imagen: "/img/pastel-zanahoria.jpg",
      descripcion: "Un delicioso pastel de zanahoria con nueces.",
      precio: 15.99,
    },
    {
      id: 2,
      nombre: "Empanadas de carne",
      imagen: "/img/empanadas-carne.jpg",
      descripcion: "Unas ricas empanadas de carne especiadas.",
      precio: 2.99,
    },
    {
      id: 3,
      nombre: "Arepa de chicharrón",
      imagen: "/img/arepa-chicharron.jpg",
      descripcion: "Una arepa rellena de chicharrón y queso.",
      precio: 7.99,
    },
  ];

  return (
    <Container fluid>
      <Row>
        <Col>
          <Logo/><Navbar/>
        </Col>
      </Row>
      <Row>
        <Col></Col>
    <div>
      <h1>Productos</h1>
      <div className="row">
        {productos.map((producto) => (
          <div className="col-md-4" key={producto.id}>
            <div className="card">
              <img className="card-img-top" src={producto.imagen} alt={producto.nombre} />
              <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">{producto.descripcion}</p>
                <p className="card-text">${producto.precio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </Row> 
   </Container>
  );
}

export default Productos;
