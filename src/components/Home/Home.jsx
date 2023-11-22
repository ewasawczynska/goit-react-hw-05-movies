import { useEffect, useState } from 'react';
import { MovieList } from 'components';
import { fetchMovies } from 'services/api';
import { StyledHeader } from './Home.styled';

const Home = () => {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

useEffect(() => {
  getTrending();
}, []);

function getTrending() {
setIsLoading(true);
fetchMovies()
.then(response => {
  setMovies(response)
})
.catch(error => {
  console.error(error);
})
.finally(() => setIsLoading(false))

}

  return (
    <>
    {isLoading && "Loading..."}
<StyledHeader>Trending today</StyledHeader>
<MovieList movies={movies}/>
    </>
  );
};

export default Home;