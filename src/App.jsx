import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import APKUpload from './components/APKUpload';
import AnalysisProgress from './components/AnalysisProgress';
import RiskDashboard from './components/RiskDashboard';
import AIReport from './components/AIReport';
import { Shield, ShieldAlert, Cpu, Database, Network, ChevronRight, Activity, Terminal } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('landing'); // 'landing' | 'upload' | 'analyzing' | 'dashboard'
  const [activeTab, setActiveTab] = useState('dashboard'); // 'dashboard' | 'report' | 'manifest'
  const [fileName, setFileName] = useState('QuickPay.apk');
  const [analysisResult, setAnalysisResult] = useState(null);

  const startUpload = () => {
    setCurrentPage('upload');
  };

  const handleUploadComplete = (result) => {
    setAnalysisResult(result);
    setFileName(result.filename || "uploaded.apk");
    setCurrentPage('analyzing');
  };

  const handleAnalysisComplete = (result) => {
    console.log(result);
    setAnalysisResult(result);
    setCurrentPage('dashboard');
    setActiveTab('dashboard');
  };

  const resetAnalysis = () => {
    setCurrentPage('landing');
  };

  return (
    <div className="min-h-screen bg-cyber-dark text-slate-100 flex flex-col font-sans relative selection:bg-cyber-blue/30 selection:text-slate-100">
      {/* Background cyber grid dots */}
      <div className="absolute inset-0 cyber-grid-dots opacity-20 pointer-events-none"></div>

      {/* Cyber Header Navigation */}
      <header className="sticky top-0 z-50 border-b border-cyber-border bg-cyber-dark/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo brand */}
          <div
            onClick={resetAnalysis}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-lg bg-cyber-blue/10 border border-cyber-blue/40 flex items-center justify-center text-cyber-blue shadow-[0_0_15px_rgba(59,130,246,0.2)] group-hover:border-cyber-blue transition-all">
              <Shield className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </div>
            <div>
              <span className="font-extrabold tracking-wider text-xl font-mono text-slate-100 group-hover:text-cyber-blue transition-colors">
                Threat<span className="text-cyber-blue">Lens</span>
              </span>
            </div>
          </div>

          {/* Dynamic header menus based on status */}
          <div className="flex items-center gap-6">
            {currentPage === 'dashboard' ? (
              /* Navigation Tabs on Dashboard Page */
              <nav className="hidden sm:flex items-center bg-slate-950/60 border border-cyber-border rounded-lg p-0.5 font-mono text-xs">
                <button
                  onClick={() => setActiveTab('dashboard')}
                  className={`px-4 py-1.5 rounded transition-all cursor-pointer ${activeTab === 'dashboard'
                    ? 'bg-cyber-blue text-slate-100 font-bold shadow-[0_0_10px_rgba(59,130,246,0.3)]'
                    : 'text-slate-400 hover:text-slate-200'
                    }`}
                >
                  Risk Dashboard
                </button>
                <button
                  onClick={() => setActiveTab('report')}
                  className={`px-4 py-1.5 rounded transition-all cursor-pointer ${activeTab === 'report'
                    ? 'bg-cyber-blue text-slate-100 font-bold shadow-[0_0_10px_rgba(59,130,246,0.3)]'
                    : 'text-slate-400 hover:text-slate-200'
                    }`}
                >
                  AI Forensic Report
                </button>
              </nav>
            ) : (
              /* Regular Status Info on other pages */
              <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-cyber-green/10 border border-cyber-green/30 rounded text-xs font-mono text-cyber-green">
                <span className="h-1.5 w-1.5 rounded-full bg-cyber-green animate-pulse"></span>
                <span>SYSTEM ONLINE</span>
              </div>
            )}

            {currentPage !== 'landing' && (
              <button
                onClick={resetAnalysis}
                className="text-xs font-mono text-slate-400 hover:text-slate-200 transition-colors uppercase tracking-widest cursor-pointer"
              >
                Reset Demo
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main content body */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-6 py-8 relative">
        {/* Mobile secondary tab selection on Dashboard */}
        {currentPage === 'dashboard' && (
          <div className="sm:hidden flex bg-slate-950/60 border border-cyber-border rounded-lg p-0.5 font-mono text-[11px] mb-6">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`flex-1 py-2 rounded text-center cursor-pointer ${activeTab === 'dashboard'
                ? 'bg-cyber-blue text-slate-100 font-bold'
                : 'text-slate-400'
                }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab('report')}
              className={`flex-1 py-2 rounded text-center cursor-pointer ${activeTab === 'report'
                ? 'bg-cyber-blue text-slate-100 font-bold'
                : 'text-slate-400'
                }`}
            >
              AI Forensic Report
            </button>
          </div>
        )}

        {/* View Switcher */}
        {currentPage === 'landing' && (
          <LandingPage onStartAnalysis={startUpload} />
        )}
        {currentPage === 'upload' && (
          <APKUpload
            onUploadComplete={handleUploadComplete}
            onBack={resetAnalysis}
          />
        )}
        {currentPage === 'analyzing' && (
          <AnalysisProgress
            fileName={fileName}
            onComplete={() => handleAnalysisComplete(analysisResult)}
          />
        )}
        {currentPage === 'dashboard' && (
          <div className="space-y-6">
            {/* Specimen Header banner */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-slate-950/40 border border-cyber-border p-4 rounded-xl font-mono text-xs text-slate-400">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-slate-500">SPECIMEN:</span>
                <span className="text-cyber-cyan font-bold">{fileName}</span>
                <span className="text-slate-700">|</span>
                <span className="text-slate-500">VERDICT:</span>
                <span className="text-cyber-red font-bold">HIGH RISK MALWARE</span>
                <span className="text-slate-700">|</span>
                <span className="text-slate-500">FAMILY:</span>
                <span className="text-cyber-amber font-bold">Spyware.SMSThief</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center bg-slate-950 border border-cyber-border rounded px-2 py-0.5">
                  <span className="text-slate-500 mr-1.5">SHA256:</span>
                  <span className="text-slate-300 truncate w-32">e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855</span>
                </div>
              </div>
            </div>

            {/* Render selected subview */}
            {activeTab === 'dashboard' && (
              <RiskDashboard
                onReset={resetAnalysis}
                analysisResult={analysisResult}
              />
            )}
            {activeTab === 'report' && (
              <AIReport />
            )}
          </div>
        )}
      </main>

      {/* Grid footer watermark */}
      <footer className="border-t border-cyber-border/40 py-6 text-center text-xs font-mono text-slate-500 mt-12 bg-slate-950/20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© 2026 ThreatLens Inc. Prototype Sandbox Environment.</p>
          <div className="flex items-center gap-4">
            <span className="text-cyber-blue/80 hover:text-cyber-blue cursor-pointer">Security Policies</span>
            <span className="text-slate-700">•</span>
            <span className="text-cyber-blue/80 hover:text-cyber-blue cursor-pointer">Decompiler API</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
