import styled from "styled-components";
import size from "../../mixin/size";

export const Container = styled.div`   
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;

  // @media(320px) {
  //   width: 320px;
  // }

  // @media(480px) {
  //   width: 480px;
  // }

  // @media(768px) {
  //   width: 768px;
  // }

  // @media(1200px) {
  //   width: 1200px;
  // }

  @media ${size.mobileS} {
    max-width: 320px;
  }

  @media ${size.mobileM} {
    max-width: 375px;
  }

  @media ${size.mobileL} {
    max-width: 425px;
  }

  @media ${size.tablet} { 
    max-width: 768px;
  }

  @media ${size.laptop} {
    max-width: 1024px;
  }

  @media ${size.laptopL} {
    max-width: 1440px;
  }

  @media ${size.desktop} {
    max-width: 2560px;
  }
`;