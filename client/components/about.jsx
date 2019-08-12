import React from "react";
import ReactDOM from "react-dom";

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1
    }
  }
  render() {
    return (
      <div>
        <p>About</p>
      </div>
    )
  }
}