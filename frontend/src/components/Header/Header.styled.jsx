import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderWrapper = styled.header`
  border-bottom: 1px solid #ececec;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center; 
  background-color: #fff;
  gap: 12px;

`;

export const NavbarLogo = styled.span`
  cursor: pointer; 
  padding-left: 50px;
  padding-bottom: 20px;
  & a {
    display: inline-block;
    padding-top: 24px;
    margin-right: 93px;
  }
`;

export const NavbarLinks = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  margin-left: auto;
  text-decoration: none;
  color: black;   
  @media (max-width: 767px) {
    display:none;
  } 
`;

export const NavbarLinksItem = styled.li`
  margin-left: 24px;     
   & a {
    text-decoration: none;
    color: black;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    transition: transform 250ms linear, color 250ms linear;
    &:hover,
    &:focus {
      color:red;
    } 
  }
`;

export const Link = styled(NavLink)`
  display: flex; 
`;

export const CartLogoBadge = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 25px;
  height: 25px;
  background: #f4f4f4;
  border-radius: 40%;
  margin-left: 7px;
  color: #171717;
  font-size: 16px;
`;

export const HeaderIconsList = styled.ul`
  display: flex;
  margin-left: auto;  
  list-style: none;
  align-items: center;
  text-decoration: none;
  color: black; 
  gap: 8px;
  justify-content: space-between;
  @media (max-width: 767px) {
    display:none;
  }
`;


export const HeaderIconsListItem = styled.li`
  margin-left: 24px;    
  & a {
  text-decoration: none;
  color: black;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
  transition: transform 250ms linear, color 250ms linear;
  &:hover,
  &:focus {
    color:red;
   } 
 }
  @media (max-width: 767px) {
    display:none;
  }
`;

export const HamburgerMenu = styled.div`   
  & button {  
    margin-left: 50px;
    background-color: transparent;
    border: none;    
    @media(min-width: 767px) {
      display: none;
    }
  }  

  & svg {
    width: 40px;
    height: 40px; 
  }
`;


