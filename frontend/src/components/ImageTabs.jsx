import React, { useState } from "react";
import {
  Maximize2,
  ZoomIn,
  ZoomOut,
  RotateCcw
} from "lucide-react";

export default function ImageTabs({
  originalImage,
  segmentationImage,
  gradcamImage
}) {
  const [activeTab, setActiveTab] = useState("Original");
  const [zoom, setZoom] = useState(1);

  const tabs = [
    "Original",
    "Segmentation",
    "Grad-CAM"
  ];

  const getImage = () => {
    if (activeTab === "Segmentation") {
      return segmentationImage;
    }

    if (activeTab === "Grad-CAM") {
      return gradcamImage;
    }

    return originalImage;
  };

  return (
    <div className="image-viewer-card">

      <div className="viewer-header">

        <div>
          <p className="eyebrow">ULTRASOUND ANALYSIS</p>
          <h3>Image visualization</h3>
        </div>

        <div className="viewer-actions">

          <button onClick={() => setZoom(Math.min(zoom + 0.1, 1.6))}>
            <ZoomIn size={17} />
          </button>

          <button onClick={() => setZoom(Math.max(zoom - 0.1, 0.8))}>
            <ZoomOut size={17} />
          </button>

          <button onClick={() => setZoom(1)}>
            <RotateCcw size={17} />
          </button>

          <button>
            <Maximize2 size={17} />
          </button>

        </div>
      </div>

      <div className="image-tabs">

        {tabs.map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}

      </div>

      <div className="ultrasound-viewer">

        {getImage() ? (
          <img
            src={getImage()}
            alt={`${activeTab} ultrasound`}
            style={{
              transform: `scale(${zoom})`
            }}
          />
        ) : (
          <div className="viewer-placeholder">
            Ultrasound image
          </div>
        )}

      </div>

      <div className="viewer-footer">

        <div>
          <span className="legend-dot" />
          {activeTab === "Original"
            ? "Original ultrasound"
            : activeTab === "Segmentation"
            ? "Skull segmentation"
            : "AI attention map"}
        </div>

        <span>
          Zoom {Math.round(zoom * 100)}%
        </span>

      </div>

    </div>
  );
}