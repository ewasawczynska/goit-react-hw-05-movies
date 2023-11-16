import { useLocation } from 'react-router-dom';
import { StyledItem, StyledLink, StyledList, StyledText } from './MovieList.styled';
import PropTypes from 'prop-types';

export const MovieList = ({ movies }) => {
    const location = useLocation();
    return (
      <StyledList>
        {movies.map(({ id, title }) => (
          <StyledItem key={id}>
            <StyledLink to={`/movies/${id}`} state={{ from: location }}>
              <StyledText>{title}</StyledText>
            </StyledLink>
          </StyledItem>
        ))}
      </StyledList>
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