
import React from 'react'
import { Container, LogoContainer, Wrapper, Menu, MenuItem, MenuItemLink, MobileIcon } from './NavbarElements'
import { FaInstagramSquare, FaRegEnvelope, FaWhatsapp, FaFacebook, FaBars } from "react-icons/fa";
import { IconContext } from 'react-icons';

const Navbar = () => {
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
                <Menu>
                    <MenuItem>
                        <MenuItemLink>
                            INICIO
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink>
                            QUIENES SOMOS
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink>
                            PRODUCTOS
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink>
                            CONTACTO
                        </MenuItemLink>
                    
                    <MobileIcon>
                        <FaBars/>
                    </MobileIcon>
                        </MenuItem>
                            </Menu>
                        </IconContext.Provider>
       </Wrapper>
    </Container>
  )
}

export default Navbar