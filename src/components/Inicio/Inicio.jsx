import React from "react";
import Navbar from "../Navbar";
import Logo from "../Logo";
import Footer from "../Footer";

export default function Inicio() {
  return (
    <div>
      <Navbar />
      <Logo />
      <Footer className="footer"></Footer>
    </div>
  );
}
