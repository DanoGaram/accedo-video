import React, { useState, useEffect } from 'react';
import Carousel from 'components/Carousel';
import {moviesApi} from 'services/apiResources';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();
  let [movies, setMovies] = useState([]);
  //let movies = [];
  useEffect(() => {
    moviesApi.get().then(x => {
      setMovies(x.data.entries);
      //movies = x.data;
    });
  }, []);
  const redirectToPage = (movie) => {
    history.push('details', movie);
  };
  return (<div>
    <Carousel data={movies} clickItem={redirectToPage} emptyItemsText="Loading"></Carousel>
  </div>);
};

export default Home;
