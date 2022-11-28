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
import PieIconos from './components/PieIconos';
import Logo from './components/Logo';


function App() {
  return (
    <>
    <body className='fondo'>
    
      
        <Navbar/><Logo/>
      
     
   
    </body>
    <footer>
    <PieIconos className='footer'></PieIconos>
     </footer>

    </>
  );
}

export default App;
