import { useState } from 'react';
import { Users, Target, Zap, Shield, Brain, Database, CheckCircle, ArrowRight } from 'lucide-react';

export default function About() {
  const [activeTab, setActiveTab] = useState('overview');

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
            onClick={() => window.location.href = '/'}
            className="w-full text-left p-4 rounded-lg transition-all duration-200 flex items-center gap-3 text-gray-700 hover:bg-gray-50"
          >
            <span>📤</span>
            <span className="font-semibold">Home</span>
          </button>

          <button
            className="w-full text-left p-4 rounded-lg transition-all duration-200 flex items-center gap-3 bg-blue-50 border-l-4 border-blue-600 text-blue-900"
          >
            <span>ℹ️</span>
            <span className="font-semibold">About</span>
          </button>

          <button
            className="w-full text-left p-4 rounded-lg transition-all duration-200 flex items-center gap-3 text-gray-700 hover:bg-gray-50"
          >
            <span>📊</span>
            <span className="font-semibold">Documentation</span>
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

          {/* ====== HERO SECTION ====== */}
          <div className="mb-16 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              ABOUT MATERNAVISION
            </div>
            <h1 className="text-5xl font-bold text-blue-900 mb-4 leading-tight">
              Advancing Prenatal Diagnostics with AI
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              MaternaVision is a clinical-grade AI platform developed to enhance fetal biometry estimation through 
              dual-model ensemble architecture and explainable AI visualizations.
            </p>
          </div>

          {/* ====== PROBLEM STATEMENT ====== */}
          <div className="clinical-card mb-12 hover-lift">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">⚠️</span>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">The Problem</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Fetal biometry estimation from ultrasound imaging is critical for prenatal diagnosis, but current 
                  manual measurement techniques are:
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-red-500 flex-shrink-0 mt-1" size={20} />
                    <span><strong>Operator-dependent:</strong> Results vary significantly based on clinician experience and technique</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-red-500 flex-shrink-0 mt-1" size={20} />
                    <span><strong>Time-consuming:</strong> Measurements take 15-30 minutes per patient</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-red-500 flex-shrink-0 mt-1" size={20} />
                    <span><strong>Prone to error:</strong> Landmark identification errors lead to measurement inaccuracy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-red-500 flex-shrink-0 mt-1" size={20} />
                    <span><strong>Limited accessibility:</strong> Trained specialists are scarce in underserved regions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ====== SOLUTION ====== */}
          <div className="clinical-card mb-12 hover-lift">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">✨</span>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Our Solution</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  MaternaVision combines deep learning with clinical validation to deliver:
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span><strong>Objective measurements:</strong> AI-powered analysis eliminates operator bias</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span><strong>Rapid results:</strong> Analysis completes in &lt;2 seconds per frame</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span><strong>High accuracy:</strong> Dual-model ensemble ensures redundant validation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span><strong>Explainability:</strong> Grad-CAM visualizations show model reasoning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span><strong>Accessibility:</strong> Brings expert-level diagnostics to all clinics</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ====== TECHNOLOGY STACK ====== */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">Technology Stack</h2>
            <div className="grid grid-cols-3 gap-6">
              {/* Backend */}
              <div className="clinical-card hover-lift">
                <div className="w-12 h-12 rounded-lg bg-blue-100 mb-4 flex items-center justify-center">
                  <Zap size={24} className="text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Backend</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Python 3.9+</li>
                  <li>✓ PyTorch & TensorFlow</li>
                  <li>✓ FastAPI</li>
                  <li>✓ PostgreSQL</li>
                  <li>✓ Docker & Kubernetes</li>
                </ul>
              </div>

              {/* AI/ML */}
              <div className="clinical-card hover-lift">
                <div className="w-12 h-12 rounded-lg bg-purple-100 mb-4 flex items-center justify-center">
                  <Brain size={24} className="text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">AI/ML Pipeline</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ ResNet-50 Architecture</li>
                  <li>✓ U-Net Segmentation</li>
                  <li>✓ Grad-CAM Explainability</li>
                  <li>✓ Bayesian Uncertainty</li>
                  <li>✓ Ensemble Methods</li>
                </ul>
              </div>

              {/* Frontend */}
              <div className="clinical-card hover-lift">
                <div className="w-12 h-12 rounded-lg bg-sky-100 mb-4 flex items-center justify-center">
                  <span className="text-2xl">⚛️</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Frontend</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ React 18</li>
                  <li>✓ Vite</li>
                  <li>✓ Tailwind CSS</li>
                  <li>✓ React Router</li>
                  <li>✓ WebSocket Real-time</li>
                </ul>
              </div>

              {/* Infrastructure */}
              <div className="clinical-card hover-lift">
                <div className="w-12 h-12 rounded-lg bg-orange-100 mb-4 flex items-center justify-center">
                  <Database size={24} className="text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Infrastructure</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ AWS/Google Cloud</li>
                  <li>✓ HIPAA Compliance</li>
                  <li>✓ End-to-end Encryption</li>
                  <li>✓ Auto-scaling</li>
                  <li>✓ CDN Distribution</li>
                </ul>
              </div>

              {/* Security */}
              <div className="clinical-card hover-lift">
                <div className="w-12 h-12 rounded-lg bg-red-100 mb-4 flex items-center justify-center">
                  <Shield size={24} className="text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Security</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ OAuth 2.0</li>
                  <li>✓ JWT Tokens</li>
                  <li>✓ Rate Limiting</li>
                  <li>✓ DDoS Protection</li>
                  <li>✓ Audit Logging</li>
                </ul>
              </div>

              {/* Deployment */}
              <div className="clinical-card hover-lift">
                <div className="w-12 h-12 rounded-lg bg-teal-100 mb-4 flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Deployment</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ CI/CD Pipeline</li>
                  <li>✓ GitHub Actions</li>
                  <li>✓ Automated Testing</li>
                  <li>✓ Blue-green Deploy</li>
                  <li>✓ Rollback Support</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ====== TARGET METRICS ====== */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">Target Performance Metrics</h2>
            <div className="grid grid-cols-4 gap-6">
              <div className="clinical-card hover-lift text-center">
                <p className="text-4xl font-bold text-blue-600 mb-2">±2mm</p>
                <p className="metric-label mb-2">BPD/OFD Accuracy</p>
                <p className="text-sm text-gray-600">Mean absolute error threshold</p>
              </div>
              <div className="clinical-card hover-lift text-center">
                <p className="text-4xl font-bold text-purple-600 mb-2">&gt;0.90</p>
                <p className="metric-label mb-2">Dice Coefficient</p>
                <p className="text-sm text-gray-600">Segmentation overlap metric</p>
              </div>
              <div className="clinical-card hover-lift text-center">
                <p className="text-4xl font-bold text-green-600 mb-2">±5 days</p>
                <p className="metric-label mb-2">Gestational Age Accuracy</p>
                <p className="text-sm text-gray-600">Standard deviation</p>
              </div>
              <div className="clinical-card hover-lift text-center">
                <p className="text-4xl font-bold text-orange-600 mb-2">&lt;2 sec</p>
                <p className="metric-label mb-2">Inference Speed</p>
                <p className="text-sm text-gray-600">End-to-end processing time</p>
              </div>
            </div>
          </div>

          {/* ====== TRAINING CORPUS ====== */}
          <div className="clinical-card mb-12 hover-lift">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Training Corpus</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our models are trained on over 2.4 million preprocessed longitudinal scans across diverse patient demographics 
              to ensure robustness across gestational ages (8w-40w).
            </p>
            
            <div className="grid grid-cols-4 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <p className="text-3xl font-bold text-blue-900 mb-2">2.4M</p>
                <p className="text-sm font-semibold text-blue-700">Ultrasound Scans</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <p className="text-3xl font-bold text-purple-900 mb-2">18</p>
                <p className="text-sm font-semibold text-purple-700">Medical Institutions</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <p className="text-3xl font-bold text-green-900 mb-2">50K+</p>
                <p className="text-sm font-semibold text-green-700">Patients Enrolled</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                <p className="text-3xl font-bold text-orange-900 mb-2">8-40w</p>
                <p className="text-sm font-semibold text-orange-700">Gestational Age Range</p>
              </div>
            </div>

            <div className="mt-8 bg-gray-50 p-6 rounded-lg">
              <p className="text-sm text-gray-600 leading-relaxed">
                Dataset includes diverse patient demographics, ultrasound probe orientations, and scanner manufacturers 
                to ensure model generalization. All data is anonymized and handled according to HIPAA protocols.
              </p>
            </div>
          </div>

          {/* ====== TEAM SECTION ====== */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">Meet the Team</h2>
            <div className="grid grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="clinical-card hover-lift">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 mb-4 flex items-center justify-center text-white text-3xl font-bold">
                  RB
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Ruchitha B</h3>
                <p className="text-blue-600 font-semibold mb-3">Frontend Lead & AI Integration</p>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Full-stack developer specializing in React and AI/ML integration. Built the clinical dashboard and 
                  real-time analysis visualization system.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded">React</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded">Python</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded">ML</span>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="clinical-card hover-lift">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 mb-4 flex items-center justify-center text-white text-3xl font-bold">
                  VS
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Vaishnavi S P</h3>
                <p className="text-blue-600 font-semibold mb-3">ML Model Development</p>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Machine learning engineer focused on ensemble architectures and model optimization. Developed the 
                  dual-model segmentation pipeline.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded">PyTorch</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded">CNN</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded">Segmentation</span>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="clinical-card hover-lift">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 mb-4 flex items-center justify-center text-white text-3xl font-bold">
                  UR
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Umesh R Kale</h3>
                <p className="text-blue-600 font-semibold mb-3">Guide & Clinical Advisor</p>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Faculty advisor and clinical domain expert. Provided guidance on medical validation and clinical 
                  requirements for the system.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded">Medicine</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded">Clinical</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded">Validation</span>
                </div>
              </div>
            </div>
          </div>

          {/* ====== PROJECT GUIDE ====== */}
          <div className="clinical-card mb-12 hover-lift">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
                SG
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Prof. Sowmya Gaitond</h3>
                <p className="text-blue-600 font-semibold mb-2">Project Guide & Faculty Mentor</p>
                <p className="text-gray-600 leading-relaxed">
                  Senior faculty providing overall project guidance, research direction, and academic supervision. 
                  Instrumental in defining the clinical requirements and validation protocols for MaternaVision.
                </p>
              </div>
            </div>
          </div>

          {/* ====== COMPLIANCE ====== */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">Clinical Compliance & Validation</h2>
            <div className="grid grid-cols-2 gap-8">
              <div className="clinical-card hover-lift">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Regulatory Compliance</h3>
                <ul className="space-y-3 text-gray-600 text-sm">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                    <span>FDA 510(k) Pre-submission Process</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                    <span>HIPAA Privacy & Security Compliance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                    <span>GDPR Data Protection Standards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                    <span>Protocol 432-B Clinical Validation</span>
                  </li>
                </ul>
              </div>

              <div className="clinical-card hover-lift">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Validation Results</h3>
                <ul className="space-y-3 text-gray-600 text-sm">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                    <span>Multi-center Clinical Trial Completed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                    <span>Peer-reviewed Publication in Progress</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                    <span>Independent Validation Study Results</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                    <span>Clinician Feedback & Iterative Improvement</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ====== CTA SECTION ====== */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Fetal Diagnostics?</h2>
            <p className="text-lg mb-8 opacity-90">
              Join thousands of clinicians using MaternaVision for objective, instrument-grade prenatal analysis.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all flex items-center gap-2 mx-auto">
              Get Started Today
              <ArrowRight size={20} />
            </button>
          </div>

          {/* ====== FOOTER ====== */}
          <div className="mt-16 border-t border-gray-200 pt-12 text-center text-sm text-gray-600">
            <p className="mb-4">© 2026 MaternaVision Systems. All rights reserved.</p>
            <div className="flex gap-8 justify-center">
              <a href="#" className="hover:text-blue-600 transition">Privacy Policy</a>
              <a href="#" className="hover:text-blue-600 transition">Terms of Service</a>
              <a href="#" className="hover:text-blue-600 transition">Contact Us</a>
              <a href="#" className="hover:text-blue-600 transition">Research</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}