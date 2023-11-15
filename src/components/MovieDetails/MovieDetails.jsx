import { useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { StyledMovieLink } from "./MovieDetails.styled";

export const MovieDetails = () => {
    const { movieId } = useParams();
    return <>Now showing product with id - {movieId}
        <StyledMovieLink to="cast">Cast</StyledMovieLink>
        <StyledMovieLink to="reviews">Reviews</StyledMovieLink>
      <Outlet />
    </>;
}

// Mając wartość parametru możemy wykonać zapytanie do API i otrzymać pełną informację o produkcie, 
// zgodnie z jego identyfikatorem, po czym wyrenderować jego stronę.