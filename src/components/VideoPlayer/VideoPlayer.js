import React from 'react';
import { useHistory } from 'react-router-dom';

const VideoPlayer = (props) => {
  const history = useHistory();
  const goBack = () => history.goBack();
  return <div>
    <video  controls autoPlay onEnded={goBack}>
      <source src={props.data.url} type="video/mp4" />
      Your browser does not support HTML5 video.
    </video>
  </div>;
};

export default VideoPlayer;
