import { BookOpen, Heart, MessageCircle, CreditCard } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: BookOpen,
    title: "Abra o catálogo",
    description: "Veja os modelos disponíveis da coleção atual.",
    color: "from-pink-soft to-white",
    iconColor: "text-pink-brand",
    iconBg: "bg-pink-soft",
  },
  {
    number: "02",
    icon: Heart,
    title: "Escolha seus favoritos",
    description: "Anote os códigos ou tire prints.",
    color: "from-pink-soft to-white",
    iconColor: "text-pink-brand",
    iconBg: "bg-pink-soft",
  },
  {
    number: "03",
    icon: MessageCircle,
    title: "Envie para Michele",
    description: "Receba atendimento direto no WhatsApp.",
    color: "from-pink-soft to-white",
    iconColor: "text-pink-brand",
    iconBg: "bg-pink-soft",
  },
  {
    number: "04",
    icon: CreditCard,
    title: "Finalize com facilidade",
    description: "Confirme disponibilidade e pagamento via Pix ou cartão.",
    color: "from-pink-soft to-white",
    iconColor: "text-pink-brand",
    iconBg: "bg-pink-soft",
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-pink-brand mb-3">
            Simples e rápido
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-4">
            Como funciona?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Em apenas 4 passos você recebe sua DeMillus com toda a comodidade.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              {/* Connector line (hidden on mobile and last item) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-pink-200 to-transparent z-0 -translate-y-1/2" />
              )}

              <div className="relative z-10 flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-b from-pink-soft/50 to-white border border-pink-100 hover:border-pink-200 hover:shadow-lg transition-all duration-200 group-hover:-translate-y-1">
                {/* Step number */}
                <div className="absolute -top-3 left-6 bg-pink-brand text-white text-xs font-bold px-2 py-0.5 rounded-full tracking-wider">
                  {step.number}
                </div>

                {/* Icon */}
                <div className={`size-16 rounded-2xl ${step.iconBg} flex items-center justify-center mb-4 shadow-sm`}>
                  <step.icon className={`size-7 ${step.iconColor}`} />
                </div>

                {/* Content */}
                <h3 className="font-bold text-foreground text-lg mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
