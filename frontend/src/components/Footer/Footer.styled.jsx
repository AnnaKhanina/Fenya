// import styled from "styled-components";
// import { NavLink } from "react-router-dom";

// export const FooterNav = styled.footer`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background-color: white;
//     gap: 12px;
//     border-top: 1px solid black;
//     position: absolute;
//     left: 0;
//     bottom: 0;
//     width: 100%;
//     height: 80px;
// `;

// export const FooterLinks = styled.ul`
//     display: flex;
//     list-style: none;
//     align-items: center;
//    `;

// export const FooterLinksItem = styled.li`
//     padding-left: 24px;
    
//     > a {
//     text-decoration: none;
//     color: black;
//     font-family: "Raleway";
//     font-style: normal;
//     font-weight: 300;
//     font-size: 18px;
//     line-height: 21px;
//     display: flex;
//     align-items: center;
//     }
// `;

// export const Link = styled(NavLink)`
//   padding: 10px;
//   border-radius: 8px; 
//   background: #333;  
// `;

// export const FooterSocialList = styled.ul`
//     display: flex;
//     align-items: center;
//     list-style: none;
//     flex-direction: row;
//     padding: 10px;
// `;

// export const FooterSocialListItem = styled.li`
//     padding-left: 10px;
// `;


// export const FooterRightsWrapper = styled.div`
// padding: 8px 0;
// border-top: 1px solid #E1E1E1;
// margin-top: 40px;

// @media screen and (min-width: 768px) {
//     width: 100%;
//     text-align: center;
// }
// `;

// export const FooterRightsContainer = styled.div`

//     font-style: normal;
//     font-weight: 700;
//     font-size: 14px;
//     line-height: 1.5;
//     text-align: center;
//     color: gray;
//     width: 100%;
//     margin-left: auto;
//     margin-right: auto;
//     max-width: 280px;
//     display: block;

//     @media screen and (min-width: 768px) {
//         display: inline;
//     }
// `;

import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const FooterNav = styled.footer`  
     gap: 12px;
     border-top: 1px solid black;
     position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 80px;
   
    @include media(768px) {
        display: flex;
        justify-content: space-around;
        align-items: baseline;
  }
`;

export const FooterContainer = styled.div`
    @include media(320px) {
        text-align: center;
    }
    @include media(1200px) {
        display: flex;
        align-items: baseline;
        text-align: start;
    }
`;

export const FooterTop = styled.div`
    @include media(768px) {
        display: flex;
        justify-content: space-around;
        align-items: baseline;
  }
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
`;


export const FooterRightsWrapper = styled.div`
padding: 8px 0;
border-top: 1px solid #E1E1E1;
margin-top: 40px;

@media screen and (min-width: 768px) {
    width: 100%;
    text-align: center;
}
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
    max-width: 280px;
    display: block;

    @media screen and (min-width: 768px) {
        display: inline;
    }
`;