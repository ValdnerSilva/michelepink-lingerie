import { MessageCircle } from "lucide-react"
import { WHATSAPP_URL, CONSULTANT_NAME } from "@/constants"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-pink-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex flex-col leading-none">
          <span className="text-xl font-bold tracking-widest text-pink-brand uppercase">
            {CONSULTANT_NAME}
          </span>
          <span className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase font-medium">
            Consultora Independente DeMillus
          </span>
        </div>

        {/* CTA */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-pink-brand hover:bg-pink-brand/90 text-white text-sm font-bold px-4 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 pulse-glow"
        >
          <MessageCircle className="size-4 shrink-0" />
          <span className="hidden sm:inline">PEDIR NO WHATSAPP</span>
          <span className="sm:hidden">WHATSAPP</span>
        </a>
      </div>
    </header>
  )
}
