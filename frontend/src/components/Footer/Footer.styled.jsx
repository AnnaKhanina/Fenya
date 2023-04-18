import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const FooterWrapper  = styled.footer` 
    gap: 12px;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    @media (max-width: 767px) {
        display:none;
      } 
`;

export const FooterContainer = styled.div`
    display: flex;
    align-items: center;  
    justify-content: center;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    padding: auto; 
    border-top: 1px solid #ececec; 
`;

export const FooterTop = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: baseline;    
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
  border-radius: 8px; 
  background: #333;  
`;

export const FooterSocialList = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    flex-direction: row;
`;

export const FooterSocialListItem = styled.li`
    padding-left: 10px;
`;


export const FooterRightsContainer = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.5;
    text-align: center;
    color: gray;
    width: 100%;
    margin-left: auto;
    margin-right: auto;    
`;