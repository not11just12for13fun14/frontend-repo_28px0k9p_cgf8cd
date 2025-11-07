import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Footer from './components/Footer';

function Section({ title, children }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6">
      {title ? <h2 className="text-2xl font-semibold text-slate-900 mb-4">{title}</h2> : null}
      <div className="prose prose-slate max-w-none">
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
          <div className="space-y-8">
            <Hero onExploreRooms={() => setTab('rooms')} onBookTour={() => setTab('contact')} />
            <Section title="Welcome">
              <p>
                We believe that when people retire they deserve to continue to live as closely as possible to their previous life. They need a home where individuality is emphasised and with staff who have the time to give attention to the small details.
              </p>
              <p>
                Our aim is to provide care that includes maintaining our residents’ privacy, independence and dignity whilst at the same time enabling as much choice in all aspects of their lifestyle and care as is possible.
              </p>
              <p>
                With over 35 years of experience, we at St Georges House pride ourselves on offering a care service for the older person with a personal touch. We are happy to accept residents for long term or respite as and when rooms are available.
              </p>
            </Section>
          </div>
        );
      case 'about':
        return (
          <div className="space-y-8">
            <Section title="Residential Home with Distinction">
              <p>
                We believe that when people retire they deserve to continue to live as closely as possible to their previous life. They need a home where individuality is emphasised and with staff who have the time to give attention to the small details.
              </p>
              <p>
                Our aim is to provide care that includes maintaining our residents’ privacy, independence and dignity whilst at the same time enabling as much choice in all aspects of their lifestyle and care as is possible.
              </p>
              <p>
                With over 35 years of experience, we at St Georges House pride ourselves on offering a care service for the older person with a personal touch. We are happy to accept residents for long term or respite as and when rooms are available.
              </p>
            </Section>
          </div>
        );
      case 'rooms':
        return (
          <div className="space-y-8">
            <Section title="Rooms & Facilities">
              <ul>
                <li>16 bedrooms, 12 en-suite, some twin rooms, locked cupboards available</li>
                <li>Ground floor: 9 bedrooms (5 en-suite), Second floor: 7 bedrooms (6 en-suite)</li>
                <li>Social areas: large sitting room, snug, dining room, large walled garden, summer house</li>
                <li>Fully wheelchair accessible, smoke-free</li>
              </ul>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="h-40 rounded-lg border border-slate-200 bg-slate-100 flex items-center justify-center text-slate-400">Bedrooms image</div>
                <div className="h-40 rounded-lg border border-slate-200 bg-slate-100 flex items-center justify-center text-slate-400">Lounge image</div>
                <div className="h-40 rounded-lg border border-slate-200 bg-slate-100 flex items-center justify-center text-slate-400">Garden image</div>
                <div className="h-40 rounded-lg border border-slate-200 bg-slate-100 flex items-center justify-center text-slate-400">Summer house image</div>
              </div>
            </Section>
          </div>
        );
      case 'activities':
        return (
          <div className="space-y-8">
            <Section title="Activities">
              <p>Activities based on residents’ interests: outings, arts & crafts, gardening, games, musical events, buffet parties, monthly fish & chip supper.</p>
              <p>Residents encouraged to request new activities; meetings every six weeks.</p>
              <p>Religious services: Easter & Christmas, Holy Communion monthly, other requests accommodated.</p>
              <p>Pets allowed; staff encouraged to bring pets.</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                <div className="h-36 rounded-lg border border-slate-200 bg-slate-100 flex items-center justify-center text-slate-400">Activities image</div>
                <div className="h-36 rounded-lg border border-slate-200 bg-slate-100 flex items-center justify-center text-slate-400">Events image</div>
                <div className="h-36 rounded-lg border border-slate-200 bg-slate-100 flex items-center justify-center text-slate-400">Pets image</div>
              </div>
            </Section>
          </div>
        );
      case 'catering':
        return (
          <div className="space-y-8">
            <Section title="Catering & Dietary Needs">
              <p>Homemade meals, varied, dietary preferences accommodated.</p>
              <p>Hot lunch, hot/cold supper, tea/coffee/cakes throughout the day.</p>
              <p>Celebration drinks: sherry, mulled wine, Pimms, Bucks Fizz, wine, cava.</p>
              <p>Visitors welcome for tea & coffee free of charge.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="h-40 rounded-lg border border-slate-200 bg-slate-100 flex items-center justify-center text-slate-400">Meals image</div>
                <div className="h-40 rounded-lg border border-slate-200 bg-slate-100 flex items-center justify-center text-slate-400">Dining area image</div>
              </div>
            </Section>
          </div>
        );
      case 'staff':
        return (
          <div className="space-y-8">
            <Section title="Our Staff">
              <p>Experienced care team, cleaners, cooks.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="rounded-lg border border-slate-200 p-4">
                  <div className="h-36 rounded bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400 mb-3">Sarah King headshot</div>
                  <h3 className="font-semibold text-slate-900">Manager: Sarah King</h3>
                  <p className="mt-2 text-slate-700">Full bio included.</p>
                </div>
                <div className="rounded-lg border border-slate-200 p-4">
                  <div className="h-36 rounded bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400 mb-3">Matthew Lindley headshot</div>
                  <h3 className="font-semibold text-slate-900">Registered Provider: Matthew Lindley</h3>
                  <p className="mt-2 text-slate-700">Full bio included.</p>
                </div>
              </div>
              <div className="h-40 rounded-lg border border-slate-200 bg-slate-100 flex items-center justify-center text-slate-400 mt-4">Staff at work image</div>
            </Section>
          </div>
        );
      case 'contact':
        return (
          <div className="space-y-8">
            <Section title="Contact / Locate Us">
              <form className="grid gap-4 max-w-xl">
                <input type="text" placeholder="Name" className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300" />
                <input type="email" placeholder="Email" className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300" />
                <textarea placeholder="Message" rows={5} className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300" />
                <div className="flex gap-3">
                  <button type="button" className="px-4 py-2 rounded-md bg-rose-600 text-white hover:bg-rose-700">Book a Tour</button>
                  <button type="button" className="px-4 py-2 rounded-md bg-white text-rose-700 border border-rose-200 hover:bg-rose-50">Email Us</button>
                </div>
              </form>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h3 className="font-semibold text-slate-900">Contact Details</h3>
                  <p className="mt-2 text-slate-700">Address: 8 Park Road, Tiverton, Devon EX16 6AU</p>
                  <p className="text-slate-700">Phone: 01884 252436</p>
                  <p className="text-slate-700">Email: st.georgeshouserh@gmail.com</p>
                  <p className="mt-4 text-slate-700">Location: Tiverton, Devon, Exe Valley, nearby parks, canal, seasonal events.</p>
                </div>
                <div className="h-48 rounded-lg border border-slate-200 bg-slate-100 flex items-center justify-center text-slate-400">Map placeholder</div>
              </div>
            </Section>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-rose-50/40 text-slate-800">
      <Navbar current={tab} onNavigate={setTab} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 min-w-0">
            <Page />
          </div>
          <Sidebar />
        </div>
      </main>
      <Footer />
    </div>
  );
}
