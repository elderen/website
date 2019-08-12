import React from "react";
import { useSpring, animated as a } from "react-spring";

const Title = () => {
  const [props, set, stop] = useSpring(() => ({ opacity: 0}))
  set({ opacity: 1 })

  return (
    <a.div style={props}>
      <h1 className="name">Elderen Lee</h1>
      <p className="title">Full Stack Web Developer</p>
    </a.div>
  )
}
export default Title;