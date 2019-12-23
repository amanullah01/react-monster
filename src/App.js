import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      string: "Aman",
      next: "Khan"
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Good Morning {this.state.string}</p>
          <button
            onClick={() =>
              this.setState({
                next: this.state.string,
                string: this.state.next
              })
            }
          >
            Change text
          </button>
        </header>
      </div>
    );
  }
}

export default App;
