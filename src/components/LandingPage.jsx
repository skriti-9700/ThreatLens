import React from 'react';
import { Shield, ShieldAlert, Cpu, Terminal, Eye, FileSearch, ArrowRight, Activity, Zap } from 'lucide-react';

export default function LandingPage({ onStartAnalysis }) {
  return (
    <div className="relative min-h-[calc(100vh-80px)] flex flex-col justify-between overflow-hidden">
      {/* Background Matrix/Grid effect */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none"></div>
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-cyber-dark to-cyber-dark pointer-events-none"></div>
      
      {/* Dynamic Scanline animation */}
      <div className="absolute inset-x-0 h-0.5 bg-cyber-blue/20 animate-scanline pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 flex-grow flex flex-col justify-center">
        {/* Banner: Hackathon Badge */}
        <div className="self-center mb-6 inline-flex items-center gap-2 px-3 py-1 bg-cyber-blue/10 border border-cyber-blue/30 rounded-full text-xs font-mono text-cyber-blue tracking-wider uppercase shadow-[0_0_10px_rgba(59,130,246,0.15)] animate-pulse">
          <Activity className="w-3.5 h-3.5" />
          <span>V2.8.0 Active • Threat Intelligent Engine</span>
        </div>

        {/* Hero Headline */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-blue-100 to-cyber-blue leading-none">
            Deconstruct Android Threats With <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-cyber-cyan glitch-text">ThreatLens</span>
          </h1>
          <p className="text-lg md:text-2xl font-medium font-mono text-cyan-400/80 mb-4 tracking-wider">
            AI-Assisted APK Risk Analysis & Malware Triage Platform
          </p>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
            Upload, decompile, and inspect Android packages. ThreatLens runs static code inspections, manifest scans, and leverages AI engines to score risk and deliver mitigation pathways.
          </p>
        </div>

        {/* Interactive Main Call-to-Action */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
          <button
            onClick={onStartAnalysis}
            className="group relative px-8 py-4 bg-cyber-blue hover:bg-blue-600 text-slate-100 font-semibold rounded-lg flex items-center gap-3 shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300 hover:scale-[1.03] cursor-pointer"
          >
            <div className="absolute inset-0 rounded-lg border border-cyan-400 opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all"></div>
            <Shield className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span>Analyze APK Package</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <a
            href="#features"
            className="px-8 py-4 bg-slate-900 hover:bg-slate-800 border border-cyber-border text-slate-300 font-semibold rounded-lg transition-all duration-200"
          >
            Explore Security Engine
          </a>
        </div>

        {/* Simulated Platform Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto w-full mb-20 bg-cyber-card/40 border border-cyber-border/60 rounded-xl p-6 backdrop-blur-md">
          <div className="text-center border-r border-cyber-border/40 last:border-0">
            <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-1">Total APKs Audited</p>
            <p className="text-2xl md:text-3xl font-bold font-mono text-cyber-blue">142,891</p>
          </div>
          <div className="text-center border-r border-cyber-border/40 last:border-0">
            <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-1">C2 Nodes Synced</p>
            <p className="text-2xl md:text-3xl font-bold font-mono text-cyber-cyan">8,419</p>
          </div>
          <div className="text-center border-r border-cyber-border/40 last:border-0">
            <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-1">Zero-Day Detections</p>
            <p className="text-2xl md:text-3xl font-bold font-mono text-cyber-red">1,204</p>
          </div>
          <div className="text-center">
            <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-1">Analysis Latency</p>
            <p className="text-2xl md:text-3xl font-bold font-mono text-cyber-green">&lt; 15s</p>
          </div>
        </div>

        {/* Features Grid */}
        <div id="features" className="scroll-mt-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-100">Advanced Threat Inspection Capabilities</h2>
            <p className="text-slate-400 mt-2">Equipped with static analysis pipelines and artificial intelligence report models</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="group relative p-6 bg-cyber-card border border-cyber-border rounded-xl hover:border-cyber-blue/50 transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-b from-cyber-blue/5 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity"></div>
              <div className="w-12 h-12 rounded-lg bg-cyber-blue/10 border border-cyber-blue/20 flex items-center justify-center text-cyber-blue mb-4 group-hover:scale-110 transition-transform">
                <FileSearch className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-200 mb-2">Static Manifest Scanning</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Extracts AndroidManifest.xml parameters, isolating critical intent filters, deep links, and package configurations immediately.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group relative p-6 bg-cyber-card border border-cyber-border rounded-xl hover:border-cyber-blue/50 transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-b from-cyber-cyan/5 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity"></div>
              <div className="w-12 h-12 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/20 flex items-center justify-center text-cyber-cyan mb-4 group-hover:scale-110 transition-transform">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-200 mb-2">Intrusive Permissions Audit</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Highlights high-severity Android permission requests (SMS intercept, contacts access, background locations) and assesses security risks.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group relative p-6 bg-cyber-card border border-cyber-border rounded-xl hover:border-cyber-blue/50 transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-b from-cyber-teal/5 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity"></div>
              <div className="w-12 h-12 rounded-lg bg-cyber-teal/10 border border-cyber-teal/20 flex items-center justify-center text-cyber-teal mb-4 group-hover:scale-110 transition-transform">
                <Terminal className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-200 mb-2">Obfuscation Detection</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Detects bytecode protectors, obfuscated string tables, packed binaries, and dynamic class loading structures attempting to hide paywalled payloads.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group relative p-6 bg-cyber-card border border-cyber-border rounded-xl hover:border-cyber-blue/50 transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-b from-cyber-blue/5 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity"></div>
              <div className="w-12 h-12 rounded-lg bg-cyber-blue/10 border border-cyber-blue/20 flex items-center justify-center text-cyber-blue mb-4 group-hover:scale-110 transition-transform">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-200 mb-2">AI-Guided Threat Intel</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Translates bytecode vulnerabilities, API abuse patterns, and C2 URLs into a readable malware classification report in plain language.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer disclaimer */}
      <div className="w-full border-t border-cyber-border/40 py-6 text-center text-xs font-mono text-slate-500">
        <span>Disclaimer: ThreatLens prototype is for security research and sandbox triage demonstrating static APK decompilation metrics.</span>
      </div>
    </div>
  );
}
