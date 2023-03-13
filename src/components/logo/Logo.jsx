import React from 'react'
import { Logo } from './LogoStyle'
import logotipo from '../../assets/img/logopeque.png';

const logo = () => {
  return (
    <Logo className='logo'>
    <img className='foto'
        src={logotipo} alt="logo"/>

    </Logo>
  )
}

export default logo