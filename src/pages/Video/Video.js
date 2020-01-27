import React from 'react';
import VideoPlayer from 'components/VideoPlayer';
import {historyApi} from 'services/apiResources';

const Video = (props) => {
  const videoData = props.history.location.state;
  historyApi.addWatchedVideo(videoData);
  return <div>
    <VideoPlayer data={{url: videoData.contents[0].url, title: videoData.title}}></VideoPlayer>
  </div>;
};

export default Video;
