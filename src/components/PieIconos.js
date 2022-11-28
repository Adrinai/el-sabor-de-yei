import React from 'react'
import { FaInstagramSquare, FaRegEnvelope, FaWhatsapp, FaFacebook } from "react-icons/fa";
import { IconContext } from 'react-icons';
import { Container, LogoContainer, Wrapper} from './PieElementos';

const PieIconos = () => {
  return (
    <Container>
       <Wrapper>
       <IconContext.Provider value={{style: {fontSize: "1rem"}}}>
     
            <LogoContainer>
                <FaFacebook/>
            </LogoContainer>
            <LogoContainer>
                <FaInstagramSquare/>
            </LogoContainer>
            <LogoContainer>
                <FaWhatsapp/> 
            </LogoContainer>
            <LogoContainer>
                <FaRegEnvelope/>
            </LogoContainer> 
                
            </IconContext.Provider>
       </Wrapper>
    </Container>
  )
}

export default PieIconos