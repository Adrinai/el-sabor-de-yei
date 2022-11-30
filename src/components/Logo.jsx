import React from 'react'
import { Logo } from './LogoStyle'
import imagenes from '../assets/imagenes';

const logo = () => {
  return (
    <Logo className='logo'>
    <img src={imagenes.img21} className='logo'/>

    </Logo>
  )
}

export default logo