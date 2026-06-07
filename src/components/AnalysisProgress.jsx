import React, { useState, useEffect, useRef } from 'react';
import { Terminal, CheckCircle2, ShieldAlert, Loader, AlertTriangle, Shield } from 'lucide-react';

const STAGES = [
  { id: 'manifest', name: 'Manifest Scan', desc: 'Decoding AndroidManifest.xml configuration settings' },
  { id: 'permissions', name: 'Permission Analysis', desc: 'Evaluating Android API access levels and hardware locks' },
  { id: 'code', name: 'Code Inspection', desc: 'Disassembling bytecode, identifying suspicious API routes' },
  { id: 'ai', name: 'AI Interpretation', desc: 'Running security heuristics LLM classifier' },
  { id: 'risk', name: 'Risk Scoring', desc: 'Calculating final threat indices and mitigation matrices' }
];

const SIMULATED_LOGS = [
  "Initializing decompiler sandbox context...",
  "Target APK: QuickPay.apk identified.",
  "MD5: c4ca4238a0b923820dcc509a6f75849b",
  "SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
  "Decompressing zip archive, extraction in progress...",
  "Stage [1/5]: Manifest Scan triggered.",
  "Parsing raw binary AndroidManifest.xml structure...",
  "Extracted intent filters: 12 dynamic handlers resolved.",
  "Found critical services: com.quickpay.sync.SMSService (EXPORTED: true)",
  "Manifest Scan completed successfully.",
  "Stage [2/5]: Permission Analysis triggered.",
  "Auditing permission list: 18 permissions requested.",
  "ALERT: High-risk permission detected: android.permission.READ_SMS",
  "ALERT: High-risk permission detected: android.permission.READ_CONTACTS",
  "WARNING: android.permission.RECEIVE_BOOT_COMPLETED requested.",
  "Permission Analysis completed.",
  "Stage [3/5]: Code Inspection triggered.",
  "Disassembling bytecode classes.dex using Baksmali API...",
  "Decompiling 1,482 classes...",
  "Detecting obfuscated packages. Proguard/DexGuard symbols identified.",
  "Obfuscation detected in core utility classes (namespace: com.quickpay.a.b.c).",
  "Scanning class methods for dangerous API usage...",
  "Found runtime URL requests pointing to remote server: http://api-secure-gateway-pay.com/sys/sms",
  "Found API call: Landroid/telephony/SmsManager;->sendTextMessage",
  "Code Inspection completed.",
  "Stage [4/5]: AI Interpretation triggered.",
  "Packaging code heuristics and permission metrics for AI classification...",
  "Connecting to ThreatLens LLM Triage Engine API...",
  "Analyzing risk profiles and obfuscation metadata...",
  "AI Analysis: Classifying behavior pattern matching 'Android.Spyware.SMSThief' family.",
  "Generating natural language threat breakdown...",
  "AI Interpretation finalized.",
  "Stage [5/5]: Risk Scoring triggered.",
  "Applying threat weights to discovered indicators...",
  "Manifest risk coefficient: 0.85",
  "Permission risk coefficient: 0.92",
  "Obfuscation payload multiplier: 1.15",
  "Synthesizing threat vectors...",
  "Calculated Risk Score: 82/100 (HIGH RISK)",
  "Finalizing analysis report...",
  "Analysis complete. Launching dashboard views..."
];

