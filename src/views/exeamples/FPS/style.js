import styled from "styled-components";

export const FPSWrapper = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    .aim{
        position: absolute;
        top: 50%;
        left: 50%;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        transform: translate(-50%,-50%);
        border: 2px solid #000;
        z-index: 2;

    }

`