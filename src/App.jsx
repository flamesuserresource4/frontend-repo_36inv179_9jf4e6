import Hero from './components/Hero';
import About from './components/About';
import TechCore from './components/TechCore';
import Features from './components/Features';

function App() {
  return (
    <div className="min-h-screen bg-emerald-950 text-emerald-900">
      {/* Top Navigation */}
      <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-emerald-100">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <img
              src="https://raw.githubusercontent.com/Skayyz/Videos/main/FlowSense.svg"
              alt="FlowSense"
              className="h-8 w-8"
            />
            <span className="font-semibold text-emerald-900">FlowSense</span>
          </a>
          <div className="hidden md:flex items-center gap-6 text-emerald-800/90">
            <a href="#about" className="hover:text-emerald-900">Who We Are</a>
            <a href="#tech" className="hover:text-emerald-900">Technology</a>
            <a href="#features" className="hover:text-emerald-900">Features</a>
            <a href="#contact" className="rounded-lg bg-emerald-600 px-3 py-2 text-white hover:bg-emerald-700">Contact</a>
          </div>
        </div>
      </nav>

      <Hero />
      <About />
      <TechCore />
      <Features />

      {/* Contact / Footer */}
      <footer id="contact" className="bg-emerald-900">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold text-white">Partner with FlowSense</h3>
              <p className="mt-3 text-emerald-100/90">
                Bring real-time intelligence to your events and destinations. We help you predict, prevent, and perform with confidence.
              </p>
            </div>
            <div className="flex items-center md:justify-end">
              <a
                href="mailto:hello@flowsense.sa"
                className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 font-medium text-emerald-900 shadow hover:shadow-lg transition"
              >
                hello@flowsense.sa
              </a>
            </div>
          </div>
          <div className="mt-10 border-t border-emerald-800 pt-6 text-sm text-emerald-200">
            © {new Date().getFullYear()} FlowSense — Smart Visitor Flow Intelligence
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
