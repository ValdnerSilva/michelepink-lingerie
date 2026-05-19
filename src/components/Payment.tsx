import { Zap, CreditCard, MessageCircle } from "lucide-react"

const methods = [
  {
    icon: Zap,
    title: "PIX",
    description: "Pagamento rápido e seguro",
    badge: "Mais usado",
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
    badgeBg: "bg-green-100 text-green-700",
  },
  {
    icon: CreditCard,
    title: "CARTÃO",
    description: "Link de pagamento, quando disponível",
    badge: "Disponível",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    badgeBg: "bg-blue-100 text-blue-700",
  },
  {
    icon: MessageCircle,
    title: "ATENDIMENTO PERSONALIZADO",
    description: "Confirmação direta com Michele",
    badge: "Exclusivo",
    iconBg: "bg-pink-soft",
    iconColor: "text-pink-brand",
    badgeBg: "bg-pink-soft text-pink-brand",
  },
]

export function Payment() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-pink-brand mb-3">
            Sem complicação
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-4">
            Facilidade no pagamento
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Michele aceita diferentes formas de pagamento para sua comodidade.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {methods.map((method, i) => (
            <div
              key={i}
              className="group flex flex-col items-center text-center p-8 rounded-2xl border border-border hover:border-pink-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
            >
              {/* Badge */}
              <span className={`text-xs font-semibold px-3 py-1 rounded-full mb-5 ${method.badgeBg}`}>
                {method.badge}
              </span>

              {/* Icon */}
              <div className={`size-16 rounded-2xl ${method.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                <method.icon className={`size-7 ${method.iconColor}`} />
              </div>

              {/* Content */}
              <h3 className="font-bold text-foreground text-base mb-2">{method.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{method.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
