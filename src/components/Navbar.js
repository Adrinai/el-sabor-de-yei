
import React from 'react'
import { Container, Wrapper, Menu, MenuItem, MenuItemLink,} from './NavbarElements'

import { IconContext } from 'react-icons';

const Navbar = () => {
  return (
    <Container>
       <Wrapper>
       <IconContext.Provider value={{style: {fontSize: "1rem"}}}>

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
                    
                        </MenuItem>
                            </Menu>
                        </IconContext.Provider>
       </Wrapper>
    </Container>
  )
}

export default Navbar