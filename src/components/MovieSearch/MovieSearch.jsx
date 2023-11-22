import { useSearchParams } from "react-router-dom";
import { StyledButton, StyledForm, StyledInput } from "./MovieSearch.styled";

export const MovieSearch = () => {

const [searchParams, setSearchParams] = useSearchParams();
const searchMovie = searchParams.get('searchQuery');

const handleSubmit = e => {
  e.preventDefault();
  setSearchParams({ searchQuery: e.target.elements.searchQuery.value });
  e.currentTarget.reset();
}

    return (
      <>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
        type="text"
        name="searchQuery"
        autoFocus
        defaultValue={searchMovie}
        />
        <StyledButton type="submit">🔎</StyledButton>
      </StyledForm>
      </>
    );
  };