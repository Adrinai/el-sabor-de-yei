import React from "react";
import Logo from "../logo/Logo";
import Footer from "../footer/Footer";
import "../pages/MainStyle.scss";
import Navbar from "../navbar/Navbar";

export default function Inicio() {
  return (
    <div className="container">
  
    <div className="cabecera">
      
          <Logo/><Navbar/>
        
    </div>
    <div className="body">
      
    </div>
    <div className="footer">
      <Footer/>
    </div>
  
  </div>
    
  );
}
