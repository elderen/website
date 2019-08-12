import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, Link, BrowserRouter as Router } from "react-router-dom";

import Animation from './components/animation.jsx'
import About from "./components/about.jsx"
import Projects from "./components/projects.jsx"
import Resume from "./components/resume.jsx"
import Line from "./components/line.jsx"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  
  render() {
    return (
      <>
        <Router>
          <Animation />
          <Line />
          <Switch>
            <Route path="/about" exact component={About} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/resume" exact component={Resume} />
          </Switch>
        </Router>
      </>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));