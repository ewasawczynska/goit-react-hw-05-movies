import { Outlet } from "react-router-dom";
import { StyledContainer, StyledHeader, StyledLink } from "./SharedLayout.styled";

export const SharedLayout = () => {
    return (
        <StyledContainer>
        <StyledHeader>
          <nav>
        <StyledLink to="/">
          Home
        </StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>
        </StyledHeader>
        <Outlet />
      </StyledContainer>
    )
}