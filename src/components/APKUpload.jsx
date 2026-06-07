import React, { useState } from 'react';
import { UploadCloud, File, AlertCircle, X, ShieldAlert, Cpu } from 'lucide-react';

export default function APKUpload({ onUploadComplete, onBack }) {
  const [isDragActive, setIsDragActive] = useState(false);
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragActive(true);
    } else if (e.type === "dragleave") {
      setIsDragActive(false);
    }
  };

  const processFile = (selectedFile) => {
    if (!selectedFile) return;

    // Check extension
    const extension = selectedFile.name.split('.').pop().toLowerCase();
    if (extension !== 'apk') {
      setError("Unsupported file format. Please upload an Android Package (.apk) file.");
      setFile(null);
      return;
    }

    setError(null);
    setFile({
      name: selectedFile.name,
      size: (selectedFile.size / (1024 * 1024)).toFixed(2) + ' MB',
      raw: selectedFile
    });
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const handleSelectSample = () => {
    setError(null);
    setFile({
      name: 'QuickPay.apk',
      size: '14.2 MB',
      isSample: true
    });
  };

  const handleClear = () => {
    setFile(null);
    setError(null);
  };

  const handleUploadSubmit = async () => {
    if (!file || !file.raw) return;

    try {
      const formData = new FormData();
      formData.append("file", file.raw);

      const response = await fetch("http://127.0.0.1:8000/analyze", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      console.log(result);

      onUploadComplete(result);
    } catch (error) {
      console.error(error);
      setError("Failed to connect to ThreatLens backend.");
    }
  };

  return (
    <div className="relative min-h-[calc(100vh-80px)] flex items-center justify-center p-6 overflow-hidden">
      {/* Background Matrix/Grid effect */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none"></div>

      <div className="relative w-full max-w-2xl bg-cyber-card border border-cyber-border rounded-2xl p-8 backdrop-blur-md shadow-2xl">
        {/* Glow accent */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyber-blue/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyber-cyan/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold font-sans text-slate-100 flex items-center justify-center gap-2">
            <UploadCloud className="w-8 h-8 text-cyber-blue animate-pulse" />
            Upload Target APK
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Provide the compiled package to trigger the static decompilation scan and security analysis.
          </p>
        </div>

        {/* File Drag and Drop Zone */}
        {!file ? (
          <div
            onDragEnter={handleDrag}
            onDragOver={handleDrag}
            onDragLeave={handleDrag}
            onDrop={handleDrop}
            className={`relative min-h-[280px] border-2 border-dashed rounded-xl flex flex-col items-center justify-center p-8 text-center transition-all duration-300 ${isDragActive
              ? 'border-cyber-blue bg-cyber-blue/5 scale-[0.99] shadow-[0_0_15px_rgba(59,130,246,0.3)]'
              : 'border-cyber-border hover:border-cyber-blue/40 bg-slate-950/40 hover:bg-slate-900/20'
              }`}
          >
            <input
              type="file"
              id="file-upload"
              accept=".apk"
              className="absolute inset-0 opacity-0 cursor-pointer"
              onChange={handleChange}
            />

            <div className="w-16 h-16 rounded-full bg-slate-900 border border-cyber-border/80 flex items-center justify-center text-slate-400 mb-4 group-hover:scale-105 transition-all">
              <UploadCloud className="w-8 h-8 text-cyber-blue/80" />
            </div>

            <p className="text-lg font-medium text-slate-200">
              Drag and drop your APK file here
            </p>
            <p className="text-sm text-slate-500 mt-1 mb-4">
              or click to browse your local machine
            </p>
            <div className="px-3 py-1 bg-slate-900/60 border border-cyber-border/40 rounded text-xs font-mono text-slate-400">
              Supported type: .apk (Max 150MB)
            </div>
          </div>
        ) : (
          /* File Selected State */
          <div className="border border-cyber-blue/40 bg-cyber-blue/5 rounded-xl p-6 relative overflow-hidden shadow-[0_0_15px_rgba(59,130,246,0.1)]">
            <div className="absolute top-0 right-0 p-2">
              <button
                onClick={handleClear}
                className="p-1 hover:bg-cyber-blue/20 rounded-full text-slate-400 hover:text-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-cyber-blue/10 border border-cyber-blue/30 flex items-center justify-center text-cyber-blue shrink-0">
                <File className="w-6 h-6" />
              </div>
              <div className="flex-grow min-w-0">
                <h4 className="text-lg font-semibold text-slate-200 truncate pr-6">{file.name}</h4>
                <p className="text-sm font-mono text-slate-400">{file.size}</p>

                {file.isSample && (
                  <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-cyber-cyan/10 border border-cyber-cyan/30 rounded text-xs font-mono text-cyber-cyan">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>Loaded Sandbox Specimen</span>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6 flex gap-3 border-t border-cyber-blue/10 pt-4">
              <button
                onClick={handleUploadSubmit}
                className="flex-grow py-3 bg-cyber-blue hover:bg-blue-600 text-slate-100 font-semibold rounded-lg flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all"
              >
                <span>Decompile & Triage Target</span>
              </button>
            </div>
          </div>
        )}

        {/* Error Messaging */}
        {error && (
          <div className="mt-4 p-4 border border-cyber-red/30 bg-cyber-red/5 text-cyber-red rounded-lg flex items-start gap-3 text-sm animate-shake">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">Format Verification Failure</p>
              <p className="opacity-90">{error}</p>
            </div>
          </div>
        )}

        {/* Quick Sample Selector for Demo Ease */}
        <div className="mt-8 border-t border-cyber-border/40 pt-6 flex flex-col items-center">
          <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-3">Or Run Prototype Demonstration</p>
          <button
            onClick={handleSelectSample}
            className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 border border-cyber-border hover:border-cyber-blue/40 text-slate-300 font-mono text-sm rounded-lg flex items-center gap-2.5 transition-all cursor-pointer"
          >
            <ShieldAlert className="w-4 h-4 text-cyber-blue" />
            <span>Load Sample: QuickPay.apk</span>
          </button>
        </div>

        {/* Back navigation */}
        <div className="mt-6 text-center">
          <button
            onClick={onBack}
            className="text-xs font-mono text-slate-500 hover:text-slate-300 transition-colors uppercase tracking-widest cursor-pointer"
          >
            ← Cancel and Return
          </button>
        </div>
      </div>
    </div>
  );
}
