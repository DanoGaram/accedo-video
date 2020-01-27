import React, { useState, useEffect } from 'react';
import {historyApi} from 'services/apiResources';
import { useHistory } from 'react-router-dom';
import Carousel from 'components/Carousel';

const History = () => {
  const history = useHistory();
  let [movies, setMovies] = useState([]);
  //let movies = [];
  useEffect(() => {
    setMovies(historyApi.getWatchedVideos());
  }, []);
  const redirectToPage = (movie) => {
    history.push('video', movie);
  };
  return (<div>
    <Carousel data={movies} clickItem={redirectToPage} emptyItemsText="You have not watched any video yet."></Carousel>
  </div>);
};

export default History;
