import React from "react";
import Navbar from "../Navbar";
import Logo from "../Logo";
import Main from "../Main";
import Footer from "../Footer";

export default function Inicio() {
  return (
    <div>
      
      <Navbar />
      <Logo />
  
      <Main/>
      <Footer className="footer"></Footer>
    </div>
  );
}
