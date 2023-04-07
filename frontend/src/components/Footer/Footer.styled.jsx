import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const FooterNav = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    gap: 12px;
    border-top: 1px solid black;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 80px;
`;

export const FooterLinks = styled.ul`
    display: flex;
    list-style: none;
    align-items: center;
   `;

export const FooterLinksItem = styled.li`
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

export const Link = styled(NavLink)`
  padding: 10px;
  border-radius: 8px; 
  background: #333;  
`;

export const FooterSocialList = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    flex-direction: row;
    padding: 10px;
`;

export const FooterSocialListItem = styled.li`
    padding-left: 10px;
`
