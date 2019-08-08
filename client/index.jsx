import React from "react";
import ReactDOM from "react-dom";
import Animation from './components/animation.jsx'

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
        <Animation />
      </>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));