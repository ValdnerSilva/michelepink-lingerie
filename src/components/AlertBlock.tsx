import { CircleAlert as AlertCircle } from "lucide-react"

export function AlertBlock() {
  return (
    <section className="py-6 px-4 bg-gradient-to-r from-pink-brand/5 via-pink-brand/10 to-pink-brand/5">
      <div className="max-w-3xl mx-auto">
        <div className="relative flex gap-4 items-start bg-white border border-pink-200 rounded-2xl p-6 shadow-sm overflow-hidden">
          {/* Gold accent line */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-gold via-pink-brand to-gold rounded-l-2xl" />

          <div className="shrink-0 mt-0.5">
            <div className="size-10 rounded-full bg-pink-soft flex items-center justify-center">
              <AlertCircle className="size-5 text-pink-brand" />
            </div>
          </div>

          <div>
            <p className="font-bold text-foreground text-lg mb-2 flex items-center gap-2">
              ATENÇÃO 💖
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Use o catálogo apenas para{" "}
              <strong className="text-foreground">escolher seus produtos</strong>.
              Depois envie os códigos ou prints{" "}
              <strong className="text-pink-brand">diretamente para Michele</strong>{" "}
              e finalize seu pedido com atendimento personalizado.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
