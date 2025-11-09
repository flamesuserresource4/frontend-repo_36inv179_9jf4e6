import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import TechCore from './components/TechCore';
import Features from './components/Features';
import Connect from './components/Connect';
import { Moon, Sun } from 'lucide-react';

function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [dark]);

  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-black dark:text-white">
      {/* Top Navigation */}
      <nav className="sticky top-0 z-50 border-b border-amber-200/60 bg-white/75 backdrop-blur dark:border-white/10 dark:bg-black/50">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <a href="#" className="flex items-center gap-3">
            <img
              src="https://raw.githubusercontent.com/Skayyz/Videos/main/FlowSense.svg"
              alt="FlowSense"
              className="h-8 w-8"
            />
            <span className="font-semibold">FlowSense</span>
          </a>
          <div className="hidden items-center gap-6 md:flex">
            <a href="#about" className="hover:text-amber-500">Who We Are</a>
            <a href="#tech" className="hover:text-amber-500">Technology</a>
            <a href="#features" className="hover:text-amber-500">Features</a>
            <a href="#team" className="hover:text-amber-500">Team</a>
            <a href="#contact" className="rounded-lg bg-amber-400 px-3 py-2 font-medium text-black transition hover:bg-amber-300">Contact</a>
            <button aria-label="Toggle dark mode" onClick={() => setDark((v) => !v)} className="ml-2 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-amber-200/60 bg-white/60 text-amber-600 transition hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-amber-400">
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </nav>

      <Hero />
      <About />
      <TechCore />
      <Features />
      <Connect />

      {/* Footer */}
      <footer className="bg-black py-10 text-sm text-neutral-400 dark:bg-black">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-3">
              <img src="https://raw.githubusercontent.com/Skayyz/Videos/main/FlowSense.svg" alt="FlowSense" className="h-6 w-6" />
              <span>© {new Date().getFullYear()} FlowSense — Smart Visitor Flow Intelligence</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="#about" className="hover:text-amber-400">About</a>
              <a href="#features" className="hover:text-amber-400">Features</a>
              <a href="#contact" className="hover:text-amber-400">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
