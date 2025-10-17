import React from "react";

export default function PoseFeedback({ landmarks }) {
  if (!landmarks) return null;

  const rightWrist = landmarks[16];
  const rightShoulder = landmarks[12];
  const isHandRaised = rightWrist.y < rightShoulder.y;

  return (
    <div className="feedback-box">
      {isHandRaised ? "🙌 Right Hand Raised!" : "Raise your right hand 👆"}
    </div>
  );
}
