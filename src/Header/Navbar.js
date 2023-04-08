import React from 'react'
import { PrimaryNav, MenuLink, Menu, Hamburger } from './NavElement'
const Navbar = () => {
  return (
    <>
      <PrimaryNav>
        <Hamburger />
        <Menu>
          <MenuLink to="/" activeStyle>
            Home
          </MenuLink>
          <MenuLink to="/chart" activeStyle>
            Visualization
          </MenuLink>
          
        </Menu>
      </PrimaryNav>
    </>
  )
}
export default Navbar