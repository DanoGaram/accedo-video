import React from 'react';
import './MovieDetails.scss';
import { useHistory } from 'react-router-dom';
import Button from 'components/Button';

const MovieDetails = (props) => {
  const history = useHistory();
  const audios = props.data.audios.join(', ');
  const parentalRatings = (props.data.parentalRatings.map(x => x.rating)).join(', ');
  const credits = (props.data.credits.map(x => x.role + ' ' +x.name)).join(', ');
  const displayVideo = () => history.push('video', props.data);
  return <div className="detail">
    <div className="detail_image">
      <img src={props.data.images[0].url} alt="img"></img>
    </div>
    <div className="detail_content">
      <h2>{props.data.title}</h2>
      <small>{parentalRatings} | {audios}</small>
      <p>{props.data.description}</p>
      <small>Credits: {credits}</small>
      <Button onclick={displayVideo} text="WATCH VIDEO" color="blue"></Button>
    </div>
  </div>;
};

export default MovieDetails;
