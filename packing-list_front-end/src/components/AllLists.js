import React, { Component } from "react";
import AddList from "./AddList";

class AllLists extends Component {
  constructor() {
    super();
    this.state = {
      allLists: []
    };
  }

  //make axios call to get all lists
  // render the lists names

  render() {
    return (
      <div>
        <h1>All Lists</h1>
        {this.props.allLists[0].name}
        {/* <AddList /> */}
      </div>
    );
  }
}

export default AllLists;
