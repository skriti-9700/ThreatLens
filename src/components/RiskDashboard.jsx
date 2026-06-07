import React from 'react';
import { ShieldAlert, AlertTriangle, Zap, Server, Network, UserX, AlertCircle, CheckCircle, RefreshCw } from 'lucide-react';

export default function RiskDashboard({ onReset }) {
  // SVG Ring Calculations
  const radius = 60;
  const strokeWidth = 12;
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (82 / 100) * circumference;

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Top Quick Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Score Ring Gauge */}
        <div className="md:col-span-4 bg-cyber-card border border-cyber-border rounded-2xl p-6 flex flex-col items-center justify-center text-center relative overflow-hidden backdrop-blur-md shadow-lg">
          <div className="absolute top-0 right-0 p-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-cyber-red/10 border border-cyber-red/30 rounded text-xs font-mono text-cyber-red">
              <ShieldAlert className="w-3.5 h-3.5" />
              CRITICAL
            </span>
          </div>
          
          <h3 className="text-sm font-mono text-slate-400 uppercase tracking-wider mb-4">APK Risk Index</h3>
          
          <div className="relative flex items-center justify-center mb-4">
            {/* Background Circle */}
            <svg height={radius * 2} width={radius * 2} className="transform -rotate-90">
              <circle
                stroke="#1e293b"
                fill="transparent"
                strokeWidth={strokeWidth}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
              />
              {/* Progress Circle with Glow */}
              <circle
                stroke="#ef4444"
                fill="transparent"
                strokeWidth={strokeWidth}
                strokeDasharray={circumference + ' ' + circumference}
                style={{ strokeDashoffset }}
                strokeLinecap="round"
                r={normalizedRadius}
                cx={radius}
                cy={radius}
                className="filter drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]"
              />
            </svg>
            <div className="absolute flex flex-col items-center justify-center">
              <span className="text-4xl font-extrabold font-mono text-slate-100">82</span>
              <span className="text-xs text-slate-500 font-mono">/ 100</span>
            </div>
          </div>

          <p className="text-xl font-bold text-cyber-red tracking-wide uppercase">High Risk Verdict</p>
          <p className="text-xs text-slate-400 mt-1">Malicious heuristics match spyware payloads.</p>
        </div>

        {/* Verdict Breakdown Card */}
        <div className="md:col-span-8 bg-cyber-card border border-cyber-border rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden backdrop-blur-md shadow-lg">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 h-full">
            
            {/* Stat 1 */}
            <div className="bg-slate-950/40 border border-cyber-border/80 rounded-xl p-4 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Confidence</span>
                <p className="text-3xl font-extrabold font-mono text-cyber-blue mt-1">91%</p>
              </div>
              <p className="text-xs text-slate-400 leading-normal mt-3">High model alignment based on static bytecode matches.</p>
            </div>

            {/* Stat 2 */}
            <div className="bg-slate-950/40 border border-cyber-border/80 rounded-xl p-4 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Threat Class</span>
                <p className="text-lg font-bold text-cyber-amber mt-1.5 truncate">Spyware.SMS</p>
              </div>
              <p className="text-xs text-slate-400 leading-normal mt-3">Classified as financial credentials interception.</p>
            </div>

            {/* Stat 3 */}
            <div className="bg-slate-950/40 border border-cyber-border/80 rounded-xl p-4 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Signature Status</span>
                <p className="text-sm font-semibold text-cyber-red mt-2 flex items-center gap-1.5">
                  <UserX className="w-4 h-4 shrink-0" />
                  Untrusted Dev
                </p>
              </div>
              <p className="text-xs text-slate-400 leading-normal mt-3">Signed with a self-signed certificate, serial mismatches.</p>
            </div>

          </div>

          <div className="mt-4 pt-4 border-t border-cyber-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyber-red animate-pulse"></span>
              <span>Specimen Triaged: com.quickpay.sec.wallet</span>
            </div>
            
            <button 
              onClick={onReset}
              className="px-4 py-1.5 bg-slate-900 border border-cyber-border text-xs font-mono text-slate-300 hover:text-slate-100 hover:border-cyber-blue/40 rounded transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Analyze Another APK
            </button>
          </div>
        </div>

      </div>

      {/* Main Breakdown: Left Threat Indicators, Right Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Side: Threat Indicators (Findings) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-cyber-card border border-cyber-border rounded-2xl p-6 backdrop-blur-md shadow-lg">
            <h3 className="text-lg font-bold text-slate-200 mb-6 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-cyber-red" />
              Critical Security Findings
            </h3>

            <div className="space-y-4">
              {/* Finding 1 */}
              <div className="p-4 border border-cyber-red/30 bg-cyber-red/5 rounded-xl flex items-start gap-4">
                <div className="w-8 h-8 rounded bg-cyber-red/10 border border-cyber-red/20 flex items-center justify-center text-cyber-red shrink-0 mt-0.5">
                  <ShieldAlert className="w-4 h-4" />
                </div>
                <div className="flex-grow min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-semibold font-mono text-sm text-slate-200">Permission: READ_SMS</h4>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 bg-cyber-red/20 text-cyber-red border border-cyber-red/30 rounded">HIGH RISK</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Enables reading incoming and stored SMS messages. Often exploited by trojans to intercept 2FA codes and transactional OTP alerts.
                  </p>
                </div>
              </div>

              {/* Finding 2 */}
              <div className="p-4 border border-cyber-red/30 bg-cyber-red/5 rounded-xl flex items-start gap-4">
                <div className="w-8 h-8 rounded bg-cyber-red/10 border border-cyber-red/20 flex items-center justify-center text-cyber-red shrink-0 mt-0.5">
                  <ShieldAlert className="w-4 h-4" />
                </div>
                <div className="flex-grow min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-semibold font-mono text-sm text-slate-200">Permission: READ_CONTACTS</h4>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 bg-cyber-red/20 text-cyber-red border border-cyber-red/30 rounded">HIGH RISK</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Grants query rights over user contacts list. Enables harvesting telephone rosters for command-and-control server backlists.
                  </p>
                </div>
              </div>

              {/* Finding 3 */}
              <div className="p-4 border border-cyber-amber/30 bg-cyber-amber/5 rounded-xl flex items-start gap-4">
                <div className="w-8 h-8 rounded bg-cyber-amber/10 border border-cyber-amber/20 flex items-center justify-center text-cyber-amber shrink-0 mt-0.5">
                  <Network className="w-4 h-4" />
                </div>
                <div className="flex-grow min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-semibold font-mono text-sm text-slate-200">Suspicious Domains Queried</h4>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 bg-cyber-amber/20 text-cyber-amber border border-cyber-amber/30 rounded">SUSPECT</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Discovered outbound URL: <code className="bg-slate-900 border border-cyber-border px-1 py-0.5 text-cyber-amber">http://api-secure-gateway-pay.com/sys/sms</code>. Classified as an unregistered/suspicious command & control endpoint.
                  </p>
                </div>
              </div>

              {/* Finding 4 */}
              <div className="p-4 border border-cyber-amber/30 bg-cyber-amber/5 rounded-xl flex items-start gap-4">
                <div className="w-8 h-8 rounded bg-cyber-amber/10 border border-cyber-amber/20 flex items-center justify-center text-cyber-amber shrink-0 mt-0.5">
                  <Server className="w-4 h-4" />
                </div>
                <div className="flex-grow min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-semibold font-mono text-sm text-slate-200">Bytecode Obfuscation Detected</h4>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 bg-cyber-amber/20 text-cyber-amber border border-cyber-amber/30 rounded">SUSPECT</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Class names, package layout, and critical methods are heavily obfuscated (renamed to <code className="bg-slate-900 border border-cyber-border px-1 py-0.5 text-cyber-amber">a.b.c.d</code>) to hinder inspection and signature verification.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Right Side: Charts & Recommendations */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Custom SVG Charts panel */}
          <div className="bg-cyber-card border border-cyber-border rounded-2xl p-6 backdrop-blur-md shadow-lg">
            <h3 className="text-sm font-mono text-slate-400 uppercase tracking-wider mb-6">Threat Factor Breakdown</h3>
            
            <div className="space-y-4">
              
              {/* Factor 1 */}
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-1">
                  <span>Permission Profile Risk</span>
                  <span className="text-cyber-red font-bold">95%</span>
                </div>
                <div className="w-full bg-slate-950 border border-cyber-border h-2 rounded-full overflow-hidden">
                  <div className="h-full bg-cyber-red" style={{ width: '95%' }}></div>
                </div>
              </div>

              {/* Factor 2 */}
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-1">
                  <span>Network API Risk</span>
                  <span className="text-cyber-red font-bold">92%</span>
                </div>
                <div className="w-full bg-slate-950 border border-cyber-border h-2 rounded-full overflow-hidden">
                  <div className="h-full bg-cyber-red" style={{ width: '92%' }}></div>
                </div>
              </div>

              {/* Factor 3 */}
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-1">
                  <span>Bytecode Evasion Factor</span>
                  <span className="text-cyber-amber font-bold">78%</span>
                </div>
                <div className="w-full bg-slate-950 border border-cyber-border h-2 rounded-full overflow-hidden">
                  <div className="h-full bg-cyber-amber" style={{ width: '78%' }}></div>
                </div>
              </div>

              {/* Factor 4 */}
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-1">
                  <span>Manifest Vulnerability</span>
                  <span className="text-cyber-blue font-bold">65%</span>
                </div>
                <div className="w-full bg-slate-950 border border-cyber-border h-2 rounded-full overflow-hidden">
                  <div className="h-full bg-cyber-blue" style={{ width: '65%' }}></div>
                </div>
              </div>

            </div>
          </div>

          {/* Actionable Recommendations */}
          <div className="bg-cyber-card border border-cyber-border rounded-2xl p-6 backdrop-blur-md shadow-lg">
            <h3 className="text-sm font-mono text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-cyber-green" />
              Incident Recommendations
            </h3>

            <ul className="space-y-3.5">
              <li className="flex items-start gap-2.5 text-xs text-slate-300 leading-normal">
                <span className="w-1.5 h-1.5 rounded-full bg-cyber-blue mt-1.5 shrink-0"></span>
                <span>
                  <strong className="text-slate-100">Network Block:</strong> Configure MDM gateway proxies to refuse traffic matching outbound routes to <code className="text-cyber-cyan">api-secure-gateway-pay.com</code>.
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-slate-300 leading-normal">
                <span className="w-1.5 h-1.5 rounded-full bg-cyber-blue mt-1.5 shrink-0"></span>
                <span>
                  <strong className="text-slate-100">Broadcast Audits:</strong> Inspect receiver flags in com.quickpay; disable bootstrap system receiver triggers for SMS broadcasts.
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-slate-300 leading-normal">
                <span className="w-1.5 h-1.5 rounded-full bg-cyber-blue mt-1.5 shrink-0"></span>
                <span>
                  <strong className="text-slate-100">De-obfuscation Triage:</strong> Extract full classes.dex mapping and compile dynamic reflection calls during dynamic sandbox runtime checks.
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-slate-300 leading-normal">
                <span className="w-1.5 h-1.5 rounded-full bg-cyber-blue mt-1.5 shrink-0"></span>
                <span>
                  <strong className="text-slate-100">User MDM Flagging:</strong> Push an immediate security flag block matching SHA256 checksum tags in local application white-list policies.
                </span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}
