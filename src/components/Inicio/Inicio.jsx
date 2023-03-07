import React from "react";
import Navbar from "../Navbar";
import Logo from "../Logo";
import Footer from "../Footer";
import "../Styles/MainStyle.css";

export default function Inicio() {
  return (
  <div className='portada'>
      <div>
        <Logo />

        <Navbar />
      </div>
    <div className="body"></div>
    <div className="footer">
          <Footer />
      </div>
  </div>  
    
  );
}
