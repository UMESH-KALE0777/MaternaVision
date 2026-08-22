import { useState } from 'react';
import UploadSection from '../Components/UploadSection';
import { ChevronRight, Upload, BarChart3, Info, Download, Share2, Printer } from 'lucide-react';

const mockResults = {
  bpd: { value: 45.2, uncertainty: 1.0, label: 'Biparietal Diameter' },
  ofd: { value: 58.7, uncertainty: 2.1, label: 'Occipitofrontal Diameter' },
  hc: { value: 163.4, uncertainty: 4.5, label: 'Head Circumference' },
  ga: '19w 4d',
  ci: 77.0,
  cerebral: 18.4,
  confidence: 95.8,
};

export default function Home() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [results, setResults] = useState(null);
  const [activeTab, setActiveTab] = useState('upload');
  const [activeImageTab, setActiveImageTab] = useState('original');
  const [currentPage, setCurrentPage] = useState('home');

  const handleFileSelect = (f, p) => {
    setFile(f);
    setPreview(p);
    setCurrentPage('home');
  };

  const handleAnalyze = () => {
    setTimeout(() => {
      setResults(mockResults);
      setCurrentPage('results');
      setActiveTab('results');
    }, 2000);
  };

  const handleReset = () => {
    setFile(null);
    setPreview(null);
    setResults(null);
    setCurrentPage('home');
    setActiveTab('upload');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ====== SIDEBAR NAVIGATION ====== */}
      <div className="fixed left-0 top-0 h-screen w-72 bg-white border-r border-gray-200 p-8 flex flex-col overflow-y-auto z-40">
        {/* Logo Section */}
        <div className="mb-12">
          <div className="mb-4">
            <h1 className="text-3xl font-bold text-blue-900">MaternaVision</h1>
            <p className="text-sm text-gray-600 mt-1">Clinical AI Platform</p>
          </div>
          <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
        </div>

        {/* Navigation Menu */}
        <nav className="space-y-2 flex-1">
          <button
            onClick={() => { setCurrentPage('home'); setActiveTab('upload'); }}
            className={`w-full text-left p-4 rounded-lg transition-all duration-200 flex items-center gap-3 ${
              currentPage === 'home'
                ? 'bg-blue-50 border-l-4 border-blue-600 text-blue-900'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Upload size={20} />
            <span className="font-semibold">Upload</span>
          </button>

          <button
            onClick={() => { if (results) { setCurrentPage('results'); setActiveTab('results'); } }}
            disabled={!results}
            className={`w-full text-left p-4 rounded-lg transition-all duration-200 flex items-center gap-3 ${
              currentPage === 'results'
                ? 'bg-blue-50 border-l-4 border-blue-600 text-blue-900'
                : results
                ? 'text-gray-700 hover:bg-gray-50 cursor-pointer'
                : 'text-gray-400 cursor-not-allowed'
            }`}
          >
            <BarChart3 size={20} />
            <span className="font-semibold">Results</span>
          </button>

          <button
            onClick={() => { setCurrentPage('modelinfo'); setActiveTab('modelinfo'); }}
            className={`w-full text-left p-4 rounded-lg transition-all duration-200 flex items-center gap-3 ${
              currentPage === 'modelinfo'
                ? 'bg-blue-50 border-l-4 border-blue-600 text-blue-900'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Info size={20} />
            <span className="font-semibold">Model Info</span>
          </button>
        </nav>

        {/* Footer */}
        <div className="border-t border-gray-200 pt-4 mt-8">
          <p className="text-xs text-gray-500 leading-relaxed">
            © 2026 MaternaVision Systems. Clinical AI Platform for Fetal Biometry Estimation.
          </p>
        </div>
      </div>

      {/* ====== MAIN CONTENT AREA ====== */}
      <div className="ml-72 min-h-screen bg-gradient-to-b from-sky-50 to-white">
        <div className="p-12 max-w-6xl">

          {/* ====== HOME PAGE ====== */}
          {currentPage === 'home' && !results && (
            <>
              {/* Hero Section */}
              <div className="mb-16 animate-fade-in">
                <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                  CLINICAL PRECISION v1.0.3
                </div>
                <h1 className="text-5xl font-bold text-blue-900 mb-4 leading-tight">
                  AI-Powered Precision for Fetal Biometry
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Enhancing clinical workflows with automated BPD/OFD measurements and ensemble model integrity. 
                  MaternaVision provides objective, instrument-grade analysis for prenatal diagnostics.
                </p>
              </div>

              {/* Workflow Steps */}
              <div className="mb-16 animate-slide-in-up">
                <h2 className="text-2xl font-bold text-blue-900 mb-8">Streamlined Workflow</h2>
                <div className="grid grid-cols-3 gap-8">
                  <div className="clinical-card hover-lift">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
                      <span className="text-xl font-bold text-blue-600">01</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Upload</h3>
                    <p className="text-gray-600 text-sm">Secure DICOM or frame ingestion</p>
                  </div>

                  <div className="clinical-card hover-lift">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
                      <span className="text-xl font-bold text-blue-600">02</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Analysis</h3>
                    <p className="text-gray-600 text-sm">Autonomous segmentation & biometry</p>
                  </div>

                  <div className="clinical-card hover-lift">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
                      <span className="text-xl font-bold text-blue-600">03</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Report</h3>
                    <p className="text-gray-600 text-sm">Validated clinical export</p>
                  </div>
                </div>
              </div>

              {/* Upload Section */}
              <div className="mb-16 animate-slide-in-up">
                <div className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-bold mb-6 uppercase tracking-widest">
                  Diagnostic Gateway
                </div>
                <h2 className="text-3xl font-bold text-blue-900 mb-4">Upload Diagnostic Frame</h2>
                <p className="text-gray-600 mb-8">
                  Initiate an AI-assisted analysis by dragging clinical ultrasound frames or DICOM files into the secure validator.
                </p>
                
                <UploadSection 
                  onFileSelect={handleFileSelect}
                  selectedFile={file}
                  preview={preview}
                  onRemove={() => { setFile(null); setPreview(null); }}
                />

                {/* Analyze Button */}
                {file && preview && (
                  <div className="mt-12 flex justify-center">
                    <button 
                      onClick={handleAnalyze} 
                      className="clinical-button text-lg px-12 py-4 flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:shadow-xl"
                    >
                      <span>🔍 Proceed to Upload</span>
                      <ChevronRight size={20} />
                    </button>
                  </div>
                )}

                {/* Recent Analysis Info */}
                {!file && (
                  <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-blue-900 font-semibold mb-2">Recent Analysis</p>
                    <p className="text-blue-800 text-sm">Last entry: Case #4810 X OFD: 105mm</p>
                  </div>
                )}
              </div>

              {/* Features Section */}
              {!file && (
                <div className="animate-slide-in-up">
                  <h2 className="text-3xl font-bold text-blue-900 mb-4">Clinical Trust & Accuracy</h2>
                  <p className="text-gray-600 mb-12">Objectivity through rigorous mathematical validation.</p>
                  
                  <div className="grid grid-cols-3 gap-8">
                    <div className="clinical-card hover-lift group">
                      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏗️</div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">Dual-Model Architecture</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Synchronous inference between Resnet and U-Net ensembles ensures redundant validation of every fetal measurement.
                      </p>
                    </div>

                    <div className="clinical-card hover-lift group">
                      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📊</div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">Uncertainty Quantification</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Deterministic output metrics include Bayesian uncertainty coefficients highlighting areas where human intervention is required.
                      </p>
                    </div>

                    <div className="clinical-card hover-lift group">
                      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🔍</div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">Grad-CAM Heatmaps</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Explainable AI visualizations pinpoint the exact anatomical features the model prioritized during biometry estimation.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}

          {/* ====== RESULTS PAGE ====== */}
          {currentPage === 'results' && results && (
            <div className="animate-fade-in">
              {/* Tab Navigation */}
              <div className="flex gap-8 border-b border-gray-200 mb-8">
                <button className="pb-4 font-semibold text-blue-600 border-b-2 border-blue-600">
                  📤 Upload
                </button>
                <button className="pb-4 font-semibold text-blue-600 border-b-2 border-blue-600">
                  📊 Results
                </button>
                <button
                  onClick={() => setCurrentPage('modelinfo')}
                  className="pb-4 font-semibold text-gray-600 hover:text-gray-900 transition-all"
                >
                  ℹ️ Model Info
                </button>
              </div>

              {/* Main Results Grid */}
              <div className="grid grid-cols-3 gap-8 mb-12">
                {/* Ultrasound Viewer */}
                <div className="col-span-2">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">📸 Ultrasound Analysis</h3>
                    <p className="text-sm text-gray-600 mb-4">MODEL PART A ACTIVE</p>
                  </div>

                  <div className="ultrasound-viewer h-96 rounded-lg border-2 border-gray-300 overflow-hidden mb-6">
                    <img src={preview} alt="Ultrasound" className="w-full h-full object-contain bg-gray-900" />
                  </div>

                  {/* Image Tabs */}
                  <div className="flex gap-2 mb-8">
                    {['Original', 'Segmentation', 'Grad-CAM', 'Overlay'].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveImageTab(tab.toLowerCase())}
                        className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                          activeImageTab === tab.toLowerCase()
                            ? 'bg-gray-900 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <button className="flex-1 px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg font-semibold text-gray-900 transition-all flex items-center justify-center gap-2">
                      <Share2 size={18} />
                      Request Re-Scan
                    </button>
                    <button className="flex-1 px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg font-semibold text-gray-900 transition-all flex items-center justify-center gap-2">
                      <Printer size={18} />
                      Manual Override
                    </button>
                  </div>
                </div>

                {/* Measurements Panel */}
                <div>
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-blue-900">📊 Biometric Analysis</h3>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">REVIEW RECOMMENDED</span>
                    </div>
                  </div>

                  {/* Measurement Cards */}
                  <div className="space-y-4">
                    {/* BPD */}
                    <div className="measurement-card blue">
                      <p className="metric-label text-blue-700 mb-2">BPD</p>
                      <p className="metric-value text-blue-900">
                        {results.bpd.value}
                        <span className="text-sm text-blue-600 ml-2">±{results.bpd.uncertainty}</span>
                      </p>
                      <p className="text-xs text-blue-600 mt-2">{results.bpd.label}</p>
                      <div className="mt-2 h-2 bg-blue-200 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-600 rounded-full" style={{ width: '76%' }}></div>
                      </div>
                    </div>

                    {/* OFD */}
                    <div className="measurement-card teal">
                      <p className="metric-label text-teal-700 mb-2">OFD</p>
                      <p className="metric-value text-teal-900">
                        {results.ofd.value}
                        <span className="text-sm text-teal-600 ml-2">±{results.ofd.uncertainty}</span>
                      </p>
                      <p className="text-xs text-teal-600 mt-2">{results.ofd.label}</p>
                    </div>

                    {/* HC */}
                    <div className="measurement-card purple">
                      <p className="metric-label text-purple-700 mb-2">HC</p>
                      <p className="metric-value text-purple-900">
                        {results.hc.value}
                        <span className="text-sm text-purple-600 ml-2">±{results.hc.uncertainty}</span>
                      </p>
                      <p className="text-xs text-purple-600 mt-2">{results.hc.label}</p>
                    </div>

                    {/* GA */}
                    <div className="measurement-card green">
                      <p className="metric-label text-green-700 mb-2">GA</p>
                      <p className="metric-value text-green-900">{results.ga}</p>
                      <p className="text-xs text-green-600 mt-2">Gestational Age</p>
                    </div>

                    {/* Cephalic Index */}
                    <div className="measurement-card orange">
                      <p className="metric-label text-orange-700 mb-2">Cephalic Index</p>
                      <p className="metric-value text-orange-900">{results.ci.toFixed(1)}%</p>
                      <p className="text-xs text-orange-600 mt-2">Normal: 75-85%</p>
                    </div>

                    {/* Cerebral Width */}
                    <div className="measurement-card indigo">
                      <p className="metric-label text-indigo-700 mb-2">Cerebral Width</p>
                      <p className="metric-value text-indigo-900">{results.cerebral} mm</p>
                      <p className="text-xs text-indigo-600 mt-2">1400 transverse</p>
                    </div>

                    {/* Download Button */}
                    <button className="w-full clinical-button mt-8 bg-blue-900 hover:bg-blue-950 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2">
                      <Download size={18} />
                      Download Clinical Report
                    </button>

                    {/* Reset Button */}
                    <button 
                      onClick={handleReset}
                      className="w-full px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all"
                    >
                      Start New Analysis
                    </button>
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-sm text-amber-900">
                  <strong>⚠️ Disclaimer:</strong> AI-assisted result. Clinical review required. 
                  This analysis is intended to support clinical decision-making and must be reviewed by a qualified sonographer or clinician.
                </p>
              </div>
            </div>
          )}

          {/* ====== MODEL INFO PAGE ====== */}
          {currentPage === 'modelinfo' && (
            <div className="animate-fade-in">
              <h1 className="text-4xl font-bold text-blue-900 mb-4">Model Information</h1>
              <p className="text-lg text-gray-600 mb-12">VERSION 2.4.1 CLASSIFIER</p>

              {/* Model Architecture */}
              <div className="clinical-card mb-12 hover-lift">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Dual-Model Architecture for Diagnostic Integrity</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  MaternaVision utilizes a proprietary ensemble approach to fetal ultrasound analysis. By decoupling the tasks of anatomical localization and biometric measurement, the system ensures that every quantitative data point is grounded in verified anatomical context, reducing false-positive indicators in high-clutter acoustic environments.
                </p>

                {/* Architecture Pipeline */}
                <div className="bg-gray-50 p-8 rounded-lg mb-6">
                  <h3 className="font-bold text-gray-900 mb-4">ARCHITECTURE PIPELINE</h3>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex flex-col items-center gap-2 flex-1">
                      <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">📁</span>
                      </div>
                      <p className="text-center font-semibold text-sm">Raw DICOM Stream</p>
                      <p className="text-center text-xs text-gray-600">Standardized: 20/20 ultrasound</p>
                    </div>
                    <div className="text-2xl text-gray-400">→</div>
                    <div className="flex-1">
                      <div className="bg-blue-900 text-white p-4 rounded-lg mb-2">
                        <p className="font-bold text-sm">ENSEMBLE ANALYSIS LAYER</p>
                        <p className="text-xs mt-1">Landmark Detection</p>
                      </div>
                      <div className="bg-blue-900 text-white p-4 rounded-lg">
                        <p className="font-bold text-sm">Semantic Segmentation</p>
                        <p className="text-xs mt-1">Void-level mapping of anatomical structures for precise geometry metrics.</p>
                      </div>
                    </div>
                    <div className="text-2xl text-gray-400">→</div>
                    <div className="flex flex-col items-center gap-2 flex-1">
                      <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">✅</span>
                      </div>
                      <p className="text-center font-semibold text-sm">Validated Report</p>
                      <p className="text-center text-xs text-gray-600">±1.4B Error Margin</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Grad-CAM Section */}
              <div className="clinical-card mb-12 hover-lift">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">UNDERSTANDING GRAD-CAM HEATMAPS</h2>
                <p className="text-gray-600 mb-6">
                  To provide explainability, MaternaVision uses Gradient-weighted Class Activation Mapping (Grad-CAM). The warm-colored regions (red/yellow) indicate the specific visual features the model prioritized to reach its conclusion. Clinicians should verify that these regions align with standard anatomical landmarks.
                </p>
              </div>

              {/* Performance Metrics */}
              <div className="grid grid-cols-4 gap-6 mb-12">
                <div className="clinical-card">
                  <p className="metric-label text-blue-700 mb-2">Dataset Size</p>
                  <p className="metric-value text-blue-900">2.4M</p>
                  <p className="text-xs text-gray-600 mt-2">Scans</p>
                </div>
                <div className="clinical-card">
                  <p className="metric-label text-purple-700 mb-2">Institutions</p>
                  <p className="metric-value text-purple-900">18</p>
                  <p className="text-xs text-gray-600 mt-2">Institutions</p>
                </div>
                <div className="clinical-card">
                  <p className="metric-label text-green-700 mb-2">Dice Score</p>
                  <p className="metric-value text-green-900">0.96</p>
                  <p className="text-xs text-gray-600 mt-2">Compliance</p>
                </div>
                <div className="clinical-card">
                  <p className="metric-label text-amber-700 mb-2">Validation</p>
                  <p className="metric-value text-amber-900">Tier-1</p>
                  <p className="text-xs text-gray-600 mt-2">Compliance</p>
                </div>
              </div>

              {/* Footer Info */}
              <div className="text-center text-sm text-gray-600 border-t border-gray-200 pt-8">
                <p className="mb-2">Validated for clinical use under Protocol 432-B.</p>
                <p>Safety Manual · Privacy Policy · Contact Engineering</p>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}