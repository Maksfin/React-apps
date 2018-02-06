import React, { Component } from "react";
import NewsPost from "./NewsPost";
import "./App.css";

class App extends Component {
  state = {
    newsInput: "",
    news : []
  };

  handleChange = event => {
    this.setState({ newsInput: event.target.value });
  };

  handleNewPost = () => {
    if (this.state.newsInput) {
      this.state.news.push({text: this.state.newsInput});
    }
    this.setState({ newsInput: "" });
  };

  
  render() {
    const {news} = this.state;
    const {newsInput} = this.state;
    
    return (
      <div className="App">
        <input
          className="todo-input"
          onChange={this.handleChange}
          placeholder="Какие новости?"
          value={newsInput}
        />
        <button onClick={this.handleNewPost}>Создать новость</button>
        <div className="todo-container">
          {news.map(d => <NewsPost key={d.text} text={d.text}/>)}
        </div>
      </div>
    );
  }
}

export default App;
