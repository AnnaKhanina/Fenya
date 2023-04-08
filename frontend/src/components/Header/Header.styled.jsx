import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center; 
  background-color: white;
  gap: 12px;
  border-bottom: 1px solid black;
`;

export const NavbarLinks = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
`;

export const NavbarLinksItem = styled.li`
  padding-left: 24px;
 
  > a {
    text-decoration: none;
    color: black;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
  }
`;

export const NavbarLogo = styled.span`
  cursor: pointer; 
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
