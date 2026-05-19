import { Heart } from "lucide-react"
import { CONSULTANT_NAME } from "@/constants"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-10 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo */}
        <p className="text-xl font-bold tracking-widest text-pink-light uppercase mb-1">
          {CONSULTANT_NAME}
        </p>
        <p className="text-sm text-background/60 mb-6">
          Consultora Independente
        </p>

        {/* Divider */}
        <div className="w-20 h-px bg-gradient-to-r from-transparent via-pink-light/30 to-transparent mx-auto mb-6" />

        {/* Disclaimer */}
        <p className="text-xs text-background/40 max-w-md mx-auto leading-relaxed">
          Página independente de atendimento e divulgação. Este não é o site oficial da DeMillus.
        </p>

        {/* Made with love */}
        <div className="flex items-center justify-center gap-1.5 mt-6 text-xs text-background/30">
          Feito com <Heart className="size-3 fill-pink-light text-pink-light" /> para Michele Pink
        </div>
      </div>
    </footer>
  )
}
