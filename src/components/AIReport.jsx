import React from 'react';
import { Cpu, FileText, ArrowRight, ShieldCheck, HelpCircle, ExternalLink, HelpCircle as HelpIcon, Lock } from 'lucide-react';

export default function AIReport() {
  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* AI Header Card */}
      <div className="bg-cyber-card border border-cyber-border rounded-2xl p-6 relative overflow-hidden backdrop-blur-md shadow-lg">
        {/* Glow corner background */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-blue/15 rounded-full blur-2xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyber-cyan/15 rounded-full blur-2xl pointer-events-none"></div>

        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-tr from-cyber-blue to-cyber-cyan flex items-center justify-center text-slate-100 shrink-0 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            <Cpu className="w-7 h-7 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 bg-cyber-blue/20 text-cyber-blue border border-cyber-blue/30 rounded text-xs font-mono font-bold tracking-wider">THREAT ENGINE ALPHA</span>
              <span className="text-xs text-slate-500 font-mono">Report generated: 2026-06-06 17:24 UTC</span>
            </div>
            <h2 className="text-2xl font-bold font-sans text-slate-100 mt-1">AI-Assisted Security Summary</h2>
            <p className="text-slate-400 text-sm mt-0.5 leading-relaxed">
              Automated behavioral translation and signature triage of <span className="text-cyber-cyan font-mono font-semibold">QuickPay.apk</span>.
            </p>
          </div>
        </div>
      </div>

      {/* Grid: Executive Briefing & Forensic Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Side: Executive Summary Narrative */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Executive Briefing */}
          <div className="bg-cyber-card border border-cyber-border rounded-2xl p-6 backdrop-blur-md shadow-lg space-y-4">
            <h3 className="text-lg font-bold font-sans text-slate-200 border-b border-cyber-border/60 pb-3 flex items-center gap-2">
              <FileText className="w-5 h-5 text-cyber-blue" />
              Executive Security Briefing
            </h3>
            
            <p className="text-sm text-slate-300 leading-relaxed">
              Following decompilation and static bytecode analysis of <span className="text-cyber-cyan font-semibold">QuickPay.apk</span>, our AI threat modeling pipeline has classified this application as a <span className="text-cyber-red font-semibold">High-Risk Spyware Trojan</span>. The target package purports to be a mobile transactional portal, but embeds behavior profiles that are characteristic of credential theft and transaction hijacking software.
            </p>
            
            <p className="text-sm text-slate-300 leading-relaxed font-semibold">
              Primary Threat Vector:
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              The application leverages intrusive system hooks to read incoming SMS broadcasts, harvesting 2FA tokens, mobile verification links, and OTP keys. Captured credentials and targeted user files are packages into encrypted containers and leaked to unregistered network endpoints.
            </p>

            <div className="p-4 bg-slate-950/60 border border-cyber-border rounded-xl space-y-2">
              <p className="text-xs font-mono font-bold text-slate-400">ANALYSIS CRITERIA ASSESSMENT:</p>
              <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                <div>
                  <span className="text-slate-500">Heuristics Tag:</span> <span className="text-cyber-red">Spyware.SMSThief</span>
                </div>
                <div>
                  <span className="text-slate-500">Invasive Index:</span> <span className="text-cyber-red">9.4 / 10.0</span>
                </div>
                <div>
                  <span className="text-slate-500">Signature Status:</span> <span className="text-cyber-amber">Unverified Signer</span>
                </div>
                <div>
                  <span className="text-slate-500">Entropy Score:</span> <span className="text-cyber-cyan">7.24 (High Packing)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Forensic Technical Assessment */}
          <div className="bg-cyber-card border border-cyber-border rounded-2xl p-6 backdrop-blur-md shadow-lg space-y-6">
            <h3 className="text-lg font-bold font-sans text-slate-200 border-b border-cyber-border/60 pb-3">Forensic Bytecode Findings</h3>

            <div className="space-y-6">
              
              {/* Finding Detail 1 */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-sm text-slate-200 font-mono">1. Permission Abuse: READ_SMS & RECEIVE_SMS</h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-cyber-red/20 text-cyber-red border border-cyber-red/30 rounded">INTRUSIVE API</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Upon system startup (triggered by <code className="text-cyber-cyan">RECEIVE_BOOT_COMPLETED</code>), the application initializes a background content observer registering listeners on <code className="text-cyber-cyan">content://sms/inbox</code>. Smali decompiled lines in class <code className="text-slate-300">com/quickpay/sync/SMSService</code> match structures that capture inbound transaction messages, and isolate verification tokens.
                </p>
              </div>

              {/* Finding Detail 2 */}
              <div className="space-y-2 border-t border-cyber-border/40 pt-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-sm text-slate-200 font-mono">2. Permission Abuse: READ_CONTACTS</h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-cyber-red/20 text-cyber-red border border-cyber-red/30 rounded">INTRUSIVE API</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  The application decompiles query sequences requesting phone numbers, names, and contact parameters. This capability allows the spyware to harvest the local social roster. This is typically used to launch secondary SMS phishing campaigns or map the targets network relations.
                </p>
              </div>

              {/* Finding Detail 3 */}
              <div className="space-y-2 border-t border-cyber-border/40 pt-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-sm text-slate-200 font-mono">3. Network Analysis: Hardcoded C2 Endpoints</h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-cyber-amber/20 text-cyber-amber border border-cyber-amber/30 rounded">HOSTILE PATHS</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  The code inspection revealed strings mapping static URL paths. Outbound HTTP posts target <code className="text-cyber-amber">http://api-secure-gateway-pay.com/sys/sms</code>. Dynamic analysis lookup checks indicate the domain was registered recently (within 45 days) using anonymous registrar proxies, hosting no authentic website operations.
                </p>
              </div>

              {/* Finding Detail 4 */}
              <div className="space-y-2 border-t border-cyber-border/40 pt-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-sm text-slate-200 font-mono">4. Evasion & Anti-Analysis: Bytecode Packing</h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-cyber-amber/20 text-cyber-amber border border-cyber-amber/30 rounded">EVASION PROFILES</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  The application code shows sign of custom string encryption and class file obfuscation. Package naming conventions are renamed to singular characters, and APIs such as <code className="text-cyber-cyan">java.lang.reflect.Method.invoke()</code> are heavily used to hide true library execution routes from basic antivirus scanning tools.
                </p>
              </div>

            </div>
          </div>
          
        </div>

        {/* Right Side: Security Assessment Stats & Signatures */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Risk Signatures Summary */}
          <div className="bg-cyber-card border border-cyber-border rounded-2xl p-6 backdrop-blur-md shadow-lg space-y-4">
            <h3 className="text-sm font-mono text-slate-400 uppercase tracking-wider">Mitigation Checklist</h3>
            
            <div className="space-y-3.5">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-cyber-red/20 border border-cyber-red/40 flex items-center justify-center text-[10px] font-bold text-cyber-red shrink-0">!</div>
                <span className="text-xs text-slate-300">Disable SMS permissions on device immediately</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-cyber-red/20 border border-cyber-red/40 flex items-center justify-center text-[10px] font-bold text-cyber-red shrink-0">!</div>
                <span className="text-xs text-slate-300">Revoke startup broadcast receiver execution</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-cyber-red/20 border border-cyber-red/40 flex items-center justify-center text-[10px] font-bold text-cyber-red shrink-0">!</div>
                <span className="text-xs text-slate-300">Block network DNS resolves to com.quickpay</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-cyber-green/20 border border-cyber-green/40 flex items-center justify-center text-cyber-green shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs text-slate-300">Enforce enterprise certificate white-listing</span>
              </div>
            </div>
          </div>

          {/* AI Security Rating Gauge */}
          <div className="bg-cyber-card border border-cyber-border rounded-2xl p-6 backdrop-blur-md shadow-lg space-y-4">
            <h3 className="text-sm font-mono text-slate-400 uppercase tracking-wider">AI Classification Confidence</h3>
            
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-extrabold font-mono text-cyber-blue">91.4%</span>
              <span className="text-xs text-slate-500 font-mono">Accuracy Rating</span>
            </div>
            
            <div className="space-y-2 text-xs text-slate-400 leading-relaxed">
              <p>The rating is based on comparative vector weights matched against 240,000 Android malware samples in the ThreatLens registry.</p>
              <div className="h-1.5 w-full bg-slate-950 border border-cyber-border rounded-full overflow-hidden">
                <div className="h-full bg-cyber-blue" style={{ width: '91%' }}></div>
              </div>
            </div>
          </div>

          {/* Verification Signatures */}
          <div className="bg-cyber-card border border-cyber-border rounded-2xl p-6 backdrop-blur-md shadow-lg space-y-3 font-mono text-[11px]">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Forensic Checksums</h3>
            <div>
              <span className="text-slate-500 block">MD5</span>
              <span className="text-slate-300 break-all select-all">c4ca4238a0b923820dcc509a6f75849b</span>
            </div>
            <div>
              <span className="text-slate-500 block">SHA-1</span>
              <span className="text-slate-300 break-all select-all">356a192b7913b04c54574d18c28d46e6395428ab</span>
            </div>
            <div>
              <span className="text-slate-500 block">SHA-256</span>
              <span className="text-slate-300 break-all select-all">e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
