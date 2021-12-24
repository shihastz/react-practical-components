import React from "react";
import logo from "../images/logo.svg";
import "./DragAndDrop.css";
import { useDrag } from "react-use-gesture";
import { useSpring, animated } from "react-spring";

function DragAndDrop() {
  const logoPos = useSpring({ x: 0, y: 0 });
  const bindLogoPos = useDrag((params) => {
    logoPos.x.set(params.offset[0]);
    logoPos.y.set(params.offset[1]);
  });
  const aPos = useSpring({ x: 0, y: 0 });
  const bindaPos = useDrag((params) => {
    aPos.x.set(params.offset[0]);
    aPos.y.set(params.offset[1]);
  });
  const bPos = useSpring({ x: 0, y: 0 });
  const bindbPos = useDrag((params) => {
    bPos.x.set(params.offset[0]);
    bPos.y.set(params.offset[1]);
  });
  return (
    <div className="App">
      <header className="App-header">
        <animated.div {...bindLogoPos()} style={{ x: logoPos.x, y: logoPos.y }}>
          <img src={logo} className="App-logo" alt="logo" />
        </animated.div>

        <animated.div {...bindaPos()} style={{ x: aPos.x, y: aPos.y }}>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>My App</p>
        </animated.div>
        <br />
        <animated.div {...bindbPos()} style={{ x: bPos.x, y: bPos.y }}>
          <h4>You can drag and drop all content</h4>
        </animated.div>
      </header>
    </div>
  );
}

export default DragAndDrop;
