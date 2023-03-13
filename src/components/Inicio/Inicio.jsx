import React from "react";
import Navbar from "../navbar/Navbar";
import Logo from "../logo/Logo";
import Footer from "../footer/Footer";
import "../Styles/MainStyle.css";

export default function Inicio() {
  return (
  <div className="portada">
    <div className="cabecera">
      <div>
        <Logo />
          </div>
          <div>
        <Navbar />
      </div>
      </div>
       <div className="body">
        
       </div>
    <div className="footer">
          <Footer />
      </div>
  </div>  
    
  );
}
