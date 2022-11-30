import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Wrapper,
  Menu,
  MenuItem,
  MenuItemLink,
} from "./NavbarStyle";

import { IconContext } from "react-icons";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <IconContext.Provider value={{ style: { fontSize: "1rem" } }}>
          <Menu>
            <MenuItem>
              <MenuItemLink>
                <Link to="/">Inicio</Link>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink>
                <Link to="/quienesSomos">Quienes Somos</Link>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink>PRODUCTOS</MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink>CONTACTO</MenuItemLink>
            </MenuItem>
          </Menu>
        </IconContext.Provider>
      </Wrapper>
    </Container>
  );
};

export default Navbar;