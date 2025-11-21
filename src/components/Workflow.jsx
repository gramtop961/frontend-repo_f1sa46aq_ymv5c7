import { motion } from 'framer-motion'
import { MousePointerClick, Filter, BotMessageSquare, CalendarCheck2, Sparkles, CircleCheck } from 'lucide-react'

const steps = [
  {
    title: 'Captura sin fricción',
    desc: 'Widgets inteligentes capturan leads con UX impecable y validación en tiempo real.',
    icon: MousePointerClick,
  },
  {
    title: 'Calificación automática',
    desc: 'Modelos evalúan fit, urgencia y potencial de compra de cada lead.',
    icon: Filter,
  },
  {
    title: 'Conversaciones 24/7',
    desc: 'Agentes responden dudas, manejan objeciones y avanzan el deal.',
    icon: BotMessageSquare,
  },
  {
    title: 'Agenda automática',
    desc: 'Sin back-and-forth: el agente agenda demo en tu calendario.',
    icon: CalendarCheck2,
  },
]

export default function Workflow() {
  return (
    <section id="workflow" className="relative bg-slate-950 py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_100%,rgba(168,85,247,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center text-3xl sm:text-5xl font-bold text-white"
        >
          Workflow completo de revenue
        </motion.h2>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            {steps.map(({ title, desc, icon: Icon }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 hover:-translate-y-1 transition"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-indigo-500/20 p-3 text-indigo-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{title}</h3>
                    <p className="mt-1 text-sm text-white/70">{desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/10 to-fuchsia-500/10 p-1"
          >
            <div className="rounded-3xl bg-slate-950 p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                {[
                  ['Playbooks de ventas', 'Guías accionables para SDRs y AEs con IA copilot.'],
                  ['Rescates automáticos', 'Detecta inactividad y ejecuta acciones para salvar el deal.'],
                  ['Insights en vivo', 'Monitorea razones de pérdida y bloqueos del proceso.'],
                  ['Integraciones', 'Conecta CRM, calendarios y canales en minutos.'],
                ].map(([title, desc]) => (
                  <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
                    <div className="mb-2 flex items-center gap-2 text-emerald-400">
                      <CircleCheck className="h-5 w-5" />
                      <p className="text-sm font-medium">{title}</p>
                    </div>
                    <p className="text-sm text-white/70">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
