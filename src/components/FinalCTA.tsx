import { MessageCircle, Sparkles } from "lucide-react"
import { WHATSAPP_URL } from "@/constants"

export function FinalCTA() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Pink gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-brand via-pink-brand/90 to-pink-light" />

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 size-40 rounded-full bg-white/5 blur-2xl" />
      <div className="absolute bottom-10 right-10 size-60 rounded-full bg-white/5 blur-2xl" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 size-32 rounded-full bg-white/10 blur-xl" />

      {/* Gold shimmer lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center size-16 rounded-full bg-white/20 backdrop-blur-sm mb-6">
          <Sparkles className="size-8 text-gold" />
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight text-balance mb-6 leading-tight">
          Pronta para escolher sua DeMillus?
        </h2>

        {/* Subtext */}
        <p className="text-white/80 text-xl mb-10 max-w-xl mx-auto leading-relaxed">
          Fale agora com <strong className="text-white">Michele Pink</strong> e faça seu pedido com toda a comodidade.
        </p>

        {/* CTA Button */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 bg-white hover:bg-pink-soft text-pink-brand font-bold text-xl px-10 py-5 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-200 hover:scale-105 pulse-glow"
        >
          <MessageCircle className="size-7 shrink-0" />
          CHAMAR NO WHATSAPP
        </a>

        {/* Trust note */}
        <p className="text-white/60 text-sm mt-8">
          Atendimento rápido e humanizado · Sem compromisso
        </p>
      </div>
    </section>
  )
}
