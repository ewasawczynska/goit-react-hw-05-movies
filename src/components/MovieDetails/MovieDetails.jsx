import { Outlet, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMoviesDetails } from "services/api";
import { StyledContainer, StyledItem, StyledLink, StyledLinkBack, StyledMainInfobox, StyledSecondInfobox } from "./MovieDetails.styled";

const MovieDetails = () => {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const { movieID } = useParams();
  const backLink = location.state?.from;

  useEffect(() => {
    setIsLoading(true);
    fetchMoviesDetails(movieID)
      .then(response => {
        setMovies(response);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  }, [movieID]);

  const movieYear = () => new Date(movies.release_date).getFullYear();

    return (<>
      {isLoading && 'Loading...'}
      <StyledLinkBack to={backLink}>← Go back</StyledLinkBack>
      <StyledContainer>
        <img
          src={`https://image.tmdb.org/t/p/w200/${movies.poster_path}`}
          alt={movies.title}
        />
        <StyledMainInfobox>
          <h3>
            {movies.title} ({movieYear()})
          </h3>
          <p>User Score: {movies.vote_average} / 10</p>
          <h3>Overview</h3>
          <p>{movies.overview}</p>
        </StyledMainInfobox>
      </StyledContainer>
      <StyledContainer>
        <StyledSecondInfobox>
      <p>Additional information</p>
      <ul>
        <StyledItem>
          <StyledLink to="reviews">
            Reviews
          </StyledLink>
        </StyledItem>
        <StyledItem>
          <StyledLink to="cast">
            Cast
          </StyledLink>
        </StyledItem>
      </ul>
      </StyledSecondInfobox>
      </StyledContainer>
      <Outlet />
    </>);
}

export default MovieDetails;