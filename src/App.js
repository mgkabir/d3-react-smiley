import React, { Component } from "react";
import * as d3 from "d3";
import "./App.css";

class App extends Component {
  state = {};
  componentDidMount() {
    const svg = d3.select("svg");
    const height = svg.attr("height");
    const width = svg.attr("width");

    svg
      .append("circle")
      .attr("r", height / 2 - 50)
      .attr("cx", width / 2)
      .attr("cy", height / 2);
  }
  render() {
    return (
      <React.Fragment>
        <svg style={{ background: "lightblue" }} width="800" height="500"></svg>
      </React.Fragment>
    );
  }
}

export default App;
