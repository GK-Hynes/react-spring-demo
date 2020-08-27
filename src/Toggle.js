import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

export const Toggle = () => {
  const [isToggled, setToggle] = useState(false);
  const { color, y } = useSpring({
    // opacity: isToggled ? 1 : 0,
    // fontSize: isToggled ? "2rem" : "5em",
    // color: isToggled ? "#000" : "green",
    // transform: isToggled ? "translate3d(0,0,0)" : "translate3d(0, -50px, 0)",
    y: isToggled ? 0 : -50
  });

  return (
    <div>
      <AnimatedTitle
        style={{
          transform: y.interpolate((y) => `translate3d(0, ${y}px, 0)`),
          color
        }}
      >
        Hello
      </AnimatedTitle>
      <button onClick={() => setToggle(!isToggled)}>Toggle</button>
    </div>
  );
};

const AnimatedTitle = animated.h1;
