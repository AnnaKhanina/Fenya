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
  background-color: white;
  gap: 12px;

`;

export const NavbarLinks = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
`;

export const NavbarLinksItem = styled.li`
  padding-left: 24px; 
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

export const NavbarLogo = styled.span`
  cursor: pointer; 
  padding-left: 50px;
  
  @media (max-width: 767px) {
    padding-left: 30px;
  } 
`;

export const Link = styled(NavLink)`
  padding: 10px;
  border-radius: 8px; 
  background: #333;  
`;

export const CartLogoBadge = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 25px;
  height: 25px;
  background: #f4f4f4;
  border-radius: 50%;
  margin-left: 7px;
  color: #171717;
  font-size: 16px;
`;

export const NavbarSearch = styled.div`
  padding: 8px;  
  margin-right: 16px;
`;

export const NavbarForm = styled.form`
 
`;

export const NavbarInput = styled.input`
  color: #2a2a2a;
  font-size: 14px;
  padding-left: 4px;
`;


export const NavbarButton = styled.button`
  background-color: white;
  border: none;
`;

export const HamburgerMenu = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  @media screen and (min-width: 767px) {
    display: none;
  }
`;


