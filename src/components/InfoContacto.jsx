import React from 'react'
import "../components/InfoContactoStyle.css";
import Logo from './Logo';
import { Flex, Heading, Spacer, SocialButton } from '@chakra-ui/react'
import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  

} from '@chakra-ui/react';
import { FaInstagram, FaFacebook, FaRegEnvelope } from 'react-icons/fa';

const InfoContacto = () => {
  return (
    
    <div className='info'>
    <div className="logo">
      <div>
        <Logo />
      </div>
      <div className='text'>
        
      <p>
      Nos interesa tu opinión, si tienes dudas o sugerencias ¡escríbenos!
      </p>
      </div>
      </div>
      </div>
  )
}

export default InfoContacto