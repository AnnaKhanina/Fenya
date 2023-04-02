import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
  }
`;

export const Navbar = styled.nav`
  width: 100%;
  display: flex;
  
  align-items: center;
  padding: 24px 16px;
  z-index: 50;
  font-family: "Raleway";
`;

export const NavbarLinks = styled.ul`
    display: flex;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;

export const NavbarLogo = styled.div`
  display: flex;
  margin: 0;
  cursor: pointer;
`;

export const NavbarTitle = styled.h2`
    font-family: "Raleway";
    color: red:
    font-wight: 700;
`;

export const NavbarIcon = styled.span`
  width: 10px;
  height: 10px;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  & img {
    display: inline-block;
    color: red;
  }
  `;

export const NavbarButton = styled.button`
  font-family: "Raleway";
  background-color: #fff;
  width: 85px;
  height: 32px;
  border-radius: 16px;
  border: 2px solid #e3e8f0;
  font-size: 13px;
  color: #343e5c;
`;




export const Logo = styled.p`
  font-weight: 700;
  margin: 0;
  cursor: pointer;
`;

