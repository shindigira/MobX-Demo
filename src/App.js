import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { inject, observer } from "mobx-react";

@inject("store1", "store2")
@observer
class App extends Component {
  clearComplete = () => {};
  createNew = e => {};
  setFilter = e => {
    this.props.store1.filter = e.target.value;
  };
  // list = itemArray => {
  //   return itemArray.map(item => (
  //     <li key={item.id}>
  //       <input
  //         type="checkbox"
  //         onChange={this.toggleComplete(item)}
  //         value={item.complete}
  //         checked={item.complete}
  //       />
  //       <span>{item.value}</span>
  //     </li>
  //   ));
  // };
  toggleComplete = item => {};
  render() {
    //   return (
    //     <div className="App">
    //       <header className="App-header">
    //         <img src={logo} className="App-logo" alt="logo" />
    //         <h1 className="App-title">Welcome to React</h1>
    //       </header>
    //       <p className="App-intro">
    //         To get started, edit <code>src/App.js</code> and save to reload.
    //       </p>
    //     </div>
    //   );
    return (
      <div>
        <h1>List of things</h1>
        <input className="new" onKeyPress={this.createNew} />
        <input
          className="filter"
          value={this.props.store1.filter}
          onChange={this.setFilter}
          placeholder="filter"
        />
        {this.props.store1.filter}
        <ul>
          {this.props.store1.filteredList.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {/* <ul>{this.list()}</ul> */}
        <button onClick={this.clearComplete}>Clear Complete</button>
      </div>
    );
  }
}

export default App;
