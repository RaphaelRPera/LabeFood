import React from 'react'
import { AiOutlineHome, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import styled from "styled-components"
import { NavLink } from 'react-router-dom'

export const ContainerFooter = styled.div`
    position: fixed;
    bottom: 0;
    width: 100vw;
    height: 49px;
    border-top: 1px solid #b8b8b8;
    background-color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #B8B8B8;
  &.active {
    color: #5cb646;
  }
`
const Footer = () => {

    return (
      <ContainerFooter>
          <StyledNavLink to="/home"><AiOutlineHome fontSize="27px"/></StyledNavLink>
          <StyledNavLink to="/carrinho"><AiOutlineShoppingCart fontSize="27px"/></StyledNavLink>
          <StyledNavLink to="/perfil"><AiOutlineUser fontSize="27px"/></StyledNavLink>
      </ContainerFooter>
    );
  }
  
  export default Footer;