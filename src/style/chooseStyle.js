import styled from 'styled-components';
export const StyledChoose = styled.div`
  padding: 0 10%;
  margin-top: 30px;
`;
export const Styledheader = styled.h2`
  font-size: 40px;
  color: #252525;
  font-weight: 700;
  margin: 0px;
`;
export const Styledp = styled.p`
  font-size: 16px;
  color: #252525;
`;

export const StyledCardParant = styled.div`
  padding: 0 5%;
  display: flex;
  margin-top: 30px;
  justify-content: space-between;
`;
export const StyledCardItem = styled.div`
  width: calc(33.33% - 20px);
  background-color: ${(props) =>
    props.back === '!black' ? '#1becde' : '#000'};
  padding: 80px 120px;
  box-sizing: border-box;
  color: #fff;
  text-align: center;
  border-radius: 30px;
  transition: 0.4s;
  &:hover {
    background-color: #1becde;
  }
`;

export const StyledImg = styled.img`
  filter: invert(1);
`;
export const Styledh3 = styled.h3`
  text-align: center;
  font-weight: bold;
  font-size: 26px;
  display: block;
  color: #fff;
  line-height: 30px;
`;

export const StyledChooseButton = styled.button`
  display: block;
  margin: 30px auto;
  border: none;
  padding: 20px 30px;
  color: #fff;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1becde;

  transition: 0.4s;
  & img {
    width: 20px;
    filter: invert(1);
  }
  &:hover {
    background-color: #000;
  }
`;
