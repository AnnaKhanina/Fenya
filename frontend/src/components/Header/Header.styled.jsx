import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderWrapper = styled.header`
  border-bottom: 1px solid #ececec;
  display: flex;
  align-items: center;  
  justify-content: center;
  text-align: center;   
  margin-left: auto;
  margin-right: auto;
  padding: auto;
  `;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;  
  justify-content: center;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  padding: auto;  
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center; 
  background-color: #fff;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 8px;
   }

   @media (min-width: 1024px) {
    gap: 86px;
  }

   @media (min-width: 1440px) {
    gap: 280px;
  }

  @media(min-width: 4320px) {
    gap: 1000px;
  }
`;

export const NavbarLogo = styled.span`
   cursor: pointer; 
   padding: 0;     
  
`;

export const NavbarLinks = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  margin-left: auto;
  text-decoration: none;
  color: #FFA4A4;   
  @media (max-width: 767px) {
    display:none;
  } 
`;

export const NavbarLinksItem = styled.li`
  padding-left: 24px; 
  @media (min-width: 767px) {
    padding-left: 15px;
  } 
  
  @media (min-width: 1024px) {
    padding-left: 20px;
  }

  @media (min-width: 1440px) {
    padding-left: 25px;
  }

  @media (min-width: 2560px) {
    padding-left: 30px;
  }
   & a {
    text-decoration: none;
    color: #FFA4A4;
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
      color: #7D26CD;
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
  width: 20px;
  height: 20px;
  background: #f4f4f4;
  border-radius: 40%;
  margin-left: 5px;
  color: #A9A9A9;
  font-size: 16px;
`;

export const HeaderIconsList = styled.ul`  
  @media (max-width: 767px) {
    display:none;
  } 

  @media (min-width: 767px) {
    display: flex;
    margin-left: auto;  
    list-style: none;
    align-items: center;
    text-decoration: none;
    color: #FFA4A4; 
    gap: 8px;
    justify-content: space-between;  
    padding-left: 2px;   
  } 
`;


export const HeaderIconsListItem = styled.li`
  margin-left: 24px;    
  & a {
  text-decoration: none;
  color: #FFA4A4;
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
    color: black;
   } 
 }
  @media (max-width: 767px) {
    display:none;
  }
`;

export const HamburgerMenu = styled.div`   
  margin-left: auto;
  & button {
    background-color: transparent;
    border: none; 
    display: block;
    border-radius: 4px;
    padding: 0;

    @media(min-width: 768px) {
      display: none;
    }
  }  

  & svg {
    width: 40px;
    height: 40px; 
  }

  &:hover,
  &:focus {
    color: black;
   }
`;




