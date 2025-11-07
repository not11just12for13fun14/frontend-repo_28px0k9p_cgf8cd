import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid gap-6 md:grid-cols-3 items-center">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400">CQC</div>
          <div>
            <div className="text-sm font-semibold text-slate-800">CQC overall rating: Requires Improvement (11 August 2023)</div>
            <div className="text-xs text-slate-600">Safe – Good, Effective – Good, Caring – Good, Responsive – Good, Well-Led – Good</div>
          </div>
        </div>
        <div className="text-sm text-slate-600 md:text-center">St Georges House ©</div>
        <div className="md:text-right text-sm text-slate-600">Residential Care Home • Tiverton, Devon</div>
      </div>
    </footer>
  );
}
