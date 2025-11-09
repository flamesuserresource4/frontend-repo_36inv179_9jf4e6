import { ArrowRight, Shield, Activity } from 'lucide-react';

export default function Hero() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-600 via-emerald-700 to-emerald-900 opacity-90" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:py-32 text-white">
        <div className="flex flex-col-reverse items-center gap-10 lg:flex-row lg:gap-16">
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur">
              <Activity size={16} />
              <span>Smart Visitor Flow Intelligence</span>
            </div>
            <h1 className="mt-6 font-semibold leading-tight text-white text-4xl sm:text-5xl md:text-6xl">
              FlowSense
            </h1>
            <p className="mt-4 text-lg text-emerald-50">
              Real-time situational awareness and intelligent decision-making for safer, smoother visitor experiences across the Kingdom.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#features" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 font-medium text-emerald-900 shadow hover:shadow-lg transition">
                Explore Features
                <ArrowRight size={18} />
              </a>
              <a href="#about" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 px-5 py-3 font-medium text-white ring-1 ring-white/30 hover:bg-white/15 transition">
                <Shield size={18} />
                Why FlowSense
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-square w-full max-w-[520px] mx-auto">
              <img
                src="https://raw.githubusercontent.com/Skayyz/Videos/main/FlowSense.svg"
                alt="FlowSense Logo"
                className="absolute inset-0 h-full w-full object-contain drop-shadow-2xl"
              />
              <div className="absolute -inset-6 rounded-full bg-emerald-400/20 blur-3xl" aria-hidden />
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-emerald-950/40 to-transparent" />
    </header>
  );
}
