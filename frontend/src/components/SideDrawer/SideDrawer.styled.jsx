import styled from "styled-components";

export const SideDrawerWrapper = styled.div`
    width: 70%;
    height: 100vh;
    background: #fff;
    z-index: 200;
    position: fixed;
    top: 0;
    left: 0;
    translate: transformX(-100%);
    transition: all 0.3s ease-out;

    & show {
        tansform: translateX(0);
    }

    & ul {
        display: flex;
        flex-direction: column;
        list-style: none;
        & li {
            display: flex;
            align-items: center; 
        }
          & a {
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            flex: 1;
            padding: 16px;
            text-decoration: none;
            color: #171717;
            font-size: 25px;
          }
    }
`;