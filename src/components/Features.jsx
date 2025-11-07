import { Shield, Users, Share2, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <Sparkles className="h-5 w-5 text-cyan-300" />,
    title: 'Instant visual trees',
    desc: 'Add relatives and see connections appear instantly with a clean, zoomable canvas.',
  },
  {
    icon: <Users className="h-5 w-5 text-cyan-300" />,
    title: 'Collaborate easily',
    desc: 'Invite family to contribute stories, photos, and details in real-time.',
  },
  {
    icon: <Share2 className="h-5 w-5 text-cyan-300" />,
    title: 'Import & export',
    desc: 'Compatible with GEDCOM and other popular genealogy tools.',
  },
  {
    icon: <Shield className="h-5 w-5 text-cyan-300" />,
    title: 'Private by default',
    desc: 'Your data stays yours. Robust privacy controls and secure sharing.',
  },
];

export default function Features() {
  return (
    <section id="product" className="relative bg-[#0A0B0E] py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,255,0.08),transparent_50%)]" aria-hidden />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="bg-gradient-to-br from-white via-cyan-100 to-sky-300 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">
            Everything you need to map your family
          </h2>
          <p className="mt-4 text-white/70">
            Thoughtful tools for exploring connections across generations with a delightful, fluid interface.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-cyan-400/30 hover:bg-white/10"
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-cyan-500/10 blur-2xl" aria-hidden />
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 ring-1 ring-white/10">
                {f.icon}
              </div>
              <h3 className="mt-4 text-lg font-medium text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
