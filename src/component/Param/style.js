import styled from "styled-components";
export const ParamWrapper = styled.div`
    .params{
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        color: #fff;
        font-size: 12px;
        margin-top: 10px;
        margin-left: 15px;
        padding: 2px;
        width: ${props=>props.theme.params.width};
        .input{
            margin-top: 5px;
            input{
                width: 100px;
                height: 20px;
                outline-style: none;
                border-radius: 5px;
                background-color:#353535;
                color:#b5b5b5;
            }
        }
    }
`