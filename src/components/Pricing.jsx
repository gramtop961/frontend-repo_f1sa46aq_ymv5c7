import { motion } from 'framer-motion'
import { Crown, Rocket, Sparkles } from 'lucide-react'

const tiers = [
  {
    name: 'Starter',
    price: '499',
    desc: 'Implementación rápida para validar tracción con IA.',
    features: ['1 agente de prospección', 'Secuencias email + LinkedIn', 'Integración calendario', 'Setup en 5 días'],
  },
  {
    name: 'Growth',
    price: '1.490',
    popular: true,
    desc: 'Escala multicanal y automatiza calificación y demos.',
    features: ['2-4 agentes', 'WhatsApp + CRM', 'Rescates automáticos', 'Soporte prioritario'],
  },
  {
    name: 'Enterprise',
    price: 'A medida',
    desc: 'Seguridad, compliance y LLMs dedicados para high-scale.',
    features: ['SLA y SSO', 'Guardrails y auditoría', 'LLMs privados', 'Soporte 24/7'],
  },
]

export default function Pricing() {
  return (
    <section id="planes" className="relative bg-slate-950 py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_40%,rgba(236,72,153,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center text-3xl sm:text-5xl font-bold text-white"
        >
          Planes simples para crecer rápido
        </motion.h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 backdrop-blur hover:-translate-y-1.5 transition ${t.popular ? 'ring-2 ring-fuchsia-500/40' : ''}`}
            >
              {t.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-fuchsia-500 px-3 py-1 text-xs font-semibold text-white shadow-lg">
                  Más elegido
                </div>
              )}
              <div className="mb-4 flex items-center gap-3">
                {t.name === 'Starter' && <Rocket className="h-5 w-5 text-cyan-300" />}
                {t.name === 'Growth' && <Sparkles className="h-5 w-5 text-fuchsia-300" />}
                {t.name === 'Enterprise' && <Crown className="h-5 w-5 text-amber-300" />}
                <h3 className="text-lg font-semibold text-white">{t.name}</h3>
              </div>
              <p className="text-white/70">{t.desc}</p>
              <div className="mt-6">
                <span className="text-4xl font-extrabold text-white">{t.price}</span>
                {t.price !== 'A medida' && <span className="ml-1 text-white/60">USD/mes</span>}
              </div>
              <ul className="mt-6 space-y-2">
                {t.features.map((f) => (
                  <li key={f} className="text-sm text-white/80">• {f}</li>
                ))}
              </ul>
              <a href="#contacto" className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-lg hover:opacity-95 transition">
                Solicitar demo
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
