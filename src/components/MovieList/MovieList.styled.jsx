import styled from "styled-components";
import { Link } from 'react-router-dom';

export const StyledItem = styled.li`
&:hover, &:focus {
    font-weight: 900;
}
`;

export const StyledLink = styled(Link)`
color: black;
text-decoration: none;
`;
