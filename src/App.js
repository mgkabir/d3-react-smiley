import React, { Component } from "react";
import * as d3 from "d3";
import "./App.css";

class App extends Component {
  state = {};
  componentDidMount() {
    const svg = d3.select("svg");
    const height = +svg.attr("height"); // + sign converts string to number
    const width = +svg.attr("width");

    const g = svg
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);

    const circle = g
      .append("circle")
      .attr("r", height / 2 - 50)
      .attr("fill", "yellow")
      .attr("stroke", "black");

    const eyeSpacing = 100;
    const eyeYOffset = -70;
    const eyeRadius = 40;
    const eyeBrowWidth = 70;
    const eyeBrowHeight = 15;
    const eyeBrowYOffset = -70;

    const mouth = g.append("path").attr(
      "d",
      d3
        .arc()
        .innerRadius(90)
        .outerRadius(120)
        .startAngle(Math.PI / 2)
        .endAngle((Math.PI * 3) / 2)
    );

    const eyeG = g.append("g").attr("transform", `translate(0,${eyeYOffset})`);

    const leftEye = eyeG
      .append("circle")
      .attr("r", eyeRadius)
      .attr("cx", -eyeSpacing);

    const leftEyebrow = eyeG
      .append("rect")
      .attr("x", -eyeSpacing - eyeBrowWidth / 2)
      .attr("y", eyeBrowYOffset)
      .attr("width", eyeBrowWidth)
      .attr("height", eyeBrowHeight);

    const righttEye = eyeG
      .append("circle")
      .attr("r", eyeRadius)
      .attr("cx", eyeSpacing);

    const rightEyebrow = eyeG
      .append("rect")
      .attr("x", eyeSpacing - eyeBrowWidth / 2)
      .attr("y", eyeBrowYOffset)
      .attr("width", eyeBrowWidth)
      .attr("height", eyeBrowHeight)
      .transition()
      .duration(1000)
      .attr("y", eyeBrowYOffset - 40)
      .transition()
      .duration(2000)
      .attr("y", eyeBrowYOffset);
  }
  render() {
    return (
      <React.Fragment>
        <svg style={{ background: "#83ad7f" }} width="960" height="600"></svg>
      </React.Fragment>
    );
  }
}

export default App;