export default function AnalysisProgress({ fileName, onComplete }) {
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState([]);
  const logsEndRef = useRef(null);

  // Auto-scroll logs
  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  // Overall timing loop for progress and stages
  useEffect(() => {
    const totalDuration = 7000; // 7 seconds
    const intervalTime = 50;
    const increment = (100 / (totalDuration / intervalTime));

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(progressTimer);
  }, []);

  // Update current stage based on progress
  useEffect(() => {
    const stagePercent = 100 / STAGES.length;
    const index = Math.min(
      Math.floor(progress / stagePercent),
      STAGES.length - 1
    );
    setCurrentStageIndex(index);
    
    if (progress >= 100) {
      const delay = setTimeout(() => {
        onComplete();
      }, 800);
      return () => clearTimeout(delay);
    }
  }, [progress, onComplete]);

  // Push logs progressively
  useEffect(() => {
    const logInterval = Math.floor(7000 / SIMULATED_LOGS.length);
    let logIndex = 0;

    const logTimer = setInterval(() => {
      if (logIndex < SIMULATED_LOGS.length) {
        setLogs((prev) => [...prev, SIMULATED_LOGS[logIndex]]);
        logIndex++;
      } else {
        clearInterval(logTimer);
      }
    }, logInterval);

    return () => clearInterval(logTimer);
  }, []);

  return (
    <div className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center max-w-5xl mx-auto px-6 py-12">
      {/* Background Matrix/Grid */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none"></div>

      <div className="bg-cyber-card border border-cyber-border rounded-2xl p-8 backdrop-blur-md shadow-2xl relative overflow-hidden flex-grow flex flex-col justify-between">
        
        {/* Glow border overlay */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyber-blue via-cyber-cyan to-cyber-blue animate-pulse"></div>

        {/* Top Info Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-mono text-cyber-blue uppercase tracking-widest">Active Static Sandbox Scan</span>
            <h2 className="text-2xl font-bold font-sans text-slate-100 mt-1">
              Analyzing: <span className="text-cyber-cyan">{fileName || 'QuickPay.apk'}</span>
            </h2>
          </div>
          <div className="flex items-center gap-3 bg-slate-950/60 border border-cyber-border/80 px-4 py-2 rounded-lg font-mono text-sm">
            <Loader className="w-4 h-4 text-cyber-blue animate-spin" />
            <span className="text-slate-300">SYSTEM STATS:</span>
            <span className="text-cyber-green">{Math.round(progress)}%</span>
          </div>
        </div>

        {/* Overall Progress Bar */}
        <div className="w-full bg-slate-950 border border-cyber-border rounded-full h-3 mb-10 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-cyber-blue to-cyber-cyan h-full transition-all duration-75 shadow-[0_0_10px_rgba(6,182,212,0.5)]"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Core Layout: Left Stages, Right Logs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 flex-grow mb-4">
          
          {/* Left Column - Scanning Timeline (5 Stages) */}
          <div className="lg:col-span-5 flex flex-col gap-5 justify-center">
            {STAGES.map((stage, idx) => {
              const isCompleted = idx < currentStageIndex || (progress >= 100);
              const isActive = idx === currentStageIndex && (progress < 100);
              
              return (
                <div 
                  key={stage.id} 
                  className={`flex items-start gap-4 p-4 border rounded-xl transition-all duration-300 ${
                    isActive 
                      ? 'border-cyber-blue bg-cyber-blue/5 glow-blue scale-[1.02]' 
                      : isCompleted 
                        ? 'border-cyber-green/30 bg-cyber-green/5 opacity-80' 
                        : 'border-cyber-border/40 bg-slate-950/20 opacity-50'
                  }`}
                >
                  <div className="mt-0.5">
                    {isCompleted ? (
                      <CheckCircle2 className="w-5 h-5 text-cyber-green" />
                    ) : isActive ? (
                      <Loader className="w-5 h-5 text-cyber-blue animate-spin" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-slate-700 flex items-center justify-center text-[10px] font-mono text-slate-500">
                        {idx + 1}
                      </div>
                    )}
                  </div>
                  <div>
                    <h4 className={`font-semibold text-sm font-sans ${isActive ? 'text-cyber-blue' : isCompleted ? 'text-cyber-green' : 'text-slate-400'}`}>
                      {stage.name}
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{stage.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column - Terminal Shell Logging */}
          <div className="lg:col-span-7 bg-slate-950 border border-cyber-border rounded-xl p-5 font-mono text-xs flex flex-col h-[380px] lg:h-auto overflow-hidden shadow-inner relative">
            <div className="absolute top-0 inset-x-0 bg-slate-900 border-b border-cyber-border px-4 py-2 flex items-center justify-between text-slate-400">
              <span className="flex items-center gap-1.5 font-bold">
                <Terminal className="w-3.5 h-3.5 text-cyber-blue" />
                Triager-CLI v1.4
              </span>
              <span className="h-2 w-2 rounded-full bg-cyber-green animate-pulse"></span>
            </div>
            
            <div className="flex-grow overflow-y-auto mt-6 space-y-2.5 pr-2 pt-2 scrollbar-thin">
              {logs.map((log, index) => {
                let colorClass = "text-slate-400";
                if (log.includes("ALERT:")) colorClass = "text-cyber-red font-semibold";
                else if (log.includes("WARNING:")) colorClass = "text-cyber-amber font-semibold";
                else if (log.includes("Stage [")) colorClass = "text-cyber-blue font-bold border-b border-cyber-blue/10 pb-0.5";
                else if (log.includes("Calculated Risk Score:")) colorClass = "text-cyber-cyan font-bold";
                else if (log.startsWith("MD5") || log.startsWith("SHA256")) colorClass = "text-slate-500";
                
                return (
                  <div key={index} className={`leading-relaxed ${colorClass}`}>
                    <span className="text-slate-600 mr-2 select-none">&gt;&gt;</span>
                    {log}
                  </div>
                );
              })}
              <div ref={logsEndRef} />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
