import React, { PureComponent } from 'react';
import videoFile from './Video.mp4';
import './VideoPlayer.css';

class VideoPlayer extends PureComponent {
  render() {
    return (
      <video className="video-player">
        <source className="video-player__source" src={videoFile} type="video/mp4"><source/>
      </video>
    )
  }
}

export default VideoPlayer;
