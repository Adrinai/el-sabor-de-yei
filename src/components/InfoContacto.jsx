import React from 'react'
import "../components/InfoContactoStyle.css";
import logo from './Logo';
import { Flex, Heading, Spacer } from '@chakra-ui/react'

const InfoContacto = () => {
  return (
    <div className="logo">
      <div>
        <Logo />
      </div>
      <div className='titulo'>
      
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}

export default InfoContacto