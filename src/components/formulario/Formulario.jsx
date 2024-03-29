import React, {Fragment} from 'react';
import "../../components/pages/MainStyle.scss";
import "../../components/formulario/Formulario.css";
import { Button, Textarea} from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Formulario = () => {
  // const (formState, setFormState) = useState({});
  // const changehandler = ()=>{

  // }
  


  const Formik = useFormik({
    initialValues: {nombre:'', asunto:'', mail:'', ciudad:'', telefono:'', pedido:''},
    // 
    validationSchema: Yup.object({
      nombre: Yup.string()
        .required('el campo nombre es requerido')
        .min(3, 'el campo nombre minimo ha de tener 3 caracteres')
        .max(15, 'el campo nombre tiene como maximo 15 caracteres'),
      asunto: Yup.string()
        .min(5, 'minimo tiene que tener 5 caracteres'),
      mail: Yup.string()
        .required('campo requerido')
        .email('el formato de email es incorrecto'),
      ciudad: Yup.string(),
      telefono: Yup.number()
        .required('el campo telefono es obligatorio'),
      pedido: Yup.string(),

    }),
    onSubmit: Values=>{
      console.log(Values);
      }
    
  });
  // const handleChange =(event) => {
  //     console.log(event.target.value)
  // }
  // const { handleSubmit} = useForm()
  // const customSubmit=(data)=>{
  //     console.log(data)
  // }
  return (
    <Fragment>
      <form action="https://formsubmit.co/grupoelsabordeyei0711ca@gmail.com" 
      method="POST" className='form-react'>
    <div className='formulario-ori'>
      {/* <Animacion/> */}
      
    <FormControl className='row'>
    <FormControl isRequired>
    <div className='titulo'>
        <h1 className='border'>PEDIDO</h1>
        {/* <h1 className='wave'>PEDIDO</h1> */}
      </div>
      
    <FormLabel className='texto'>Nombre</FormLabel>

    <Input 
    type='text' 
    placeholder='nombre completo' 
    name='nombre' className='texto' 
    onChange={Formik.handleChange} 
    onBlur={Formik.handleBlur}
    value={Formik.values.nombre}/> 
    {Formik.touched.nombre && Formik.errors.nombre ? (
    <div className='error'>{Formik.errors.nombre}</div>
    ):null}
    
</FormControl>
<FormControl>
<FormLabel className='texto'>Asunto</FormLabel>
<Input 
type='text' 
name='asunto'
className='texto' 
onChange={Formik.handleChange} 
onBlur={Formik.handleBlur}
value={Formik.values.asunto}/>
{Formik.touched.asunto && Formik.errors.asunto ? (
    <div className='error'>{Formik.errors.asunto}</div>
    ):null}
</FormControl>
<FormControl>
<FormLabel className='texto' >Email</FormLabel>

<Input 
type='email' 
name='mail' 
className='texto'
onChange={Formik.handleChange}
onBlur={Formik.handleBlur} 
value={Formik.values.mail}/> 
{Formik.touched.mail && Formik.errors.mail ? (
    <div className='error'>{Formik.errors.mail}</div>
    ):null}
</FormControl>
<FormControl>
<FormLabel className='texto'>Ciudad</FormLabel>

<Input 
type='text' 
name='ciudad'
className='texto' 
onChange={Formik.handleChange} 
onBlur={Formik.handleBlur}
value={Formik.values.ciudad}/>
</FormControl>
<FormControl>
<FormLabel className='texto' >Telefono</FormLabel>

<Input 
type='number' 
name='telefono' 
className='texto'
onChange={Formik.handleChange} 
onBlur={Formik.handleBlur}
value={Formik.values.telefono}/>
{Formik.touched.telefono && Formik.errors.telefono ? (
    <div className='error'>{Formik.errors.telefono}</div>
    ):null}
</FormControl>

    
<FormControl> 
<FormLabel className='texto'>Mensaje</FormLabel>
<Textarea 
tape='text'
name='pedido'
className='texto'
onChange={Formik.handleChange} 
onBlur={Formik.handleBlur}
value={Formik.values.pedido}/>
</FormControl>

<Button colorScheme='' className='boton'type='submit' value={Formik.values}>Enviar</Button>

</FormControl>
</div>
</form>

</Fragment>
);
};
export default Formulario;
