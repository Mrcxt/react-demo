import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.tick());
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
  con(msg) {
    console.log(msg);
  }
  // con = msg => () => {
  //   console.log(msg);
  // };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            This is React
          </a>
          <p>{this.state.date.toLocaleTimeString()}</p>
          <button onClick={this.con.bind(this, "adadasda")}>点击</button>
        </header>
      </div>
    );
  }
}

export default App;
