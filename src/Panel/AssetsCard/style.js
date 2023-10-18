import styled from "styled-components";
export const AssestCardWrapper = styled.div`
::-webkit-scrollbar {
  display: none;
}
    .CardContainer{
        box-sizing: border-box;
        position: absolute;
        width: 220px;
        height: 380px;
        z-index:9;
        background-color: #303030;
        border-radius: 15px;
        overflow: scroll;
        .tabs{
            display: flex;
            flex-shrink: 0;
            align-items: center;
            justify-content: space-around;
            background-color: #1d1d1d;
            width: 100%;
            height: 40px;
            border-radius: 15px 15px 0px 0px;
            span{
                padding: 11px;
                color:#b5b5b5;
                font-size: 14px;
                cursor: pointer;
                &:hover{
                    background-color: #303030;
                }
            }
            .TabActive{
                background-color: #303030;
            }
        }
        .cubes{
            display: flex;
            width: 100%;
            padding-bottom: 10px;
            flex-wrap: wrap;
        }
    }
`