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


const Formulario = () => {
  const [datos, setDatos] = useState({
    nombre:'',
    asunto:'',
    mail:'',
    ciudad:'',
    telefono:'',
    pedido:'',
  })
  const handleInputChange =(event) => {
      console.log(event.target.value)
  }
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const customSubmit=(data)=>{
      console.log(data)
  }
  return (
    <Fragment>
      <form onSubmit={handleSubmit} className='form-react'>
    <div className='formulario'>
      {/* <Animacion/> */}
      
    <FormControl className='row'>
    <FormControl isRequired>
    <div className='titulo'>
        <h1 className='border'>PEDIDO</h1>
        {/* <h1 className='wave'>PEDIDO</h1> */}
      </div>
      <form action="https://formsubmit.co/grupoelsabordeyei0711ca@gmail.com" method="POST" />
    <FormLabel className='texto'>Nombre</FormLabel>
    <Input type='text' placeholder='nombre completo' name='nombre' className='texto' onChange={handleInputChange} />   
</FormControl>
<FormControl>
<FormLabel className='texto'>Asunto</FormLabel>
<Input type='text' name='asunto'className='texto'{...register('asunto')} />

</FormControl>
<FormControl>
<FormLabel className='texto' >Email</FormLabel>
<Input type='email' name='mail' className='texto'{...register('email')}/> 
</FormControl>
<FormControl>
<FormLabel className='texto'>Ciudad</FormLabel>
<Input type='text' name='ciudad'className='texto' {...register('ciudad')}/>
</FormControl>
<FormControl>
<FormLabel className='texto' >Telefono</FormLabel>
<Input type='tel' name='teletefono' className='texto'{...register('telefono')}/>
</FormControl>

    
<FormControl> 
<FormLabel className='texto'>Mensaje</FormLabel>
<Textarea name='pedido'className='texto'{...register('mensaje')}/>
</FormControl>

<Button colorScheme='' className='boton'type='submit'>Enviar</Button>
</FormControl>
</div>
</form>

</Fragment>
);
};
export default Formulario;
