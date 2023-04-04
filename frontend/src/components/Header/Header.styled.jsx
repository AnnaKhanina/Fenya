import styled from "styled-components";
import { NavLink } from "react-router-dom";

// export const Header = styled.header`
//   //display: flex;
//   //align-items: center;
//   //justify-content: space-between;
//   //gap: 12px;
//   //padding: 8px 0;
//   //margin-bottom: 16px;
//   //border-bottom: 1px solid black;

//   > nav {
//     display: flex;
//   }
// `;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
 
  
  background-color: white;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 2px solid black;
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
    font-family: "OpenSans";
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
  margin-left: -40px; 
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
