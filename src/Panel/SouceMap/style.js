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
        right: 0;
        box-sizing: border-box;
        width: 220px;
        height: 380px;
        z-index:10;
        border-radius: 15px;
        background-color: #303030;
        .Item{
            width: 100%;
            height: 60px;
            background-color: pink;
            margin-top: 5px;
        }
    }
`