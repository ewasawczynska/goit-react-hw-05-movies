import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchByQuery } from "services/api";
import { MovieList, MovieSearch } from "components";

const Movies = () => {

  const [movie, setMovie] = useState([]);
  const [searchParams] = useSearchParams(); 
  const query = searchParams.get('searchQuery');

  useEffect(() => {
    if (!query) return;
    fetchByQuery(query)
      .then(response => {
        setMovie(response);
      })
      .catch(error => {
        alert('Houston, we have a problem');
        console.error(error);
      });
  }, [query]);

    return (
      <>
      <MovieSearch/>
      <MovieList movies={movie}/>
      </>
    );
  };

export default Movies;