import React from "react";
import Navbar from "../navbar/Navbar2";
import Logo from "../logo/Logo";
import Footer from "../footer/Footer";
import "../pages/MainStyle.scss";

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
