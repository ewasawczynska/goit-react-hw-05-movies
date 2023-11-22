import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledContainer = styled.div`
display: flex;
gap: 30px;
margin-top: 20px;
`;

export const StyledImg = styled.img`
border-radius: 3%;
box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
`;

export const StyledItem = styled.li`
list-style-type: none;
`;

export const StyledLinkBack = styled(Link)`
color: #7C9FC0;
font-style: italic;
padding: 5px;
text-decoration: none;
&:hover, &:focus {
font-weight: 900;
}
`;

export const StyledLink = styled(Link)`
color: black;
text-decoration: none;
&:hover, &:focus {
font-weight: 900;
}
`;

export const StyledSecondInfobox = styled.div`
border-top: 1px solid grey;
width: 100%;
`;