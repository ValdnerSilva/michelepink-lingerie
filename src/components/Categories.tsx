import { MessageCircle } from "lucide-react"

const categories = [
  { emoji: "👙", name: "Sutiãs", description: "Todos os modelos e tamanhos" },
  { emoji: "💗", name: "Calcinhas", description: "Conforto e estilo em cada peça" },
  { emoji: "✨", name: "Conjuntos", description: "Combos especiais e exclusivos" },
  { emoji: "🌙", name: "Pijamas", description: "Conforto para noites perfeitas" },
  { emoji: "⭐", name: "Modeladores", description: "Realce suas curvas" },
  { emoji: "💕", name: "Plus Size", description: "Moda para todos os corpos" },
  { emoji: "🏷️", name: "Promoções", description: "Ofertas especiais da coleção" },
]

function buildWhatsAppUrl(category: string) {
  const msg = `Olá Michele! Vim pela sua página Michele Pink e tenho interesse na categoria: ${category}. Pode me ajudar?`
  return `https://wa.me/557996059407?text=${encodeURIComponent(msg)}`
}

export function Categories() {
  return (
    <section className="py-20 px-4 pattern-bg">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-pink-brand mb-3">
            Nosso portfólio
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-4">
            Categorias disponíveis
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Consulte com Michele e encontre a peça perfeita para você.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl border border-pink-100 hover:border-pink-300 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="p-5 flex flex-col items-center text-center gap-3">
                {/* Emoji */}
                <div className="size-14 rounded-2xl bg-pink-soft flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-200">
                  {cat.emoji}
                </div>

                {/* Info */}
                <div>
                  <h3 className="font-bold text-foreground text-base mb-1">{cat.name}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{cat.description}</p>
                </div>

                {/* CTA */}
                <a
                  href={buildWhatsAppUrl(cat.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-pink-soft hover:bg-pink-brand text-pink-brand hover:text-white font-semibold text-xs py-2.5 px-3 rounded-xl border border-pink-200 hover:border-pink-brand transition-all duration-200 mt-1"
                >
                  <MessageCircle className="size-3.5 shrink-0" />
                  CONSULTAR COM MICHELE
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
