import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { EmailIcon, PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import { Box, Flex } from "@chakra-ui/react"
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import imagenes from './assets/imagenes';
import Carrusel from './components/Carrusel';

function App() {
  return (
    <>
    <div className='fondo'>
      
     <Navbar/>
     <Carrusel/>
     <img src={imagenes.img5}/>
    
    </div>
    </>
  );
}

export default App;
