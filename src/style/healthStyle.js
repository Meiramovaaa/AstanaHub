import styled from "styled-components";
export const StyledHealth = styled.div`
    padding: 0 12%;
    margin-top: 30px;
    
`

export const StyledHealthH2 = styled.h2`
    font-size: 40px;
    color: #252525;
    font-weight: bold;
`
export const StyledHealthp = styled.p`
    font-size: 16px;
    color: #252525;
`

export const StyledHealthDivImg = styled.div`
display: flex;
justify-content: space-between;
position:relative;
`
export const StyledHealthimg1 = styled.img`
width: 622px;
height: 366px;
`

export const StyledHealthimg2 = styled.img`
width: 435px;
height: 366px;
`

export const StyledHealthAbsolute = styled.div`
position: absolute;
 background-color: #cfedf0;
 height: 450px;
    width: 300px;
    top:-35px;
    left:-60px;
    z-index:-1;
`

export const StyledHealthButton = styled.button`
    border: none;
    padding: 20px 30px;
    color: #fff;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #1becde;
    margin-top:30px;
    transition: .4s;
    & img{
        width:20px;
        filter:invert(1);
    }
    &:hover{
        background-color: #000;
    }
`