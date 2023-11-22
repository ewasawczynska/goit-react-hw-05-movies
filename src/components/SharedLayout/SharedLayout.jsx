import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { StyledContainer, StyledHeader, StyledLink, StyledLoading, StyledNav } from "./SharedLayout.styled";

export const SharedLayout = () => {
    return (
        <StyledContainer>
        <StyledHeader>
          <StyledNav>
        <StyledLink to="/">🏡 Home</StyledLink>
        <StyledLink to="/movies">🎞️ Movies</StyledLink>
      </StyledNav>
        </StyledHeader>
        <Suspense fallback={<StyledLoading>Loading...</StyledLoading>}>
        <Outlet />
        </Suspense>
      </StyledContainer>
    );
};