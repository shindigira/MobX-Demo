import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { inject, observer } from "mobx-react";

@inject("store1", "store2")
@observer
class App extends Component {
  createNew = e => {
    if (e.which === 13) {
      this.props.store1.createItem(e.target.value);
      e.target.value = "";
    }
  };
  // setFilter = e => {
  //   this.props.store1.filter = e.target.value;
  // };
  list = itemArray => {
    return itemArray.map(item => {
      return (
        <li key={item.id}>
          <input
            type="checkbox"
            onChange={() => {
              this.toggleComplete(item);
            }}
            checked={item.complete}
          />
          <span>{item.value}</span>
        </li>
      );
    });
  };
  toggleComplete = item => {
    this.props.store1.toggleComplete(item.id);
  };
  render() {
    return (
      <div>
        <h1>List of things</h1>
        <input className="new" onKeyPress={this.createNew} />
        <input
          className="filter"
          value={this.props.store1.filter}
          onChange={this.props.store1.setFilter}
          placeholder="filter"
        />
        <ul>{this.list(this.props.store1.filteredList)}</ul>
        <button onClick={this.props.store1.clearComplete}>
          Clear Complete
        </button>
      </div>
    );
  }
}

export default App;
