import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../navbar/Navbar";
import Logo from "../logo/Logo";
import Footer from "../footer/Footer";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import fondo from '../../assets/img/fondo.jpg';
import Pagination from 'react-bootstrap/Pagination';

export default function Productos() {
  
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
    <Container fluid style={{ maxWidth: '100%', padding: '20px', margin: '0' }}>
    
      <style>
    {`
    .card {
      margin: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      transition: 0.3s;
      background-color: darkgoldenrod;
      
    }
    
    .card:hover {
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
    
    .card img {
      max-height: 200px;
      object-fit: contain;
    }
    
    .card-body {
      text-align: center;
      
    }
    .card-text{
      font-family: 'Carter One', cursive;
    }
    .card-title{
      font-family: 'Carter One', cursive;
    }
    .titulo-p{
      font-family: 'Carter One', cursive;
      font-size: 30px;
      text-align: center;
    }
    .image-row {
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background-image: url(${fondo});
      background-size: cover;
      background-repeat: no-repeat;
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
      <Row>
        <Col>
          
    <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Ellipsis />

      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item active>{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item disabled>{14}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item>{20}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
    </Col>
        </Row>  
  
    <Row>
      <Col>
    <Footer/>
    </Col>
    </Row>
    </Row>
    </div>
   </Container>
 
  );
}


