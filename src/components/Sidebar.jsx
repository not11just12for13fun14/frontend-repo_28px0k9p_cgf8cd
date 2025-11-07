import React, { useEffect, useState } from 'react';

const testimonials = [
  'Miss H: Well earned reputation of excellence',
  'Mrs P: The staff are very good at their job…excellent!',
  'Mr H: St George’s House meets my needs very well, a very nice home',
  'Mrs C: My daughter always loves that there is a cup of tea ready when she visits',
  'Mrs A: I am very happy here',
  'Mrs S: The food is excellent, good quality and always a choice',
];

export default function Sidebar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <aside className="w-full lg:w-80 flex-shrink-0">
      <div className="sticky top-20 space-y-6">
        <div className="rounded-xl border border-slate-200 bg-emerald-50 p-5 shadow-sm">
          <h3 className="text-base font-semibold text-slate-800 font-serif">COVID-secure info</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            Currently indoor visits are restricted to emergency and end-of-life visits only. Visitors can book to come to the summer house for safe visits behind the Perspex screen. There is a sound system in place to ensure visitors and residents can hear each other. In due course indoor visiting will commence, within guidance. Testing of visitors will be required as well as their support in wearing our PPE, and maintaining the use of the face mask throughout the visit.
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-sky-50 p-5 shadow-sm">
          <h3 className="text-base font-semibold text-slate-800 font-serif">Testimonials</h3>
          <blockquote className="mt-3 text-sm leading-relaxed text-slate-700 min-h-[84px]">
            “{testimonials[index]}”
          </blockquote>
          <div className="mt-3 flex gap-1">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full ${i === index ? 'bg-emerald-600' : 'bg-emerald-200'}`}
                aria-hidden
              />
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
