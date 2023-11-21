import styled from "styled-components";

export const SourceMapWrapper = styled.div`
::-webkit-scrollbar {
  display: none;
}
    .container{
        overflow-Y: auto;
        position: absolute;
        margin-right: 15px;
        padding: 15px 5px;
        left: 0;
        bottom:150px;
        box-sizing: border-box;
        width: 220px;
        height: 380px;
        z-index:10;
        border-radius: 15px;
        background-color: #303030;
        .ant-card{
            margin-top: 8px;
            border: none;
            cursor: pointer;
        }
        .ant-card-body{
            display: flex;
            height:60px;
            border-radius: 5px;
            background-color: #c1c1c1;
            justify-content: space-between;
            align-items: center;
            &:hover{
                background-color: #b7b7b7;
            }
        }
        /* .Item{
            width: 100%;
            height: 60px;
            background-color: pink;
            margin-top: 5px;
        } */
    }
`