import React from 'react';

export default function Footer({ onNavigate }) {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-emerald-50/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h4 className="font-semibold text-slate-900 font-serif">Contact</h4>
          <p className="mt-2 text-sm text-slate-700 leading-relaxed">8 Park Road, Tiverton, Devon EX16 6AU</p>
          <p className="text-sm text-slate-700">Phone: 01884 252436</p>
          <p className="text-sm text-slate-700">Email: st.georgeshouserh@gmail.com</p>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900 font-serif">Pages</h4>
          <ul className="mt-2 text-sm text-slate-700 space-y-1">
            {[
              ['home','Home'],['about','About Us'],['rooms','Rooms & Facilities'],['activities','Activities'],['catering','Catering & Dietary Needs'],['staff','Staff'],['contact','Contact/Locate Us']
            ].map(([key,label]) => (
              <li key={key}>
                <button onClick={() => onNavigate(key)} className="hover:text-emerald-700 transition-colors">{label}</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-start gap-4">
          <div className="h-12 w-12 rounded bg-white border border-slate-200 flex items-center justify-center text-slate-400 shadow-sm">CQC</div>
          <div>
            <div className="text-sm font-semibold text-slate-800">CQC overall rating: Requires Improvement (11 August 2023)</div>
            <div className="text-xs text-slate-600">Safe – Good, Effective – Good, Caring – Good, Responsive – Good, Well-Led – Good</div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-sm text-slate-600">St Georges House ©</div>
    </footer>
  );
}
