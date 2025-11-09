import Spline from '@splinetool/react-spline';
import { ArrowRight, Shield, Activity } from 'lucide-react';

export default function Hero() {
  return (
    <header className="relative min-h-[88vh] w-full overflow-hidden bg-black text-white">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vc19ejtcC5VJjy5v/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content overlay */}
      <div className="relative mx-auto flex max-w-7xl flex-col-reverse items-center gap-10 px-6 py-24 sm:py-28 lg:flex-row lg:gap-16 lg:py-32">
        <div className="w-full lg:w-1/2">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur">
            <Activity size={16} />
            <span>Smart Visitor Flow Intelligence</span>
          </div>
          <h1 className="mt-6 font-semibold leading-tight text-white text-4xl sm:text-5xl md:text-6xl">
            FlowSense
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Real-time situational awareness and intelligent decision-making for safer, smoother visitor experiences across the Kingdom.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#features" className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-400 px-5 py-3 font-medium text-black shadow transition hover:bg-amber-300">
              Explore Features
              <ArrowRight size={18} />
            </a>
            <a href="#about" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 px-5 py-3 font-medium text-white ring-1 ring-white/30 transition hover:bg-white/15">
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
              className="absolute inset-0 h-full w-full object-contain drop-shadow-[0_0_40px_rgba(251,191,36,0.45)]"
            />
            <div className="absolute -inset-6 rounded-full bg-amber-400/10 blur-3xl" aria-hidden />
          </div>
        </div>
      </div>

      {/* Gradient overlay to ensure text contrast without blocking spline interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />
    </header>
  );
}
