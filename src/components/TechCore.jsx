import { Eye, Radio, Brain, LayoutDashboard } from 'lucide-react';

const items = [
  { icon: Eye, title: 'AI Vision', desc: 'Detects people and density in real time.' },
  { icon: Radio, title: 'IoT Integration', desc: 'Fuses camera analytics with connected sensors.' },
  { icon: Brain, title: 'Predictive Intelligence', desc: 'Anticipates crowd surges to prevent risk.' },
  { icon: LayoutDashboard, title: 'Smart Dashboards', desc: 'Visual, actionable insights built on Cumulocity IoT.' }
];

export default function TechCore() {
  return (
    <section id="tech" className="bg-gradient-to-b from-white to-indigo-50 dark:from-black dark:to-indigo-950/30">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <h2 className="text-center text-3xl font-semibold text-neutral-900 dark:text-white sm:text-4xl">Technology Core</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-neutral-700 dark:text-neutral-300">
          We transform observation into prediction with an integrated stack of AI Vision and IoT analytics.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-indigo-200/50 dark:border-white/10 bg-white/80 dark:bg-white/5 p-6 shadow-sm transition hover:shadow-md backdrop-blur">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-neutral-700 dark:text-neutral-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
