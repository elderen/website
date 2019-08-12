import React from "react";
import { useSpring, animated as a } from "react-spring";
import { withSize } from 'react-sizeme'

const Line = ({ size }) => {
  const [props, set, stop] = useSpring(() => ({ width: 0, height: 3, backgroundColor: 'darkblue' }))
  set({ width: size.width })

  return (
    <div>
      <a.div style={props}></a.div>
    </div>
  )
}
export default withSize()(Line);