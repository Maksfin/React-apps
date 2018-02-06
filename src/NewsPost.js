import React, { Component } from "react";
import "./NewsPost.css";

class NewsPost extends Component {
  render() {
    const {text} = this.props;

    return (
      <div className="news-post">
        <p>{text}</p>
      </div>
    )
  }
}

export default NewsPost;
