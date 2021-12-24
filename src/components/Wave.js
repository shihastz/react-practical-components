import React from "react";
import WaveAnimation from "react-wavify";

const Wave = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "40px" }}>WAVE ANIMATION</h1>
      <WaveAnimation
        style={{ height: "99vh" }}
        fill="#0bd"
        paused={false}
        options={{
          height: 60,
          amplitude: 40,
          speed: 0.3,
          points: 5,
        }}
      >
        dkjfbdsbfs
      </WaveAnimation>
    </div>
  );
};

export default Wave;
