import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-[#07080A]">
      {/* Spline 3D Scene */}
      <div className="absolute inset-0" aria-hidden>
        <Spline scene="https://prod.spline.design/Ao-qpnKUMOxV2eTA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Subtle vignette */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#07080A_90%)]" />
        {/* Glass gradient overlay */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[92vh] w-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" /> Liquid Glass Theme
        </div>
        <h1 className="mt-6 bg-gradient-to-br from-white via-cyan-100 to-sky-300 bg-clip-text text-5xl font-semibold tracking-tight text-transparent sm:text-6xl md:text-7xl">
          Build your family tree in minutes
        </h1>
        <p className="mt-6 max-w-2xl text-balance text-white/70">
          Map relationships, add photos, and collaborate with relatives. A fast, modern reimagining of family tree building — private by default and beautifully immersive.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#get-started"
            className="rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 ring-1 ring-white/10 hover:opacity-95"
          >
            Start a new tree
          </a>
          <a
            href="#import"
            className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur hover:bg-white/10"
          >
            Import GEDCOM
          </a>
        </div>
        <div className="mt-8 text-xs text-white/50">Free forever for personal use • No credit card required</div>
      </div>
    </section>
  );
}
