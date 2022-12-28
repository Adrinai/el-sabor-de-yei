import React from 'react'
import Navbar from "./Navbar";
import Logo from "./Logo";
import Footer from "./Footer";
import Formulario from "./Formulario";
import "../components/Formulario.css"
import InfoContacto from './InfoContacto';
import "../components/InfoContactoStyle.css"
import { Wrap, WrapItem } from '@chakra-ui/react'

export default function Contacto() {
    
    
  return (
    // <div className="portada">
    //   <div>
    //     <Navbar />
    //     <Logo />
    //   </div>
    //   <div className='formulario'>
    //     <Formulario/>
    //   </div>
    //   <div>
    //    <InfoContacto/>
    //   </div>
    //   <div className="footer">
    //     <Footer />
    //   </div>
    // </div>
    <Wrap className="portada" >
  <WrapItem>
    {/* <Center w='180px' h='80px' bg='red.200'>
      Box 1
    </Center>  */}
    
      <div>
       <Navbar />
       
        <Logo />
      </div>
  </WrapItem>
  <WrapItem>
    {/* <Center w='180px' h='80px' bg='green.200'>
      Box 2
    </Center> */}
  </WrapItem>
  <WrapItem>
    {/* <Center w='180px' h='80px' bg='tomato'>
      Box 3
    </Center> */}
  </WrapItem>
  <WrapItem>
    {/* <Center w='180px' h='80px' bg='blue.200'>
      Box 4
    </Center> */}
  </WrapItem>
</Wrap>
  )
  }
