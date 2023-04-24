import styled from "styled-components";
 
 export const Container = styled.div`
  width: 100%; 
    margin-left: auto;
    margin-right: auto;  

    @media (min-width: 320px) {
      width: 320px;   
    }

    @media(min-width: 480px) {
      width: 480px;     
    }

    @media(min-width: 320px) and (max-width: 480px) {
      padding-left: 8px;
      padding-right: 8px; 
    }

    @media(min-width: 768px) {
      width: 768px;
    }

    @media(min-width: 1024px) {
      width: 1024px;
    }

    @media(min-width: 1440px) {
      width: 1440px;
    }

    @media(min-width: 2560px) {
      width: 2560px;
    }

    @media(min-width: 4320px) {
      width: 4320px;
    } 
 `;
  
  
