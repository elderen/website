import React from "react";
import { useSpring, animated as a } from "react-spring";

const About = () => {
  const [props, set, stop] = useSpring(() => ({ opacity: 0}))
  set({ opacity: 1 })

  return (
    <a.div style={props}>
      <p className="about"> About </p>
    </a.div>
  )
}
export default About;