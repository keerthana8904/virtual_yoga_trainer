import React, { useState } from "react";
import AsanaGallery from "./components/AsanaGallery";
import PoseDetection from "./components/PoseDetection";

export default function App() {
  const [selectedAsana, setSelectedAsana] = useState(null);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>🏋️ Virtual Yoga Trainer</h1>

      {!selectedAsana && (
        <AsanaGallery onSelect={(asana) => setSelectedAsana(asana)} />
      )}

      {selectedAsana && (
        <>
          <h2>Perform: {selectedAsana.name}</h2>
          <PoseDetection />
        </>
      )}
    </div>
  );
}
