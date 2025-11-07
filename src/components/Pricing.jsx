export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-[#07080A] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="bg-gradient-to-br from-white via-cyan-100 to-sky-300 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">
            Simple, generous pricing
          </h2>
          <p className="mt-3 text-white/70">
            Get started free. Upgrade for advanced collaboration and export options.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Free */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="text-sm text-cyan-300">Free</div>
            <div className="mt-2 text-4xl font-semibold text-white">$0</div>
            <ul className="mt-6 space-y-2 text-sm text-white/70">
              <li>Unlimited personal trees</li>
              <li>Up to 2 collaborators</li>
              <li>GEDCOM import</li>
            </ul>
            <a href="#get-started" className="mt-6 inline-block rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/90 hover:bg-white/20">Start free</a>
          </div>

          {/* Plus */}
          <div className="rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 p-6 shadow-lg shadow-cyan-500/10 ring-1 ring-white/10 backdrop-blur">
            <div className="text-sm text-cyan-300">Plus</div>
            <div className="mt-2 text-4xl font-semibold text-white">$6<span className="text-base text-white/70">/mo</span></div>
            <ul className="mt-6 space-y-2 text-sm text-white/80">
              <li>Unlimited collaborators</li>
              <li>Version history</li>
              <li>Advanced export options</li>
            </ul>
            <a href="#get-started" className="mt-6 inline-block rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-indigo-500/20 hover:opacity-95">Go Plus</a>
          </div>

          {/* Teams */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="text-sm text-cyan-300">Teams</div>
            <div className="mt-2 text-4xl font-semibold text-white">$12<span className="text-base text-white/70">/mo</span></div>
            <ul className="mt-6 space-y-2 text-sm text-white/70">
              <li>Shared workspaces</li>
              <li>Role-based permissions</li>
              <li>Priority support</li>
            </ul>
            <a href="#contact" className="mt-6 inline-block rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/90 hover:bg-white/20">Contact sales</a>
          </div>
        </div>
      </div>
    </section>
  );
}
