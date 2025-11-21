import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Solutions from './components/Solutions'
import Workflow from './components/Workflow'
import Pricing from './components/Pricing'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <Solutions />
        <Workflow />
        <Pricing />
        <CTA />
      </main>
      <footer className="border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/60">© {new Date().getFullYear()} Flames Studio — Todos los derechos reservados.</p>
            <div className="flex items-center gap-4 text-white/60">
              <a href="#" className="hover:text-white transition">Términos</a>
              <a href="#" className="hover:text-white transition">Privacidad</a>
              <a href="#contacto" className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm hover:bg-white/10 transition">Contactar</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
