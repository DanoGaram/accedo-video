import React, { useState } from 'react';
import Carousel from 'components/Carousel';
import {moviesApi} from 'services/apiResources';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();
  let [movies, setMovies] = useState([]);
  moviesApi.get().then(x => {
    setMovies(x.data);
  });
  const redirectToPage = (movie) => {
    history.push('details', movie);
  };
  return (<div>
    <Carousel data={movies} clickItem={redirectToPage}></Carousel>
  </div>);
};

export default Home;
