import styled, {keyframes} from "styled-components";

import back from "../img/bg2.png"
export const StyledKnowDiv = styled.div`
    background-image: url(${back});
    margin-top:30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 100px 10%;
`
export const StyledItem1 = styled.div`
width:60%;
`

export const StyledItem2 = styled.div`
    width:30%;
`

export const StyledHeader = styled.h2`
    font-size: 40px;
    color: #fff;
    font-weight: bold;
`

export const StyledP = styled.p`
    font-size: 16px;
    color: #fff;
    margin-top:30px;
`

const fadeEffect = keyframes`
    0%{
        transform:translate(-50%,-50%) scale(1);
        opacity:1;
    }
    100%{
        transform:translate(-50%,-50%) scale(1.2);
        opacity:0;
    }
`

export const StyledImg = styled.img`
    position:relative;
    &::before{
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 100%;
        transform: translate(-50%,-50%);
        background-color: #fff;
        border-radius: 100%;
        z-index: -1;
        animation: ${fadeEffect} 1.3s infinite ease;
        box-shadow: 0 0 10px 0;
    }
`

