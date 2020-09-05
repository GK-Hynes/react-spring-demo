import React, { useState } from "react";
import { animated, useSpring } from "react-spring";
import useMeasure from "./useMeasure";

const Accordion = () => {
  const [on, toggle] = useState(false);
  const [bind, { height, top }] = useMeasure();
  const animation = useSpring({
    overflow: "hidden",
    // factor in height plus padding
    height: on ? height + top * 2 : 0
  });

  return (
    <div>
      <button onClick={() => toggle(!on)}>Toggle Accordion</button>
      <animated.div style={animation}>
        <div {...bind} className="accordion">
          <p>Hello from inside the Accordion</p>
        </div>
      </animated.div>
    </div>
  );
};

export default Accordion;
