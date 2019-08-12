import React from "react";
import { useTrail, animated as a } from "react-spring";
import { Route, Switch, Link, BrowserRouter as Router } from "react-router-dom";
import Title from "./title.jsx"

const items = ["/about", "/projects", "/resume"];
const names = ["About", "Projects", "Resume"];
const config = { mass: 5, tension: 2000, friction: 200 };

export default Animation = () => {
  // const [greetingStatus, displayGreeting] = React.useState(false);
  // const [props, set, stop] = useSpring(() => ({ opacity: 1, marginTop: 0 }))
  // set({ opacity: greetingStatus ? 1 : 0, marginTop: greetingStatus ? 0 : -500 })

  const [headers, showHeaders] = React.useState(true);
  const trail = useTrail(items.length, {
    config,
    opacity: headers ? 1 : 0,
    x: headers ? 10 : -40,
    height: headers ? 80 : 0,
    from: { opacity: 0, x: -40, height: 0 }
  });

  // const [trail, set, stop] = useTrail(number, () => ({ opacity: 1 }))
  // set({ opacity: 0 })

  // React.useEffect(() => {
  //   displayGreeting(true)
  // })

  return (
    <div className="container">
      <div className="header">
        <Title />
        {trail.map(({ x, height, ...rest }, index) => (
          <a.div
            key={index}
            className="headerComponent"
            style={{
              ...rest,
              transform: x.interpolate(x => `translate3d(0,${x}px,0)`)
            }}
          >
            <div >
              <Link to={items[index]}>
                {names[index]}
              </Link>
            </div>
          </a.div>
        ))}
      </div>
    </div>
  )
}