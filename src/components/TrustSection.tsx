import { Check, Star } from "lucide-react"

const reasons = [
  "Atendimento humanizado",
  "Ajuda para escolher tamanho",
  "Compra com discrição",
  "Atendimento rápido",
  "Facilidade no pagamento",
  "Suporte antes e depois da compra",
]

export function TrustSection() {
  return (
    <section className="py-20 px-4 pattern-bg">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-pink-brand mb-3">
              Por que escolher Michele?
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-6 leading-tight">
              Por que comprar com{" "}
              <span className="text-pink-brand">Michele Pink?</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Mais do que vender produtos, Michele oferece uma experiência de compra
              personalizada, com atenção total às suas necessidades.
            </p>

            {/* Stars */}
            <div className="flex items-center gap-1 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-5 fill-gold text-gold" />
              ))}
              <span className="text-sm text-muted-foreground ml-2 font-medium">Atendimento nota 10</span>
            </div>
          </div>

          {/* Right - Checklist */}
          <div className="bg-white rounded-3xl border border-pink-100 shadow-lg p-8">
            {/* Gold top bar */}
            <div className="w-12 h-1 bg-gradient-to-r from-gold to-pink-brand rounded-full mb-6" />

            <ul className="space-y-4">
              {reasons.map((reason, i) => (
                <li key={i} className="flex items-center gap-3 group">
                  <div className="shrink-0 size-7 rounded-full bg-pink-brand/10 flex items-center justify-center group-hover:bg-pink-brand transition-colors duration-200">
                    <Check className="size-4 text-pink-brand group-hover:text-white transition-colors duration-200" />
                  </div>
                  <span className="text-foreground font-medium leading-snug">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
