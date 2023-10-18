import styled from "styled-components";
export const OptionCardWrapper = styled.div`
    .container{
        position: fixed;
        background-color: rgba(0,0,0,.5);
        height: 100vh;
        width: 100vw;
        z-index: 10;
        .cardContext{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-60%);
            width: 300px;
            min-height: 200px;
            padding-bottom: 60px;
            border-radius: 15px;
            border: 1px solid #808080;
            background-color: #282828;
            z-index: 9;
            .title{
                font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
                color: #ffffff;
                font-size: 18px;
                padding: 2px;
                margin-top: 10px;
                margin-left: 15px;
            }
            .paramsContext{
                display: flex;
                flex-wrap: wrap;
                padding-top: 10px;
            }
            .createBtn{
                position: relative;
                top: 30px;
                border-radius: 10px;
                width: 80px;
                height: 30px;
                background-color: #4B4B4B;
                margin: auto;
                line-height: 30px;
                text-align: center;
                color: #fff;
                font-size: 14px;
                cursor: pointer;
                transition: all .3s;
                &:hover{
                    background-color: #1e1e1e;
                    color:#ccc;
                }
            }
        }
    }
`