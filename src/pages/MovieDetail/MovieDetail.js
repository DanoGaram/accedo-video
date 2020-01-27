import React from 'react';
import MovieDetails from 'components/MovieDetails';

const MovieDetail = (props) => {
return <MovieDetails data={props.location.state}></MovieDetails>;
};

export default MovieDetail;
