import React, { PureComponent, Fragment } from 'react';
import videoFile from './Video.mp4';
import './VideoPlayer.css';

class VideoPlayer extends PureComponent {
  handlePlay = () => {
    this.video.play();
  }

  handleStop =() => {
    this.video.pause();
  }

  render() {
    return (
      <div className="video-player">
        <video className="video-player__source" ref={c => (this.video = c)}>
          <source src={videoFile} type="video/mp4"></source>
        </video>
        <div>
          <button onClick={this.handlePlay}>Start</button>
          <button onClick={this.handleStop}>Stop</button>
        </div>
      </div>
    )
  }
}

export default VideoPlayer;
