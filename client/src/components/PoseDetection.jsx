import React, { useRef, useEffect } from "react";
import WebcamFeed from "./WebcamFeed";

export default function PoseDetection() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    // Wait for MediaPipe Pose to load
    if (!window.poseLoaded || !window.Pose) return;

    const pose = new window.Pose({
      locateFile: (file) =>
        `https://cdn.jsdelivr.net/npm/@mediapipe/pose@0.4/${file}`,
    });

    pose.setOptions({
      modelComplexity: 1,
      smoothLandmarks: true,
      enableSegmentation: false,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });

    pose.onResults(onResults);

    const interval = setInterval(() => {
      const video = webcamRef.current?.video;
      if (video && video.readyState === 4) {
        pose.send({ image: video });
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const onResults = (results) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.save();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(results.image, 0, 0, canvas.width, canvas.height);

    if (results.poseLandmarks) {
      window.drawConnectors(ctx, results.poseLandmarks, window.POSE_CONNECTIONS, {
        color: "#00FF00",
        lineWidth: 4,
      });
      window.drawLandmarks(ctx, results.poseLandmarks, {
        color: "#FF0000",
        lineWidth: 2,
      });
    }
    ctx.restore();
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <WebcamFeed ref={webcamRef} />
      <canvas
        ref={canvasRef}
        width={640}
        height={480}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          border: "2px solid #ccc",
          borderRadius: "10px",
        }}
      />
    </div>
  );
}
