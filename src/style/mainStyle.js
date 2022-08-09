import styled from "styled-components";
export const StyledMain = styled.div`
display: flex;
justify-content: space-between;
padding:0 10%;
align-items:center;
position:relative;
`
export const StyledMainheader = styled.h1`
    margin:0;
    color: ${(props) => props.color === "black" ? "black" : "#15e4d0"};
    font-size: 60px;
    font-weight: bold;
`

export const StyledMainParag = styled.p`
    color:#252525;
`

export const StyledSliderMain = styled.div`
    display:flex;
    position:absolute;
    bottom:0;
`

export const StyledSlider = styled.div`
    border: 5px solid ${(props) => props.back === "black" ? "black" : "#15e4d0"};
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-right: 20px;
    transition: .4s;
    &:hover{
        border-color:#15e4d0;
        img{
            filter:invert(80%) sepia(7%) saturate(3234%) hue-rotate(120deg) brightness(89%) contrast(80%)
        }
    }
`
export const StyledSliderImg = styled.img`
    transform: ${(props) => props.left === "left" ? "rotate(180deg)" : "rotate(0deg)"} ;
    filter: ${(props) => props.left === "left" ? "invert(80%) sepia(7%) saturate(3234%) hue-rotate(120deg) brightness(89%) contrast(80%);" : ""} ;
    width:40px;
    transition: .4s;
`
