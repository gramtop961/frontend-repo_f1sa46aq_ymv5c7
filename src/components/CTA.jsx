import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contacto" className="relative bg-slate-950 py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_60%,rgba(34,197,94,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 p-[1px]">
          <div className="rounded-3xl bg-slate-950/80 p-8 sm:p-12 backdrop-blur">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center text-3xl font-bold text-white"
            >
              ¿Listo para cerrar más deals con IA?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-2 text-center text-white/70"
            >
              Agenda una demo y recibe un diagnóstico gratuito de tu embudo.
            </motion.p>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                const data = Object.fromEntries(new FormData(e.currentTarget))
                alert(`Gracias, ${data.nombre}. Te contactaremos en breve.`)
              }}
              className="mt-8 grid gap-4 sm:grid-cols-2"
            >
              <input name="nombre" required placeholder="Nombre" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-emerald-400/50" />
              <input name="email" type="email" required placeholder="Email" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-emerald-400/50" />
              <input name="empresa" placeholder="Empresa" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-emerald-400/50" />
              <input name="rol" placeholder="Rol" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-emerald-400/50" />
              <textarea name="mensaje" placeholder="Objetivo principal" className="sm:col-span-2 h-28 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-emerald-400/50" />
              <button className="group sm:col-span-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-indigo-500 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:opacity-95">
                Solicitar demo gratuita
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
