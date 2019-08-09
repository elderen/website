import React from "react";
import ReactDOM from "react-dom";

export default class ComponentFour extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1
    }
  }
  render() {
    return (
      <div>
        <p>C4</p>
      </div>
    )
  }
}