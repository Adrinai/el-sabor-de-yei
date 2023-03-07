import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Wrapper,
  Menu,
  MenuItem,
  MenuItemLink,
} from "./NavbarStyle.js";

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
              <MenuItemLink>
              <Link to="/productos">Productos</Link>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink>
                <Link to="/cursos">cursos</Link>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
            <MenuItemLink>
              <Link to="/contacto">Contacto</Link>
            </MenuItemLink>
            </MenuItem>
          </Menu>
        </IconContext.Provider>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
