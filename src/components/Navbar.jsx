import React from 'react';

const tabs = [
  { key: 'home', label: 'Home' },
  { key: 'about', label: 'About Us' },
  { key: 'rooms', label: 'Rooms & Facilities' },
  { key: 'activities', label: 'Activities' },
  { key: 'catering', label: 'Catering & Dietary Needs' },
  { key: 'staff', label: 'Staff' },
  { key: 'contact', label: 'Contact/Locate Us' },
];

export default function Navbar({ current, onNavigate }) {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-rose-200 flex items-center justify-center text-rose-700 font-bold">SG</div>
            <div>
              <div className="text-lg font-semibold text-slate-800">St George’s House</div>
              <div className="text-xs text-slate-500">Residential Care Home</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-2">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => onNavigate(t.key)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  current === t.key
                    ? 'bg-rose-100 text-rose-800'
                    : 'text-slate-700 hover:text-rose-700 hover:bg-rose-50'
                }`}
                aria-current={current === t.key ? 'page' : undefined}
              >
                {t.label}
              </button>
            ))}
          </nav>
          <div className="md:hidden">
            <select
              className="border rounded-md px-2 py-2 text-sm"
              value={current}
              onChange={(e) => onNavigate(e.target.value)}
              aria-label="Navigate"
            >
              {tabs.map((t) => (
                <option key={t.key} value={t.key}>{t.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </header>
  );
}
