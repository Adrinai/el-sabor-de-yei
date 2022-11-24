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


function App() {
  return (
    <div className="App">
      <header>
        <Box display = "flex" alignContent="right" justifyContent="space-between" bg="brand.accent">
        
        <Button colorScheme='teal' variant='outline'>
            contacto
        </Button>
        
        <Breadcrumb>
  <BreadcrumbItem>
    <BreadcrumbLink href='#'><EmailIcon></EmailIcon></BreadcrumbLink>
  </BreadcrumbItem>

</Breadcrumb>
<Flex align="center" justify="center">
  
</Flex>
        </Box>
      <Box>
      <Breadcrumb>
  <BreadcrumbItem>
    <BreadcrumbLink href='#'>contacto</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='#'>sobre nosotros</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='#'>productos</BreadcrumbLink>
  </BreadcrumbItem>
  
</Breadcrumb>
        </Box>
      </header>
    </div>
  );
}

export default App;
