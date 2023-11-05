import styled from "styled-components";
export const WelComWrapper = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    .WelComeCanvas{
        background-color: #282828;
    }
    .SelectContainer{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 250px;
        left: 150px;
        height: 200px;
        width: 400px;
        background-color: pink;
        z-index: 9;
        border: 1px solid #fff;
        background-color: #f6f6f6;
        border-radius: 15px;
        box-shadow: 13px 10px 45px -3px rgba(0,0,0,0.9);
        -webkit-box-shadow: 13px 10px 45px -3px rgba(0,0,0,0.9);
        -moz-box-shadow: 13px 10px 45px -3px rgba(0,0,0,0.9);
        .selection{
            width: 350px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            border-radius: 10px;
            border: 1px solid #616161;
            margin-bottom: 15px;
            font-size: 14px;
            color: #000;
            cursor: pointer;
            &:hover{
                transition: all .3s;
                background-color: #282828;
            }
            &:hover a{
                color: #fff;
            }
        }
    }
`