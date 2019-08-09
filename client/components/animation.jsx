import React from "react";
import { useSpring, useSprings, useTrail, animated as a } from "react-spring";
import ComponentOne from "./componentOne.jsx"
import ComponentTwo from "./componentTwo.jsx"
import ComponentThree from "./componentThree.jsx"
import ComponentFour from "./componentFour.jsx"

const items = [<ComponentOne/>, <ComponentTwo/>, <ComponentThree/>, <ComponentFour/>];
const config = { mass: 5, tension: 2000, friction: 200 };

export default Animation = () => {
  // const [greetingStatus, displayGreeting] = React.useState(false);
  // const [props, set, stop] = useSpring(() => ({ opacity: 1, marginTop: 0 }))
  // set({ opacity: greetingStatus ? 1 : 0, marginTop: greetingStatus ? 0 : -500 })

  const [headers, showHeaders] = React.useState(true);
  const trail = useTrail(items.length, {
    config,
    opacity: headers ? 1 : 0,
    x: headers ? 0 : -20,
    height: headers ? 80 : 0,
    from: { opacity: 0, x: -20, height: 0 }
  });

  // const [trail, set, stop] = useTrail(number, () => ({ opacity: 1 }))
  // set({ opacity: 0 })

  // React.useEffect(() => {
  //   displayGreeting(true)
  // })

  return (
    <div className="container">
      {/* <button onClick={() => displayGreeting(s => !s)}>
        Click
      </button> */}
      <div className="header">
        {trail.map(({ x, height, ...rest }, index) => (
          <a.div
            key={index}
            className="headerComponent"
            style={{
              ...rest,
              transform: x.interpolate(x => `translate3d(0,${x}px,0)`)
            }}
          >
            <a.div >{items[index]}</a.div>
          </a.div>
        ))}
      </div>
    </div>
  )
}