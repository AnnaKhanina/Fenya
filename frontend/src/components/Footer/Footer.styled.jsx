import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    gap: 12px;
    padding: 8px 0;
    margin-bottom: 16px;
    border-bottom: 2px solid black;
`;

export const FooterLinks = styled.ul`
    display: flex;
    list-style: none;
    align-items: center;
`;

export const FooterLinksitem = styled.li`
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
