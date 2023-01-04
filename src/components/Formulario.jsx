import React, {useState, Fragment} from 'react'
import { useForm } from "react-hook-form";
import "../components/Styles/MainStyle.css";
import "../components/Formulario.css";
import { Flex, Spacer } from '@chakra-ui/react'
import { Button, ButtonGroup, Textarea} from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
import Select from 'react-select';
import Animacion from './Animacion';

const Formulario = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const customSubmit=(data)=>{
      console.log(data)
  }
  return (
    <Fragment>
      <form onSubmit={handleSubmit} className='form-react'>
    <div className='formulario'>
      <Animacion/>
    <FormControl className='row'>
    <FormControl isRequired>
    <FormLabel className='texto'>Nombre</FormLabel>
    <Input placeholder='nombre completo' className='texto'{...register('name')} />   
</FormControl>
<FormControl>
<FormLabel className='texto'>Asunto</FormLabel>
<Input type='asunto' className='texto'{...register('asunto')} />

</FormControl>
<FormControl>
<FormLabel className='texto' >Email</FormLabel>
<Input type='email' className='texto'{...register('email')}/> 
</FormControl>
<FormControl>
<FormLabel className='texto'>Ciudad</FormLabel>
<Input type='ciudad'className='texto' {...register('ciudad')}/>
</FormControl>
<FormControl>
<FormLabel className='texto' >Telefono</FormLabel>
<Input type='telefono' className='texto'{...register('telefono')}/>
</FormControl>

    
<FormControl> 
<FormLabel className='texto'>Mensaje</FormLabel>
<Textarea type='mensaje' className='texto'{...register('mensaje')}/>
</FormControl>

<Button type='submit' colorScheme='' className='boton'>Enviar</Button>
</FormControl>
</div>
</form>
</Fragment>
);
};
export default Formulario;
