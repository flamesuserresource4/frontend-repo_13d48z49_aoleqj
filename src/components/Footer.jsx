export default function Footer() {
  return (
    <footer className="bg-[#07080A] py-12 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400/80 via-sky-400/80 to-indigo-500/80 ring-1 ring-white/20" />
          <div className="text-white/80 text-sm">© {new Date().getFullYear()} FamilyEcho. All rights reserved.</div>
        </div>
        <nav className="flex flex-wrap items-center gap-4 text-sm text-white/70">
          <a href="#privacy" className="hover:text-white">Privacy</a>
          <a href="#terms" className="hover:text-white">Terms</a>
          <a href="#help" className="hover:text-white">Help</a>
        </nav>
      </div>
    </footer>
  );
}
