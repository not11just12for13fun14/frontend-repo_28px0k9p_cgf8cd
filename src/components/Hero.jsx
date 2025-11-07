import React from 'react';

export default function Hero({ onExploreRooms, onBookTour }) {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50 via-sky-50 to-amber-50 border border-slate-200">
      <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden>
        <div className="absolute -top-10 -left-10 h-64 w-64 bg-emerald-300 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 h-72 w-72 bg-sky-300 blur-3xl rounded-full" />
      </div>
      <div className="relative grid lg:grid-cols-2 gap-8 p-8 lg:p-12 items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 font-serif">A Home with Heart – St George’s House</h1>
          <p className="mt-4 text-lg text-slate-700 max-w-2xl leading-relaxed">Providing high-quality care with dignity, independence, and personal attention for over 35 years.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button onClick={onExploreRooms} className="px-5 py-3 rounded-lg bg-emerald-600 text-white shadow hover:bg-emerald-700 transition-colors">Explore Rooms</button>
            <button onClick={onBookTour} className="px-5 py-3 rounded-lg bg-sky-600 text-white shadow hover:bg-sky-700 transition-colors">Book a Tour</button>
          </div>
        </div>
        <div className="aspect-[4/3] w-full bg-slate-100 rounded-xl border border-slate-200 flex items-center justify-center text-slate-400 shadow-inner">
          <span className="text-sm">Hero image placeholder</span>
        </div>
      </div>
    </section>
  );
}
