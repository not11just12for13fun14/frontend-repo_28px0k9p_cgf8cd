import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Footer from './components/Footer';

function SectionCard({ title, children }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm">
      {title ? <h2 className="text-2xl font-semibold text-slate-900 mb-4 font-serif">{title}</h2> : null}
      <div className="prose prose-slate max-w-none leading-relaxed text-[15.5px]" style={{ color: '#333' }}>
        {children}
      </div>
    </section>
  );
}

export default function App() {
  const [tab, setTab] = useState('home');

  const Page = () => {
    switch (tab) {
      case 'home':
        return (
          <div className="space-y-10">
            <Hero onExploreRooms={() => setTab('rooms')} onBookTour={() => setTab('contact')} />
            <SectionCard title="Welcome">
              <div className="space-y-4 max-w-[700px]">
                <p>
                  We believe that when people retire they deserve to continue to live as closely as possible to their previous life. They need a home where individuality is emphasised and with staff who have the time to give attention to the small details.
                </p>
                <p>
                  Our aim is to provide care that includes maintaining our residents’ privacy, independence and dignity whilst at the same time enabling as much choice in all aspects of their lifestyle and care as is possible.
                </p>
                <p>
                  With over 35 years of experience, we at St Georges House pride ourselves on offering a care service for the older person with a personal touch. We are happy to accept residents for long term or respite as and when rooms are available.
                </p>
              </div>
            </SectionCard>
          </div>
        );
      case 'about':
        return (
          <div className="space-y-10">
            <SectionCard title="Residential Home with Distinction">
              <div className="space-y-4 max-w-[700px]">
                <p>
                  We believe that when people retire they deserve to continue to live as closely as possible to their previous life. They need a home where individuality is emphasised and with staff who have the time to give attention to the small details.
                </p>
                <p>
                  Our aim is to provide care that includes maintaining our residents’ privacy, independence and dignity whilst at the same time enabling as much choice in all aspects of their lifestyle and care as is possible.
                </p>
                <p>
                  With over 35 years of experience, we at St Georges House pride ourselves on offering a care service for the older person with a personal touch. We are happy to accept residents for long term or respite as and when rooms are available.
                </p>
              </div>
            </SectionCard>
          </div>
        );
      case 'rooms':
        return (
          <div className="space-y-10">
            <SectionCard title="Rooms & Facilities">
              <ul className="list-disc pl-5 space-y-2 max-w-[700px]">
                <li>16 bedrooms, 12 en-suite, some twin rooms, locked cupboards available</li>
                <li>Ground floor: 9 bedrooms (5 en-suite), Second floor: 7 bedrooms (6 en-suite)</li>
                <li>Social areas: large sitting room, snug, dining room, large walled garden, summer house</li>
                <li>Fully wheelchair accessible, smoke-free</li>
              </ul>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="h-40 rounded-lg border border-slate-200 bg-slate-100 flex items-center justify-center text-slate-400">Bedrooms image</div>
                <div className="h-40 rounded-lg border border-slate-200 bg-slate-100 flex items-center justify-center text-slate-400">Lounge image</div>
                <div className="h-40 rounded-lg border border-slate-200 bg-slate-100 flex items-center justify-center text-slate-400">Garden image</div>
                <div className="h-40 rounded-lg border border-slate-200 bg-slate-100 flex items-center justify-center text-slate-400">Summer house image</div>
              </div>
            </SectionCard>
          </div>
        );
      case 'activities':
        return (
          <div className="space-y-10">
            <SectionCard title="Activities">
              <div className="space-y-3 max-w-[700px]">
                <p>Activities based on residents’ interests: outings, arts & crafts, gardening, games, musical events, buffet parties, monthly fish & chip supper.</p>
                <p>Residents encouraged to request new activities; meetings every six weeks.</p>
                <p>Religious services: Easter & Christmas, Holy Communion monthly, other requests accommodated.</p>
                <p>Pets allowed; staff encouraged to bring pets.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                <div className="h-36 rounded-lg border border-slate-200 bg-slate-100 flex items-center justify-center text-slate-400">Activities image</div>
                <div className="h-36 rounded-lg border border-slate-200 bg-slate-100 flex items-center justify-center text-slate-400">Events image</div>
                <div className="h-36 rounded-lg border border-slate-200 bg-slate-100 flex items-center justify-center text-slate-400">Pets image</div>
              </div>
            </SectionCard>
          </div>
        );
      case 'catering':
        return (
          <div className="space-y-10">
            <SectionCard title="Catering & Dietary Needs">
              <div className="space-y-3 max-w-[700px]">
                <p>Homemade meals, varied, dietary preferences accommodated.</p>
                <p>Hot lunch, hot/cold supper, tea/coffee/cakes throughout the day.</p>
                <p>Celebration drinks: sherry, mulled wine, Pimms, Bucks Fizz, wine, cava.</p>
                <p>Visitors welcome for tea & coffee free of charge.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="h-40 rounded-lg border border-slate-200 bg-slate-100 flex items-center justify-center text-slate-400">Meals image</div>
                <div className="h-40 rounded-lg border border-slate-200 bg-slate-100 flex items-center justify-center text-slate-400">Dining area image</div>
              </div>
            </SectionCard>
          </div>
        );
      case 'staff':
        return (
          <div className="space-y-10">
            <SectionCard title="Our Staff">
              <p className="max-w-[700px]">Experienced care team, cleaners, cooks.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="rounded-lg border border-slate-200 p-4 bg-emerald-50/60">
                  <div className="h-36 rounded bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400 mb-3 shadow-inner">Sarah King headshot</div>
                  <h3 className="font-semibold text-slate-900">Manager: Sarah King</h3>
                  <p className="mt-2 text-slate-700 leading-relaxed">Full bio included.</p>
                </div>
                <div className="rounded-lg border border-slate-200 p-4 bg-sky-50/60">
                  <div className="h-36 rounded bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400 mb-3 shadow-inner">Matthew Lindley headshot</div>
                  <h3 className="font-semibold text-slate-900">Registered Provider: Matthew Lindley</h3>
                  <p className="mt-2 text-slate-700 leading-relaxed">Full bio included.</p>
                </div>
              </div>
              <div className="h-40 rounded-lg border border-slate-200 bg-slate-100 flex items-center justify-center text-slate-400 mt-6">Staff at work image</div>
            </SectionCard>
          </div>
        );
      case 'contact':
        return (
          <div className="space-y-10">
            <SectionCard title="Contact / Locate Us">
              <form className="grid gap-4 max-w-xl">
                <input type="text" placeholder="Name" className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-300" />
                <input type="email" placeholder="Email" className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-300" />
                <textarea placeholder="Message" rows={5} className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-300" />
                <div className="flex gap-3">
                  <button type="button" className="px-4 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 shadow">Book a Tour</button>
                  <button type="button" className="px-4 py-2 rounded-md bg-sky-600 text-white hover:bg-sky-700 shadow">Email Us</button>
                </div>
              </form>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div>
                  <h3 className="font-semibold text-slate-900">Contact Details</h3>
                  <p className="mt-2 text-slate-700">Address: 8 Park Road, Tiverton, Devon EX16 6AU</p>
                  <p className="text-slate-700">Phone: 01884 252436</p>
                  <p className="text-slate-700">Email: st.georgeshouserh@gmail.com</p>
                  <p className="mt-4 text-slate-700">Location: Tiverton, Devon, Exe Valley, nearby parks, canal, seasonal events.</p>
                </div>
                <div className="h-48 rounded-lg border border-slate-200 bg-slate-100 flex items-center justify-center text-slate-400">Map placeholder</div>
              </div>
            </SectionCard>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50/60 via-amber-50/40 to-sky-50/60 text-slate-800">
      <Navbar current={tab} onNavigate={setTab} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 min-w-0">
            <Page />
          </div>
          <Sidebar />
        </div>
      </main>
      <Footer onNavigate={setTab} />
    </div>
  );
}
