import React from "react";
import { useSpring, animated as a } from "react-spring";

export default Animation = () => {
  const [greetingStatus, displayGreeting] = React.useState(false);
  const [props, set, stop] = useSpring(() => ({ opacity: 1, marginTop: 0 }))
  set({ opacity: greetingStatus ? 1 : 0, marginTop: greetingStatus ? 0 : -500 })
  // const contentProps = useSpring({
  //   opacity: greetingStatus ? 1 : 0,
  //   marginTop: greetingStatus ? 0 : -500
  // })
  return (
    <div className="container">
      <button onClick={() => displayGreeting(s => !s)}>
        Click
      </button> 
      <div>
        {!greetingStatus ? (
          <div>off</div>
        ) : (
          <a.div style={props}>
            Bring it ON
          </a.div>
          )
        }
      </div>
    </div>
  )
}