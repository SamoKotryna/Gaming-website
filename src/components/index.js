
import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements.js";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
        <NavLink to="/Home" activeStyle>
            Home
            </NavLink>
        <NavLink to="/News" activeStyle>
            News
          </NavLink>
          <NavLink to="/About" activeStyle>
            About
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;