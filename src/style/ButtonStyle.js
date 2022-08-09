import styled from "styled-components";
export const Button = styled.button`
    background-color:${(props) => props.back === "black" ? "#000" : "#4bc5b8"};
    border: none;
    padding: 20px 30px;
    color: #fff;
    font-size: 18px;
    margin:30px 30px 0 0;
    transition: .4s;
    &:hover{
        background-color:#4bc5b8;
    }
`