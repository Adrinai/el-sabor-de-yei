import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './productos.css';
import Navbar from "../navbar/Navbar";
import Logo from "../logo/Logo";
import Footer from "../footer/Footer";
import "../pages/MainStyle.scss";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

 

function Productos() {
  const productos = [
    {
      id: 1,
      nombre: "Torta de Vainilla y Chantilly",
      src: require('../../assets/img/torta de vainilla.jpeg'),
      descripcion: "Un delicioso pastel de founda y vainilla.",
      precio: 15.99,
    },
    {
      id: 2,
      nombre: "pastel papa Noel",
      src: require('../../assets/img/tartapapanoel.jpeg'),
      descripcion: "Unas ricas empanadas de carne especiadas.",
      precio: 2.99,
    },
    {
      id: 3,
      nombre: "Tarta de chocolate",
      src: require('../../assets/img/tartachoco.jpeg'),
      descripcion: "tarta de chocolate",
      precio: 7.99,
    },
    {
      id: 4,
      nombre: "Pinchos",
      src: require('../../assets/img/pinchos.jpeg'),
      descripcion: "pinchos de carne",
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
        <Col>
    <div>
      <h1 className="titulo-p">Productos</h1>
      <div className="row">
        {productos.map((productos) => (
          <div className="col-md-4" key={productos.id}>
            <div className="card">
              <img className="card-img-top" src={productos.src} alt={productos.nombre} />
              <div className="card-body">
                <h5 className="card-title">{productos.nombre}</h5>
                <p className="card-text">{productos.descripcion}</p>
                <p className="card-text">${productos.precio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </Col>
    </Row> 
    <Footer/>
   </Container>
 
  );
}

export default Productos;
