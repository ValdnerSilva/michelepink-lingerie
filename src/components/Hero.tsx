import { MessageCircle, BookOpen, Sparkles } from "lucide-react"
import { WHATSAPP_URL, CATALOG_URL } from "@/constants"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 pattern-bg" />
      <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-pink-soft/40" />

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 size-64 rounded-full bg-pink-brand/5 blur-3xl" />
      <div className="absolute bottom-20 left-10 size-80 rounded-full bg-pink-light/10 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-96 rounded-full bg-pink-soft/30 blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white border border-pink-200 rounded-full px-4 py-2 mb-8 shadow-sm">
          <Sparkles className="size-4 text-gold" />
          <span className="text-sm font-medium text-pink-brand">Atendimento 100% personalizado</span>
          <Sparkles className="size-4 text-gold" />
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-balance mb-6 leading-tight">
          <span className="text-foreground">Sua lingerie DeMillus com</span>{" "}
          <span className="text-shimmer">atendimento personalizado</span>{" "}
          <span className="text-foreground">e compra fácil</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Escolha seus produtos com praticidade e finalize seu pedido diretamente com{" "}
          <strong className="text-pink-brand">Michele Pink</strong> pelo WhatsApp, com atendimento
          humanizado, discrição e suporte na escolha dos tamanhos.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary - WhatsApp */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-pink-brand hover:bg-pink-brand/90 text-white font-bold text-lg px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 pulse-glow w-full sm:w-auto min-w-[260px]"
          >
            <MessageCircle className="size-6 shrink-0" />
            FAZER PEDIDO COM MICHELE
          </a>

          {/* Secondary - Catalog */}
          <a
            href={CATALOG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-white hover:bg-pink-soft text-pink-brand font-semibold text-base px-6 py-4 rounded-full border-2 border-pink-brand/30 hover:border-pink-brand transition-all duration-200 w-full sm:w-auto min-w-[220px]"
          >
            <BookOpen className="size-5 shrink-0" />
            VER CATÁLOGO DE PRODUTOS
          </a>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-green-500 inline-block" />
            Atendimento rápido
          </div>
          <div className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-pink-brand inline-block" />
            Compra com discrição
          </div>
          <div className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-gold inline-block" />
            Pix & Cartão
          </div>
        </div>
      </div>
    </section>
  )
}
