import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  apiCall = () => {
    console.log("hiiii");
  };
  render() {
    return (
      <div className="App">
        <p>inplementing reducer</p>
        <button
          onClick={() => {
            this.apiCall();
          }}
        >
          call api
        </button>
      </div>
    );
  }
}

export default App;
