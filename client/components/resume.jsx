import React from "react";

export default class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1
    }
  }
  render() {
    return (
      <div>
        <a href="resume.pdf"> Resume </a>
      </div>
    )
  }
}