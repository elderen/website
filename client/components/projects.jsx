import React from "react";
import ReactDOM from "react-dom";

export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1
    }
  }
  render() {
    return (
      <div>
        <p>Projects</p>
      </div>
    )
  }
}