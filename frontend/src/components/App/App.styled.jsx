import styled from "styled-components";

export const Container = styled.div`
  // width: 100%;
  // margin: 0 auto;
  // padding: 0;
  
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;

  @media(320px) {
    width: 320px;
  }

  @media(480px) {
    width: 480px;
  }

  @media(768px) {
    width: 768px;
  }

  @media(1200px) {
    width: 1200px;
  }
`;