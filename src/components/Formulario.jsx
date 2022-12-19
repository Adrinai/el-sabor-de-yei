import React from 'react'
import "../components/Styles/MainStyle.css";
import "../components/Formulario.css";
import { Flex, Spacer } from '@chakra-ui/react'
import { Button, ButtonGroup, Textarea } from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
import Select from 'react-select';

const Formulario = () => {

  return (
    
    <div className='formulario'>
        
    <FormControl>
    <FormControl isRequired>
    <FormLabel className='texto'>Nombre</FormLabel>
    <Input placeholder='nombre completo'className='name' />   
</FormControl>
<FormControl>
<FormLabel className='texto'>Asunto</FormLabel>
<Input type='asunto' className='texto' />

</FormControl>
<FormControl>
<FormLabel className='texto' >Email</FormLabel>
<Input type='email' className='texto'/> 
</FormControl>
<FormControl>
<FormLabel className='texto'>Ciudad</FormLabel>
<Input type='ciudad'className='texto' />
</FormControl>
<FormControl>
<FormLabel className='texto' >Telefono</FormLabel>
<Input type='telefono' className='texto'/>
</FormControl>

    
<FormControl> 
<FormLabel className='texto'>Mensaje</FormLabel>
<Textarea type='mensaje' className='texto'/>
</FormControl>

<Button colorScheme='blue' className='boton'>Enviar</Button>
</FormControl>
</div>

);
};
export default Formulario;