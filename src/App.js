import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { inject, observer } from "mobx-react";

class App extends Component {
  clearComplete = () => {};
  createNew = e => {};
  filter = e => {};
  list = () => {};
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
    // return (
    //   <div>
    //     <h1>List of things</h1>
    //     <input className="new" onKeyPress={this.createNew} />
    //     <input className="filter" value={"filter"} onChange={this.filter} />
    //     <ul>{this.list()}</ul>
    //     <a href="#" onClick={this.clearComplete}>
    //       Clear Complete
    //     </a>
    //   </div>
    // );
  }
}

export default App;
