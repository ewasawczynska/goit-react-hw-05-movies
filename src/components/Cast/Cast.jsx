import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesCredits } from '../../services/api';
import { StyledList, StyledItem, StyledImg } from './Cast.styled';
import PropTypes from 'prop-types';

export const Cast = () => {

  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieID } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchMoviesCredits(movieID)
      .then(response => {
        setCast(response);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  }, [movieID]);
  return (
    <>
      {isLoading && 'Loading...'}
      <StyledList>
        {cast.map(({ id, name, profile_path, character }) => (
          <StyledItem key={id}>
            <StyledImg
              src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
              alt={name}
            />
            <p>
              <b>{name}</b>
            </p>
            <p>{character}</p>
          </StyledItem>
        ))}
      </StyledList>
    </>
  );
};

Cast.propTypes = {
  casts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      profile_path: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    })
  ),
};