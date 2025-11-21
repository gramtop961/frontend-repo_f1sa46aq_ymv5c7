import { motion } from 'framer-motion'
import { CheckCircle2, Bot, Shield, LineChart, Mail, Workflow, Timer, Puzzle } from 'lucide-react'

const items = [
  {
    icon: Bot,
    title: 'Prospección Autónoma',
    desc: 'Agentes que encuentran, contactan y califican leads en frío a escala.',
    bullets: ['Scraping ético y enriquecimiento', 'Emails y LinkedIn hiper personalizados', 'Calificación con LLMs']
  },
  {
    icon: Mail,
    title: 'Nurturing Multicanal',
    desc: 'Secuencias 1:1 por email, WhatsApp y LinkedIn con seguimiento inteligente.',
    bullets: ['Detección de intención', 'Reengagement automático', 'Handoff a humano sin fricción']
  },
  {
    icon: LineChart,
    title: 'Optimización de Embudo',
    desc: 'Analítica de conversiones y acciones de rescate para evitar fugas.',
    bullets: ['Alertas en tiempo real', 'Playbooks de recuperación', 'Test A/B asistido por IA']
  },
  {
    icon: Shield,
    title: 'Compliance & Seguridad',
    desc: 'Privacidad, opt-out inteligente y guardrails en cada interacción.',
    bullets: ['Políticas adaptativas', 'Registro completo', 'Cumple normativas']
  },
]

export default function Solutions() {
  return (
    <section id="soluciones" className="relative bg-slate-950 py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(56,189,248,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center text-3xl sm:text-5xl font-bold text-white"
        >
          Soluciones que convierten en cada etapa
        </motion.h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc, bullets }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 backdrop-blur hover:-translate-y-1.5 hover:border-fuchsia-500/30 hover:shadow-[0_0_40px_-10px_rgba(217,70,239,0.45)] transition"
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-white/10 p-3 text-fuchsia-300">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
              <ul className="mt-4 space-y-2">
                {bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-white/80">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" /> {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
