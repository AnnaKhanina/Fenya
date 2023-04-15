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
  background-color: #4759A6;
  gap: 12px;

`;

export const NavbarLogo = styled.span`
  cursor: pointer; 
  padding-left: 50px;
  
  @media (max-width: 767px) {
    padding-left: 30px;
  } 
`;

export const NavbarLinks = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  margin-left: auto;
  text-decoration: none;
  color: black;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.02em;

  @media (max-width: 767px) {
    display:none;   
  } 
`;

export const NavbarLinksItem = styled.li`
  margin-left: 24px;
    
  // & a {
    // text-decoration: none;
    // color: black;
    // font-family: "Raleway";
    // font-style: normal;
    // font-weight: 300;
    // font-size: 18px;
    // line-height: 21px;
    // display: flex;
    // align-items: center;
    // transition: transform 250ms linear, color 250ms linear;
    // &:hover,
    // &:focus {
    //   color:red;
    // } 
    // }
    // @media (max-width: 767px) {
    //   display:none;
    // } 
`;

export const Link = styled(NavLink)`
  display: flex;
  padding-top: 32px;
  padding-bottom: 32px;
  color: #fff; 
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) linear;
    &:hover,
    &:focus {
      color: #D538AA;
    }  
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
  margin-left: auto;
  text-decoration: none;
  color: black;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.02em;

  @media (max-width: 767px) {
    display:none;   
  }
  
  @media (1200px) {
    display:flex; 
    justify-content: space-between;
    align-items: right; 
    gap: 8px;  
  } 
`;


export const HeaderIconsListItem = styled.li`
`;

// export const Input = styled.input`
//   color: #2a2a2a;
//   font-size: 14px;
//   padding-left: 4px;
// `;


// export const Button = styled.button`
//   background-color: white;
//   border: none;
// `;

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


