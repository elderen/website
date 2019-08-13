import React from "react";
import { useSpring, animated as a } from "react-spring";


const Resume = () => {
  const [props, set, stop] = useSpring(() => ({ opacity: 0}))
  set({ opacity: 1 })

  return (
    <a.div style={props}>
      <img className="resume" src="resume.jpg" />
      <a href="resume.pdf" target="_blank">Download Resume</a>
    </a.div>
  )
}
export default Resume;