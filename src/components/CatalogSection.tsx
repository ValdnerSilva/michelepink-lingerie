import { BookOpen, MessageCircle, ArrowRight } from "lucide-react"
import { WHATSAPP_URL, CATALOG_URL } from "@/constants"

export function CatalogSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden gold-border shadow-xl p-1">
          <div className="rounded-[calc(1.5rem-4px)] bg-gradient-to-br from-white via-pink-soft/20 to-white p-8 sm:p-12">
            {/* Gold accent top */}
            <div className="w-20 h-1 bg-gradient-to-r from-gold via-pink-brand to-gold rounded-full mx-auto mb-8" />

            {/* Header */}
            <div className="text-center mb-8">
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-gold mb-3">
                Passo a passo
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-4">
                Escolha seus produtos
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
                Consulte os modelos disponíveis e envie seu pedido diretamente para Michele.
              </p>
            </div>

            {/* Flow visual */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10 text-sm text-muted-foreground">
              <div className="flex items-center gap-2 bg-pink-soft rounded-full px-4 py-2 font-medium text-foreground">
                <BookOpen className="size-4 text-pink-brand" />
                Abrir catálogo
              </div>
              <ArrowRight className="size-4 text-pink-brand hidden sm:block" />
              <div className="flex items-center gap-2 bg-pink-soft rounded-full px-4 py-2 font-medium text-foreground">
                <span className="text-base">📝</span>
                Anotar códigos
              </div>
              <ArrowRight className="size-4 text-pink-brand hidden sm:block" />
              <div className="flex items-center gap-2 bg-pink-brand/10 rounded-full px-4 py-2 font-medium text-pink-brand border border-pink-brand/20">
                <MessageCircle className="size-4" />
                Enviar para Michele
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Secondary - Catalog */}
              <a
                href={CATALOG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white hover:bg-pink-soft text-pink-brand font-semibold text-sm px-6 py-3 rounded-full border-2 border-pink-brand/30 hover:border-pink-brand transition-all duration-200 w-full sm:w-auto"
              >
                <BookOpen className="size-4 shrink-0" />
                ABRIR CATÁLOGO
              </a>

              {/* Primary - WhatsApp */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-pink-brand hover:bg-pink-brand/90 text-white font-bold text-base px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 pulse-glow w-full sm:w-auto"
              >
                <MessageCircle className="size-5 shrink-0" />
                ENVIAR MEU PEDIDO PARA MICHELE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
