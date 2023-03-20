import React from 'react'
import Footer from "../footer/Footer";
import Navbar from '../navbar/Navbar';
import Logo from '../logo/Logo';
import Carrusel3d from '../carrusel/Carrusel3d';


const Cursos = () => {
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
        <div>
            <Carrusel3d/>
        </div>
    {/* <div className="footer">
          <Footer />
      </div> */}
   </div>  
  )
}

export default Cursos