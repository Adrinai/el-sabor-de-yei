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
    <body className='fondo'>
    
      <div>
    <Navbar/>
    <img src={imagenes.img21} className='logo'/>
     {/* <Carrusel/> */}
     
    
     
    </div>
    </body>
    </>
  );
}

export default App;
