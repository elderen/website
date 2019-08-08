import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ''
    }
  }
  render() {
    return (
      <>
        <h>hello</h>
      </>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));