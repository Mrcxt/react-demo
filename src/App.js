import React, { Component } from "react";
import "./App.css";

function Welcome(params) {
  return <h1>{params.name}</h1>;
}

class App extends Component {
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
          <Welcome name="虾哔哔" />
        </header>
      </div>
    );
  }
}

export default App;
