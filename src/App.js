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



function App() {
  return (
    <>
     <Navbar/>
    </>
  );
}

export default App;
