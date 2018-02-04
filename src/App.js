import React, { Component } from "react";
import NewsPost from "./NewsPost";
import "./App.css";

class App extends Component {
  state = {
    value: "",
    data: ["Первый пост1", "Второй пост2"]
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  addPost = () => {
    if (this.state.value) {
      this.state.data.push(this.state.value);
    }
    this.setState({ value: "" });
  };

  
  render() {
    const {data} = this.state;
    const {value} = this.state;
    
    return (
      <div className="App">
        <input
          className="todo-input"
          onChange={this.handleChange}
          value={value}
          placeholder="Добавьте пункт"
        />
        <button onClick={this.addPost}>Добавить</button>
        <ul className="todo-container">
          {data.map(d => <NewsPost key={d}>{d}</NewsPost>)}
        </ul>
      </div>
    );
  }
}

export default App;
