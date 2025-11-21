import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-slate-950" id="inicio">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(75%_60%_at_50%_20%,rgba(99,102,241,0.35),rgba(124,58,237,0.2)_40%,transparent_70%)]" />

      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl flex-col items-center justify-center gap-8 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Impulsa tu crecimiento con IA aplicada a revenue
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.9 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_10px_40px_rgba(124,58,237,0.35)]"
        >
          Escala ventas sin fricción con agentes de IA
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="max-w-2xl text-lg sm:text-xl text-white/70"
        >
          Automatiza prospección, calificación y nurturing. Cero fugas en tu embudo. Más demos agendadas, menos tarea manual.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a href="#planes" className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500 px-8 py-3 text-base font-semibold text-white shadow-xl transition">
            <span className="absolute inset-0 -z-10 bg-gradient-to-r from-fuchsia-500/40 via-cyan-500/40 to-indigo-500/40 blur-2xl opacity-60" />
            Empezar ahora
          </a>
          <a href="#soluciones" className="rounded-full border border-white/10 bg-white/5 px-8 py-3 text-white/90 hover:bg-white/10 transition">Ver soluciones</a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4 text-left"
        >
          {[
            ['+38%','rate de respuesta'],
            ['x3','demos/semana'],
            ['-60%','tiempo operativo'],
            ['24/7','atención y cierre']
          ].map(([kpi,label]) => (
            <div key={label} className="group rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur transition hover:-translate-y-1 hover:bg-white/10">
              <p className="text-2xl font-bold text-white">{kpi}</p>
              <p className="text-sm text-white/70">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
