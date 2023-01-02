import React from 'react'
import "../components/InfoContactoStyle.css";
import Logo from './Logo';
import { FaInstagram, FaFacebook, FaRegEnvelope, FaWhatsapp} from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";

const InfoContacto = () => {
  return (
      
    <div className='info'>
    <div>
      <div className='ico'>
        <Logo />
      </div>
      
        <div className='titulo'>
      <p>
      Nos interesa tu opinión, si tienes dudas o sugerencias ¡escríbenos!
      </p>
      </div>
      <div className='text'>
      <div>
      <FaFacebook className='enlaces'/>
      </div>
      <div >
      <a className='enlaces'href={'https://www.facebook.com/elsabordeyei'}>elsabordeyei</a>
      </div>
      <div>
      <FaInstagram className='enlaces'/>
      </div>
      <div>
      <a className='enlaces'href={'https://bit.ly/3fVS0kv'}>elsabordeyei</a>
      </div>
      <div >
    <FaRegEnvelope className='enlaces'/> 
      </div>
      <div>
      <a className='enlaces'href={'mailto:grupoelsabordeyei0711ca@gmail.com?Subject=Más%20información%20sobre%20sus%20productos'}>grupoelsabordeyei0711ca@gmail.com</a>
      </div>
      <div >
      <AiFillPhone className='enlaces'/> 
      <div> 
      <FaWhatsapp className='enlaces'/><a href={'https://walink.co/eea979'}> +58 424-2924205</a>
    </div>
      </div>
      
      </div>
      </div>
      </div>
  )
}

export default InfoContacto