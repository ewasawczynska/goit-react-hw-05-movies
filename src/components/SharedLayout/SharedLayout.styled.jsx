import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledContainer = styled.div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1280px;

`;

export const StyledHeader = styled.header`
`;

export const StyledLink = styled(NavLink)`
border-radius: 5%;
color: black;
padding: 10px;
text-decoration: none;
&.active {
    color: #d922b1;
}
&:hover, &:focus {
background-color: #d922b1;
color: white;
&.active {
    color: white;
}
} 
`;

export const StyledLoading = styled.div`
color: grey;
font-size: 36px;
font-style: italic;
text-align: center;
`;

export const StyledNav = styled.nav`
display: flex;
flex-direction: row;
font-size: 24px;
font-weight: 500;
gap: 60px;
margin-top: 20px;
border-bottom: 3px dotted grey;
`;

