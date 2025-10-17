import React from "react";

// Example images (replace URLs with your actual asana photos)
const asanas = [
  { name: "Tadasana", img: "https://i.imgur.com/1Tadasana.jpg" },
  { name: "Vrikshasana", img: "https://i.imgur.com/2Vrikshasana.jpg" },
  { name: "Trikonasana", img: "https://i.imgur.com/3Trikonasana.jpg" },
];

export default function AsanaGallery({ onSelect }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
      {asanas.map((asana) => (
        <div key={asana.name} style={{ cursor: "pointer" }}>
          <img
            src={asana.img}
            alt={asana.name}
            width={150}
            height={150}
            style={{ borderRadius: "10px", border: "2px solid #ccc" }}
            onClick={() => onSelect(asana)}
          />
          <p>{asana.name}</p>
        </div>
      ))}
    </div>
  );
}
