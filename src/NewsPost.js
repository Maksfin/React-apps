import React, { Component } from "react";
import "./NewsPost.css";

class NewsPost extends Component {
  render() {
    const { val } = this.props;

    return <li className="news-post">{val}</li>;
  }
}

export default NewsPost;
