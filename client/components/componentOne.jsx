import React from "react";
import ReactDOM from "react-dom";

export default class ComponentOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1
    }
  }
  render() {
    return (
      <div>
        <h1>Elderen Lee</h1>
        <p>New York City 10025</p>
        <hr/>
        <p>Full Stack Web Developer</p>
      </div>
    )
  }
}