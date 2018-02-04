import React, { Component } from "react";
import "./NewsPost.css";

class NewsPost extends Component {
  render() {
    const {children} = this.props;

    return (
        <li className="news-post">{children}</li>
    )
  }
}

export default NewsPost;
