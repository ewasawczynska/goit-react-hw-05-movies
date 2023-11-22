import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { StyledContainer, StyledHeader, StyledLink, StyledLoading } from "./SharedLayout.styled";

export const SharedLayout = () => {
    return (
        <StyledContainer>
        <StyledHeader>
          <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>
        </StyledHeader>
        <Suspense fallback={<StyledLoading>Loading...</StyledLoading>}>
        <Outlet />
        </Suspense>
      </StyledContainer>
    );
};