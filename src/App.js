import React, { Component } from "react";
import * as d3 from "d3";
import "./App.css";

class App extends Component {
  state = {};
  componentDidMount() {
    const svg = d3.select("svg");
    const height = +svg.attr("height"); // + sign converts string to number
    const width = +svg.attr("width");

    const circle = svg
      .append("circle")
      .attr("r", height / 2 - 50)
      .attr("cx", width / 2)
      .attr("cy", height / 2)
      .attr("fill", "yellow")
      .attr("stroke", "black");

    const eyeSpacing = 100;
    const eyeYOffset = -70;

    const leftEye = svg
      .append("circle")
      .attr("r", 30)
      .attr("cx", width / 2 - eyeSpacing)
      .attr("cy", height / 2 + eyeYOffset)
      .attr("fill", "black");

    const righttEye = svg
      .append("circle")
      .attr("r", 30)
      .attr("cx", width / 2 + eyeSpacing)
      .attr("cy", height / 2 + eyeYOffset)
      .attr("fill", "black");

    const g = svg
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);
    const mouth = g.append("path").attr(
      "d",
      d3
        .arc()
        .innerRadius(90)
        .outerRadius(120)
        .startAngle(Math.PI / 2)
        .endAngle((Math.PI * 3) / 2)
    );
  }
  render() {
    return (
      <React.Fragment>
        <svg style={{ background: "#83ad7f" }} width="800" height="500"></svg>
      </React.Fragment>
    );
  }
}

export default App;
