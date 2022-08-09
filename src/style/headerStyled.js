import styled from 'styled-components';
export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 5%;
  align-items: center;
  margin-bottom: 30px;
`;

export const HeaderLinks = styled.div`
  display: flex;
  align-items: center;
`;

export const Link = styled.a`
  margin-right: 40px;
  color: #000;
  font-size: 18px;
  &:first-child {
    color: #15e4d0;
  }
`;
