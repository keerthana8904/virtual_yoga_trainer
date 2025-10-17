import React, { forwardRef } from "react";
import Webcam from "react-webcam";

const WebcamFeed = forwardRef((props, ref) => {
  return (
    <Webcam
      ref={ref}
      audio={false}
      style={{ width: 640, height: 480, borderRadius: "10px" }}
    />
  );
});

export default WebcamFeed;
