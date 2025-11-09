import { Smartphone, AlertTriangle, MapPin, Radio, Users, ShieldCheck, RefreshCw, Zap } from 'lucide-react';

const featureBlocks = [
  {
    id: 'organizer',
    title: 'Organizer Portal',
    subtitle: 'Smart Event Management in Your Pocket',
    bullets: [
      { icon: Smartphone, text: 'Mobile-first platform for real-time coordination' },
      { icon: ShieldCheck, text: 'Secure PIN authentication — no app download' },
      { icon: AlertTriangle, text: 'Real-time critical alerts and incident protocols' },
      { icon: MapPin, text: 'Smart zone join and staffing visibility' },
      { icon: RefreshCw, text: 'Live updates across all event areas' },
      { icon: Radio, text: 'Cumulocity IoT integration for automated detection' }
    ],
    metrics: [
      { label: '100% Mobile Ready' },
      { label: 'Real-Time Updates' },
      { label: 'Instant Alerts' },
      { label: 'Multi-Zone' }
    ]
  },
  {
    id: 'parking',
    title: 'Parking Management',
    subtitle: 'Direct vehicles, reduce congestion, optimize flow',
    bullets: [
      { icon: MapPin, text: 'Live occupancy and routing to available lots' },
      { icon: Zap, text: 'Dynamic signage and guidance systems' },
      { icon: Users, text: 'Visitor guidance from arrival to entrance' }
    ]
  },
  {
    id: 'behavior',
    title: 'Visitor Behavioral Analysis',
    subtitle: 'Understand movement, dwell time, and interests',
    bullets: [
      { icon: Users, text: 'Heatmaps and density over time' },
      { icon: MapPin, text: 'Pathways and bottleneck detection' },
      { icon: RefreshCw, text: 'Before/after insights to improve planning' }
    ]
  },
  {
    id: 'traffic',
    title: 'Road Traffic Management',
    subtitle: 'Coordinate roads around venues and city events',
    bullets: [
      { icon: Zap, text: 'Predictive surges and rerouting suggestions' },
      { icon: Radio, text: 'Integrates with municipal and IoT systems' },
      { icon: ShieldCheck, text: 'Safety-first response automation' }
    ]
  }
];

export default function Features() {
  return (
    <section id="features" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-semibold text-emerald-900 sm:text-4xl">Features</h2>
        <p className="mt-2 max-w-2xl text-emerald-800/90">
          Tools for organizers, authorities, and venue teams — designed for safety, speed, and simplicity.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {featureBlocks.map(block => (
            <div key={block.id} className="rounded-2xl border border-emerald-200 p-6 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-emerald-900">{block.title}</h3>
                  <p className="mt-1 text-emerald-800/90">{block.subtitle}</p>
                </div>
              </div>

              <ul className="mt-5 space-y-3">
                {block.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-md bg-emerald-100 text-emerald-700">
                      <b.icon size={18} />
                    </div>
                    <span className="text-emerald-800/90">{b.text}</span>
                  </li>
                ))}
              </ul>

              {block.metrics && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {block.metrics.map((m, i) => (
                    <span key={i} className="rounded-full bg-emerald-50 px-3 py-1 text-sm text-emerald-700 ring-1 ring-emerald-200">
                      {m.label}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
