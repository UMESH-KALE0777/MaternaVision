import { useState } from 'react';
import UploadSection from '../Components/UploadSection';

const mockResults = {
  bpd: { value: 45.2, uncertainty: 1.0 },
  ofd: { value: 58.7, uncertainty: 2.1 },
  hc: { value: 163.4, uncertainty: 4.5 },
  ga: '19w 4d',
  ci: 77.0,
  cerebral: 18.4,
};

export default function Home() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [results, setResults] = useState(null);

  const handleFileSelect = (f, p) => {
    setFile(f);
    setPreview(p);
  };

  const handleAnalyze = () => {
    setTimeout(() => setResults(mockResults), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-white">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-screen w-72 bg-white border-r border-gray-200 p-8 flex flex-col">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-blue-900">MaternaVision</h1>
          <p className="text-xs text-gray-600 mt-1">Clinical AI Platform</p>
        </div>

        {/* Navigation */}
        <nav className="space-y-4 flex-1">
          <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-600">
            <p className="font-semibold text-blue-900">📤 Upload</p>
          </div>
          <div className="p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
            <p className="font-semibold text-gray-700">📊 Results</p>
          </div>
          <div className="p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
            <p className="font-semibold text-gray-700">ℹ️ Model Info</p>
          </div>
        </nav>

        {/* Footer */}
        <div className="border-t border-gray-200 pt-4">
          <p className="text-xs text-gray-500">© 2026 MaternaVision</p>
          <p className="text-xs text-gray-500">Clinical AI Platform</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-72 p-12">
        <div className="max-w-6xl">
          {!results && (
            <>
              {/* Hero Section */}
              <div className="mb-12">
                <h2 className="text-4xl font-bold text-blue-900 mb-4">
                  AI-Powered Precision for Fetal Biometry
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Enhancing clinical workflows with automated BPD/OFD measurements and ensemble model integrity. 
                  MaternaVision provides objective, instrument-grade analysis for prenatal diagnostics.
                </p>
              </div>

              {/* Upload Section */}
              <UploadSection 
                onFileSelect={handleFileSelect}
                selectedFile={file}
                preview={preview}
                onRemove={() => { setFile(null); setPreview(null); }}
              />

              {/* Analyze Button */}
              {file && preview && (
                <div className="mt-8 flex justify-center">
                  <button 
                    onClick={handleAnalyze} 
                    className="clinical-button text-lg px-8 py-3"
                  >
                    🔍 Start New Scan
                  </button>
                </div>
              )}

              {/* Features Section */}
              <div className="mt-16">
                <h3 className="text-2xl font-bold text-blue-900 mb-8">
                  Clinical Trust & Accuracy
                </h3>
                <p className="text-gray-600 mb-8">Objectivity through rigorous mathematical validation.</p>
                <div className="grid grid-cols-3 gap-8">
                  <div className="clinical-card hover-lift">
                    <div className="text-3xl mb-3">🏗️</div>
                    <h4 className="font-bold text-lg mb-2">Dual-Model Architecture</h4>
                    <p className="text-gray-600 text-sm">
                      Synchronous inference between Resnet and U-Net ensembles ensures redundant validation of every fetal measurement.
                    </p>
                  </div>
                  <div className="clinical-card hover-lift">
                    <div className="text-3xl mb-3">📊</div>
                    <h4 className="font-bold text-lg mb-2">Uncertainty Quantification</h4>
                    <p className="text-gray-600 text-sm">
                      Deterministic output metrics include Bayesian uncertainty coefficients, highlighting areas where human intervention is required.
                    </p>
                  </div>
                  <div className="clinical-card hover-lift">
                    <div className="text-3xl mb-3">🔍</div>
                    <h4 className="font-bold text-lg mb-2">Grad-CAM Heatmaps</h4>
                    <p className="text-gray-600 text-sm">
                      Explainable AI visualizations pinpoint the exact anatomical features the model prioritized during biometry estimation.
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Results Page */}
          {results && (
            <div className="clinical-card">
              {/* Tabs */}
              <div className="mb-8 border-b border-gray-200">
                <div className="flex gap-8">
                  <button className="tab-button tab-button-active pb-4">📤 Upload</button>
                  <button className="tab-button pb-4 text-gray-600 hover:text-blue-600">📊 Results</button>
                  <button className="tab-button pb-4 text-gray-600 hover:text-blue-600">ℹ️ Model Info</button>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-8">
                {/* Ultrasound Viewer */}
                <div className="col-span-2">
                  <h3 className="text-lg font-bold mb-4 text-blue-900">
                    📸 Ultrasound Analysis
                  </h3>
                  <div className="ultrasound-viewer h-96 flex items-center justify-center rounded-lg border border-gray-300">
                    <img src={preview} alt="Ultrasound" className="w-full h-full object-contain" />
                  </div>

                  {/* Image Tabs */}
                  <div className="mt-6 flex gap-2">
                    <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 text-sm font-medium text-gray-900">
                      Original
                    </button>
                    <button className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200 text-sm font-medium text-gray-700">
                      Segmentation
                    </button>
                    <button className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200 text-sm font-medium text-gray-700">
                      Grad-CAM
                    </button>
                    <button className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200 text-sm font-medium text-gray-700">
                      Overlay
                    </button>
                  </div>
                </div>

                {/* Measurements Panel */}
                <div>
                  <h3 className="text-lg font-bold mb-6 text-blue-900">
                    📊 Biometric Analysis
                  </h3>
                  <div className="space-y-4">
                    {/* BPD */}
                    <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
                      <p className="metric-label text-blue-700">BPD</p>
                      <p className="metric-value">
                        {results.bpd.value}
                        <span className="text-sm text-gray-600 ml-2">
                          ±{results.bpd.uncertainty}
                        </span>
                      </p>
                      <p className="text-xs text-gray-600 mt-1">Biparietal Diameter</p>
                    </div>

                    {/* OFD */}
                    <div className="p-4 rounded-lg bg-teal-50 border border-teal-200">
                      <p className="metric-label text-teal-700">OFD</p>
                      <p className="metric-value">
                        {results.ofd.value}
                        <span className="text-sm text-gray-600 ml-2">
                          ±{results.ofd.uncertainty}
                        </span>
                      </p>
                      <p className="text-xs text-gray-600 mt-1">Occipitofrontal Diameter</p>
                    </div>

                    {/* HC */}
                    <div className="p-4 rounded-lg bg-purple-50 border border-purple-200">
                      <p className="metric-label text-purple-700">HC</p>
                      <p className="metric-value">
                        {results.hc.value}
                        <span className="text-sm text-gray-600 ml-2">
                          ±{results.hc.uncertainty}
                        </span>
                      </p>
                      <p className="text-xs text-gray-600 mt-1">Head Circumference</p>
                    </div>

                    {/* GA */}
                    <div className="p-4 rounded-lg bg-green-50 border border-green-200">
                      <p className="metric-label text-green-700">GA</p>
                      <p className="metric-value">{results.ga}</p>
                      <p className="text-xs text-gray-600 mt-1">Gestational Age</p>
                    </div>

                    {/* CI */}
                    <div className="p-4 rounded-lg bg-orange-50 border border-orange-200">
                      <p className="metric-label text-orange-700">Cephalic Index</p>
                      <p className="metric-value">{results.ci.toFixed(1)}%</p>
                      <p className="text-xs text-gray-600 mt-1">Normal Range: 75-85%</p>
                    </div>

                    {/* Cerebral Width */}
                    <div className="p-4 rounded-lg bg-indigo-50 border border-indigo-200">
                      <p className="metric-label text-indigo-700">Cerebral Width</p>
                      <p className="metric-value">{results.cerebral} mm</p>
                      <p className="text-xs text-gray-600 mt-1">1400 transverse</p>
                    </div>

                    {/* Download Button */}
                    <button className="w-full clinical-button mt-6 text-white py-3 rounded-lg font-semibold">
                      📥 Download Clinical Report
                    </button>
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-sm text-amber-800">
                  <strong>⚠️ Disclaimer:</strong> AI-assisted result. Clinical review required. 
                  This analysis is intended to support clinical decision-making and must be reviewed by a qualified sonographer or clinician.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
