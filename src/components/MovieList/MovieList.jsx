import { useLocation } from 'react-router-dom';
import { StyledItem, StyledLink } from './MovieList.styled';
import PropTypes from 'prop-types';

export const MovieList = ({ movies }) => {
    const location = useLocation();
    return (
      <ul>
        {movies.map(({ id, title }) => (
          <StyledItem key={id}>
            <StyledLink to={`/movies/${id}`} state={{ from: location }}>
              <p>{title}</p>
            </StyledLink>
          </StyledItem>
        ))}
      </ul>
    );
  };

  MovieList.propTypes = {
    movies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
      })
    ).isRequired,
  };