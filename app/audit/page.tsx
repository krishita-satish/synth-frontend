'use client';

import { useState } from 'react';
import { ArrowRight, Upload, Sparkles, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import Link from 'next/link';

const API_URL = (process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000').replace(/\/$/, '');

export default function AuditPage() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [reportData, setReportData] = useState<any>(null);

  // Handle file selection
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files));
      setUploadStatus('idle');
    }
  };

  // Handle file upload to backend
  const handleUpload = async () => {
    if (selectedFiles.length === 0) return;

    setIsUploading(true);
    setUploadStatus('idle');
    setError(null);

    try {
      const formData = new FormData();

      // Add all files to FormData
      selectedFiles.forEach((file) => {
        formData.append('files', file);
      });

      const response = await fetch(`${API_URL}/audit`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        let errorMsg = 'Upload failed';
        try {
          const errorData = await response.json();
          errorMsg = errorData.detail || errorMsg;
        } catch (e) {
          // Fallback to text if JSON fails
          errorMsg = await response.text() || errorMsg;
        }
        throw new Error(errorMsg);
      }

      const result = await response.json();
      setReportData(result);
      setUploadStatus('success');

    } catch (err: any) {
      console.error('Upload error:', err);
      setError(err.message);
      setUploadStatus('error');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <main className="min-h-screen bg-primaryBg relative overflow-hidden flex flex-col pt-32 pb-20">
      {/* Background effects */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-accentGreen rounded-full opacity-10 blur-[120px] animate-glow pointer-events-none" />
      <div className="fixed top-1/3 right-1/4 w-[500px] h-[500px] bg-accentGlow rounded-full opacity-10 blur-[140px] animate-glow pointer-events-none" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32">
        <div className="text-center mb-12">
          <Link href="/" className="inline-flex items-center gap-2 text-secondaryText hover:text-accentGreen transition-colors mb-8">
            ← Back to Home
          </Link>

          <h1 className="text-5xl md:text-7xl font-bold font-display mb-6">
            Start Your <span className="gradient-text">Free Audit</span>
          </h1>
          <p className="text-xl text-secondaryText max-w-2xl mx-auto">
            Upload your business files and get AI-powered insights in minutes.
          </p>
        </div>

        {/* Upload area */}
        <div className="glass p-12 rounded-3xl text-center mb-8">
          <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-accentGreen to-accentGlow flex items-center justify-center">
            <Upload size={48} className="text-white" />
          </div>

          <h2 className="text-2xl font-bold mb-4">Upload Your Business Data</h2>
          <p className="text-secondaryText mb-8">
            Drop your files here or click to browse
            <br />
            <span className="text-sm">Supports: PDF, CSV, XLSX, TXT, Images, Emails</span>
          </p>

          <div className="max-w-md mx-auto space-y-4">
            {/* File input */}
            <div className="relative">
              <input
                type="file"
                multiple
                onChange={handleFileSelect}
                className="hidden"
                id="file-upload"
                accept=".pdf,.csv,.xlsx,.xls,.txt,.png,.jpg,.jpeg,.eml"
              />
              <label
                htmlFor="file-upload"
                className="block w-full btn-primary bg-borderColor/30 hover:bg-borderColor/50 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 cursor-pointer transition-all border border-borderColor hover:border-accentGreen"
              >
                <Upload size={20} />
                Choose Files
              </label>
            </div>

            {/* Selected files display */}
            {selectedFiles.length > 0 && (
              <div className="glass p-4 rounded-lg text-left">
                <p className="text-sm font-semibold mb-2">Selected Files:</p>
                <ul className="text-sm text-secondaryText space-y-1">
                  {selectedFiles.map((file, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-accentGreen" />
                      {file.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Upload button */}
            {selectedFiles.length > 0 && (
              <button
                onClick={handleUpload}
                disabled={isUploading}
                className="w-full btn-primary bg-accentGreen hover:bg-accentGlow text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isUploading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Sparkles size={20} />
                    Start AI Analysis
                  </>
                )}
              </button>
            )}

            {/* Status messages */}
            {uploadStatus === 'success' && (
              <div className="glass p-4 rounded-lg border-l-4 border-accentGreen">
                <div className="flex items-center gap-2 text-accentGreen">
                  <CheckCircle size={20} />
                  <p className="font-semibold">Analysis Complete!</p>
                </div>
                <p className="text-sm text-secondaryText mt-2">Your audit report is ready.</p>
              </div>
            )}

            {uploadStatus === 'error' && (
              <div className="glass p-4 rounded-lg border-l-4 border-red-500">
                <div className="flex items-center gap-2 text-red-500">
                  <AlertCircle size={20} />
                  <p className="font-semibold">Upload Failed</p>
                </div>
                <p className="text-sm text-secondaryText mt-2">
                  {error || `Please make sure your backend is running at ${API_URL}`}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* How it works */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <StepCard
            number="1"
            title="Upload Data"
            description="Share your business files securely"
          />
          <StepCard
            number="2"
            title="AI Analysis"
            description="Our engine processes your workflows"
          />
          <StepCard
            number="3"
            title="Get Report"
            description="Receive actionable insights instantly"
          />
        </div>

        {/* Integration note */}
        <div className="glass p-6 rounded-xl border-l-4 border-accentGreen">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <Sparkles size={20} className="text-accentGreen" />
            Backend Connection
          </h3>
          <div className="text-sm text-secondaryText space-y-2">
            <p>
              Connected to: <code className="px-2 py-1 bg-borderColor rounded">{API_URL}/audit</code>
            </p>
            <p className="text-xs">
              ✅ Backend is running! Upload files to test the integration.
            </p>
          </div>
        </div>

        {/* Display report data if available */}
        {reportData && (
          <div className="glass p-8 rounded-2xl mt-8">
            <h3 className="text-2xl font-bold mb-6">📊 Your Audit Report</h3>

            {/* Key Metrics */}
            {reportData.audit_results && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-borderColor/30 p-4 rounded-lg">
                  <p className="text-sm text-secondaryText mb-1">Annual Time Savings</p>
                  <p className="text-2xl font-bold text-accentGreen">
                    {reportData.audit_results.time_saved_annually}
                  </p>
                </div>
                <div className="bg-borderColor/30 p-4 rounded-lg">
                  <p className="text-sm text-secondaryText mb-1">Cost Reduction</p>
                  <p className="text-2xl font-bold text-accentGreen">
                    {reportData.audit_results.cost_reduction_annually}
                  </p>
                </div>
                <div className="bg-borderColor/30 p-4 rounded-lg">
                  <p className="text-sm text-secondaryText mb-1">Automation Score</p>
                  <p className="text-2xl font-bold text-accentGreen">
                    {reportData.audit_results.automation_score}
                  </p>
                </div>
                <div className="bg-borderColor/30 p-4 rounded-lg">
                  <p className="text-sm text-secondaryText mb-1">Messages Analyzed</p>
                  <p className="text-2xl font-bold text-accentGreen">
                    {reportData.total_messages_analyzed}
                  </p>
                </div>
              </div>
            )}

            {/* Recommendations */}
            {reportData.audit_results?.recommendations && (
              <div className="mb-6">
                <h4 className="font-semibold mb-3">💡 Recommendations:</h4>
                <ul className="space-y-2">
                  {reportData.audit_results.recommendations.map((rec: string, i: number) => (
                    <li key={i} className="text-sm text-secondaryText flex items-start gap-2">
                      <span className="text-accentGreen">•</span>
                      {rec}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Download PDF button */}
            {reportData.pdf_available && (
              <a
                href={`${API_URL}/download-report/`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-accentGreen hover:bg-accentGlow text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2"
              >
                <Upload size={20} />
                Download Full PDF Report
              </a>
            )}
          </div>
        )}
      </div>
    </main>
  );
}

function StepCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="glass p-6 rounded-xl text-center">
      <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-accentGreen to-accentGlow flex items-center justify-center text-white font-bold text-xl">
        {number}
      </div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-secondaryText">{description}</p>
    </div>
  );
}