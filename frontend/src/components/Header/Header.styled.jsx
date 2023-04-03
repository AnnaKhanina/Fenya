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
  //width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // padding: 24px 16px;
  //z-index: 50;
  font-family: "Raleway";
  background-color: #171717;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
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
    color: #f4f4f4;
    font-size: 16px;
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
  margin-left: 8px;
  width: 30px;
  height: 30px;
  background: #f4f4f4;
  border-radius: 50%;
  margin-left: 8px;
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
