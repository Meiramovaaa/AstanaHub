import styled from 'styled-components';
export const StyledMain = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10%;
  align-items: center;
`;
export const StyledMainheader = styled.h1`
  margin: 0;
  color: ${(props) => (props.color === 'black' ? 'black' : '#15e4d0')};
  font-size: 60px;
  font-weight: bold;
`;

export const StyledMainParag = styled.p`
  color: #252525;
`;

export const StyledSlider = styled.div``;
