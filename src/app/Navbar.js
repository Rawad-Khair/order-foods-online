import React, { useEffect } from 'react'
import Style from 'styled-components'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <Nav id='nav'>
      <Title><NavLink exact to='/' id='home'>Order Online</NavLink></Title>
      <Menu>
        <Item><NavLink exact to='/resturants' id='resturants'>Resturants</NavLink></Item>
        <Item><NavLink to='/cart'>Cart</NavLink></Item>
        <Item><NavLink to='/register'>Register</NavLink></Item>
      </Menu>
      <NavLink to='/detials' id='detials' className='d-none'>detials</NavLink>
      <NavLink to='/about' className='d-none'>About Us</NavLink>
    </Nav>
  )
}

export default Navbar

const Nav = Style.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  z-index: 1;
  transition: all 1s
  a {
    color: darkorange;
    text-decoration: none;
    font-weight: 700;
  }
  &.fixed-nav {
    background-color: white;
    box-shadow: 0px 2px 5px #eee;
    transition: all 1s;
    z-index: 10000
  }
`
const Title = Style.p`
  float: left;
  font-size: 24px;
  font-weight: bold;
  padding: 10px;
  margin: 0;
  margin-left: 15px;
  color: darkorange
`
const Menu = Style.ul`
  padding:0;
  list-style: none;
  display: flex;
  align-items: center;
  float: right;
  margin: 0;
  height: 100%
`
const Item = Style.li`
  margin: 12px;
  padding: 5px;
  &:hover a {
    color: #eee
  }
  a.active {
    color: white
  }
`
