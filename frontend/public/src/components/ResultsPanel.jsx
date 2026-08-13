ImageTabs.jsx

import React from "react";
import {
  Activity,
  Ruler,
  CalendarDays,
  CircleGauge,
  AlertTriangle,
  CheckCircle2
} from "lucide-react";

export default function ResultsPanel({ result }) {
  if (!result) return null;

  return (
    <div className="results-panel">

      <div className="results-header">

        <div>
          <p className="eyebrow">ANALYSIS COMPLETE</p>
          <h2>Analysis results</h2>
          <p>
            AI-assisted fetal biometry measurements
          </p>
        </div>

        <div className="case-badge">
          Case {result.caseId}
        </div>

      </div>

      <div className="measurement-grid">

        <MeasurementCard
          title="BPD"
          value={result.bpd.value}
          unit="mm"
          confidence={result.bpd.confidence}
          uncertainty={result.bpd.uncertainty}
          icon={<Ruler size={19} />}
        />

        <MeasurementCard
          title="OFD"
          value={result.ofd.value}
          unit="mm"
          confidence={result.ofd.confidence}
          uncertainty={result.ofd.uncertainty}
          icon={<Ruler size={19} />}
        />

        <MeasurementCard
          title="Head Circumference"
          value={result.hc}
          unit="mm"
          icon={<CircleGauge size={19} />}
        />

        <MeasurementCard
          title="Gestational Age"
          value={result.gestationalAge}
          icon={<CalendarDays size={19} />}
        />

      </div>

      <div className="secondary-result-grid">

        <div className="mini-result-card">
          <span>Cephalic Index</span>
          <strong>{result.cephalicIndex}%</strong>
        </div>

        <div className="mini-result-card">
          <span>Overall confidence</span>
          <strong>{result.overallConfidence}%</strong>
        </div>

      </div>

      <div className="ensemble-card">

        <div className="section-heading">

          <div>
            <p className="eyebrow">AI ENSEMBLE</p>
            <h3>Confidence-weighted contribution</h3>
          </div>

          <Activity size={20} />

        </div>

        <div className="ensemble-bars">

          <div>
            <div className="bar-label">
              <span>Landmark model</span>
              <strong>{result.landmarkContribution}%</strong>
            </div>

            <div className="ensemble-track">
              <div
                className="ensemble-landmark"
                style={{
                  width: `${result.landmarkContribution}%`
                }}
              />
            </div>
          </div>

          <div>
            <div className="bar-label">
              <span>Segmentation model</span>
              <strong>{result.segmentationContribution}%</strong>
            </div>

            <div className="ensemble-track">
              <div
                className="ensemble-segmentation"
                style={{
                  width: `${result.segmentationContribution}%`
                }}
              />
            </div>
          </div>

        </div>

        <p className="ensemble-description">
          The final measurement combines landmark detection and
          skull segmentation according to model confidence.
        </p>

      </div>

      <div className="clinical-card">

        <div className="section-heading">

          <div>
            <p className="eyebrow">SUMMARY</p>
            <h3>Clinical review</h3>
          </div>

          <AlertTriangle size={20} />

        </div>

        <div className="flags">

          {result.clinicalFlags.map((flag, index) => (

            <div
              key={index}
              className={`clinical-flag ${flag.type}`}
            >

              {flag.type === "success" ? (
                <CheckCircle2 size={17} />
              ) : (
                <AlertTriangle size={17} />
              )}

              <span>{flag.text}</span>

            </div>

          ))}

        </div>

        <div className="clinical-disclaimer">
          AI-assisted result. Clinical review required.
        </div>

      </div>

    </div>
  );
}

function MeasurementCard({
  title,
  value,
  unit,
  confidence,
  uncertainty,
  icon
}) {
  return (
    <div className="measurement-card">

      <div className="measurement-top">

        <div className="measurement-icon">
          {icon}
        </div>

        {confidence && (
          <span className="confidence-pill">
            {confidence}%
          </span>
        )}

      </div>

      <p>{title}</p>

      <div className="measurement-value">
        {value}
        {unit && <small>{unit}</small>}
      </div>

      {uncertainty && (
        <span className="uncertainty">
          ± {uncertainty} mm uncertainty
        </span>
      )}

    </div>
  );
}