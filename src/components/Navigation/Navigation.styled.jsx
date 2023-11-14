import styled from 'styled-components';

export const StyledNavigation = styled.header`
  box-shadow: 0px 0px 12px 0px rgba(66, 68, 90, 1);
  display: flex;
  gap: 30px;
  padding: 20px 20px 20px 40px;
  position: fixed; 
  width: 100vw;
`;

export const StyledNavLink = styled.a`
  font-size: 32px;
  font-weight: 600;
  &:hover,
  &:focus {
    color: #e42eaa;
    cursor: pointer;
    text-decoration: underline;
  }
`;

