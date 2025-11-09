import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const team = [
  { name: 'Aisha Al-Saud', role: 'Product Lead', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=600&auto=format&fit=crop' },
  { name: 'Fahad Al-Rashid', role: 'AI Vision Engineer', img: 'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=600&auto=format&fit=crop' },
  { name: 'Sara Al-Harbi', role: 'UX Designer', img: 'https://images.unsplash.com/photo-1544006658-89b5d2b335aa?q=80&w=600&auto=format&fit=crop' },
  { name: 'Khalid Al-Otaibi', role: 'IoT Architect', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=600&auto=format&fit=crop' },
  { name: 'Maya Hassan', role: 'Data Scientist', img: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=600&auto=format&fit=crop' },
  { name: 'Omar Al-Qahtani', role: 'Platform Engineer', img: 'https://images.unsplash.com/photo-1541534401786-2077eed87a72?q=80&w=600&auto=format&fit=crop' }
];

export default function Connect() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-black">
      {/* Animated background themed to logo gradients */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full blur-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-400" style={{ filter: 'blur(60px)' }} />
        <div className="absolute right-0 bottom-10 h-80 w-80 rounded-full blur-3xl bg-gradient-to-tr from-cyan-400 via-indigo-600 to-purple-600" style={{ animation: 'pulseGlow 8s ease-in-out infinite' }} />
      </div>

      <style>{`
        @keyframes pulseGlow { 0%, 100% { opacity: .5; transform: translateY(0) } 50% { opacity: .9; transform: translateY(-12px) } }
      `}</style>

      {/* Team */}
      <div id="team" className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-neutral-900 dark:text-white sm:text-4xl">Meet the Team</h2>
          <p className="mt-2 text-neutral-700 dark:text-neutral-300">A multidisciplinary crew building safer, smarter visitor experiences.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <div key={m.name} className="group rounded-2xl border border-indigo-200/50 dark:border-white/10 bg-white/80 dark:bg-white/5 p-4 shadow-sm backdrop-blur transition hover:shadow-md">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                <img src={m.img} alt={m.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{m.name}</h3>
                <p className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-400 bg-clip-text text-transparent">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div id="contact" className="relative mx-auto max-w-6xl px-6 pb-20">
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold text-neutral-900 dark:text-white">Contact Us</h2>
            <p className="mt-2 text-neutral-700 dark:text-neutral-300">Let’s explore how FlowSense can elevate your venue, festival, or city experience.</p>
            <div className="mt-6 space-y-3 text-neutral-800 dark:text-neutral-200">
              <a href="mailto:hello@flowsense.sa" className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300"><Mail size={18} /></span>
                hello@flowsense.sa
              </a>
              <a href="tel:+966500000000" className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300"><Phone size={18} /></span>
                +966 50 000 0000
              </a>
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300"><MapPin size={18} /></span>
                Riyadh, Saudi Arabia
              </div>
              <a href="#" className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300"><Linkedin size={18} /></span>
                LinkedIn
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-indigo-200/50 dark:border-white/10 bg-white/80 dark:bg-white/5 p-6 shadow-sm backdrop-blur">
            <form className="grid gap-4">
              <div>
                <label className="text-sm text-neutral-700 dark:text-neutral-300">Name</label>
                <input type="text" className="mt-1 w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-neutral-900 placeholder-neutral-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:border-white/10 dark:bg-zinc-900 dark:text-white" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm text-neutral-700 dark:text-neutral-300">Email</label>
                <input type="email" className="mt-1 w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-neutral-900 placeholder-neutral-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:border-white/10 dark:bg-zinc-900 dark:text-white" placeholder="you@company.com" />
              </div>
              <div>
                <label className="text-sm text-neutral-700 dark:text-neutral-300">Message</label>
                <textarea rows={4} className="mt-1 w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-neutral-900 placeholder-neutral-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:border-white/10 dark:bg-zinc-900 dark:text-white" placeholder="Tell us about your needs" />
              </div>
              <button type="button" onClick={() => (window.location.href = 'mailto:hello@flowsense.sa')} className="inline-flex items-center justify-center rounded-lg px-5 py-3 font-medium text-white shadow transition bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-400 hover:brightness-110">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
