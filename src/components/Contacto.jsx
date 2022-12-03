import React from 'react'
import Navbar from "./Navbar";
import Logo from "./Logo";
import Footer from "./Footer";
import "./Styles/MainStyle.css";
import { Button, ButtonGroup } from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
import Select from 'react-select';
const supplier= [
  {label:'pastel', value: 'pastel'},
  {label:'evento', value:'evento'},
  {label:'mesa de dulce', value:'mesa de dulce'},
]

export default function Contacto() {
    const handleSelectChange = ({value}) => {
      console.log(value);
    }
  return (
    <div className="portada">
      <div>
        <Navbar />
        <Logo />
      </div>
      <div className='formulario'>
      <label>nombre</label>
      <input id="nombre" name='nombre' placeholder='nombre'></input>
      <label>corre electronico</label>
      <input id="Email" placeholder='email'></input>
      <label>Ciudad</label>
      <input id="ciudad" placeholder='ciudad'></input>
      <label>telefono</label>
      <input id="telefono" placeholder='telefono'></input>
      <label>especifica tu requerimiento</label>
      <Select
        defaultValue={{label:'selecciona una opción', value:'empty' }}
        options= {supplier}
        onChange={handleSelectChange}
        />
</div>
<div>
<Button colorScheme='blue'>enviar</Button>
</div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}
