import { useState } from 'react'
import { Menu, X, Rocket, Zap } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#soluciones', label: 'Soluciones' },
    { href: '#workflow', label: 'Workflow' },
    { href: '#planes', label: 'Planes' },
    { href: '#contacto', label: 'Contacto' },
  ]

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
          <div className="flex h-16 items-center justify-between px-4">
            <a href="#" className="group inline-flex items-center gap-2">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-500 p-[1px]">
                <div className="absolute inset-0 -z-10 animate-pulse rounded-lg bg-gradient-to-br from-indigo-500/40 via-fuchsia-500/40 to-cyan-500/40 blur" />
                <div className="flex h-full w-full items-center justify-center rounded-lg bg-slate-900">
                  <Rocket className="h-5 w-5 text-white" />
                </div>
              </div>
              <div>
                <p className="text-sm leading-4 text-white/70">AI Growth</p>
                <p className="text-base font-semibold text-white">Flames Studio</p>
              </div>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-white/80 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#planes" className="group inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-white hover:border-indigo-300/60 hover:bg-indigo-500/20 transition">
                <Zap className="h-4 w-4" />
                Empezar ahora
              </a>
            </div>

            <button onClick={() => setOpen(!open)} className="md:hidden rounded-lg p-2 text-white/90 hover:bg-white/10">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden border-t border-white/10 px-4 pb-4"
              >
                <div className="flex flex-col gap-3 pt-3">
                  {navItems.map((item) => (
                    <a key={item.href} href={item.href} className="rounded-lg px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white transition">
                      {item.label}
                    </a>
                  ))}
                  <a href="#planes" className="rounded-lg bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-4 py-2 text-center text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20">
                    Empezar ahora
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
