import { Eye, Radio, Brain, LayoutDashboard } from 'lucide-react';

const items = [
  {
    icon: Eye,
    title: 'AI Vision',
    desc: 'Detects people and density in real time.'
  },
  {
    icon: Radio,
    title: 'IoT Integration',
    desc: 'Fuses camera analytics with connected sensors.'
  },
  {
    icon: Brain,
    title: 'Predictive Intelligence',
    desc: 'Anticipates crowd surges to prevent risk.'
  },
  {
    icon: LayoutDashboard,
    title: 'Smart Dashboards',
    desc: 'Visual, actionable insights built on Cumulocity IoT.'
  }
];

export default function TechCore() {
  return (
    <section id="tech" className="bg-emerald-50">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <h2 className="text-center text-3xl font-semibold text-emerald-900 sm:text-4xl">Technology Core</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-emerald-800/90">
          We transform observation into prediction with an integrated stack of AI Vision and IoT analytics.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-emerald-200 bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-emerald-900">{title}</h3>
              <p className="mt-2 text-emerald-800/90">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
