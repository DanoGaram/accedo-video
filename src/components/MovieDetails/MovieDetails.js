import React from 'react';
import './MovieDetails.scss';

const MovieDetails = (props) => {
  const credits = props.data.credits.join(', ');
  return <div className="detail">
    <div className="detail_image">
      <img src={props.data.imageUrl}></img>
    </div>
    <div className="detail_content">
      <h2>{props.data.title}</h2>
      <small>{props.data.parentalRating} | {props.data.Langage}</small>
      <p>{props.data.description}</p>
      <small>Credits: {credits}</small>
    </div>
  </div>;
};

export default MovieDetails;
