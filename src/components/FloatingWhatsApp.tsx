import { MessageCircle } from "lucide-react"
import { WHATSAPP_URL } from "@/constants"

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chamar Michele no WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="relative flex items-center justify-center size-16 rounded-full bg-pink-brand hover:bg-pink-brand/90 shadow-2xl hover:shadow-3xl transition-all duration-200 hover:scale-110 float-animation">
        {/* Ping animation */}
        <span className="absolute inset-0 rounded-full bg-pink-brand animate-ping opacity-30" />

        {/* Icon */}
        <MessageCircle className="size-7 text-white relative z-10" />
      </div>

      {/* Tooltip */}
      <div className="absolute right-20 top-1/2 -translate-y-1/2 bg-foreground text-background text-sm font-medium px-3 py-2 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
        Falar com Michele
        <div className="absolute right-[-5px] top-1/2 -translate-y-1/2 size-2.5 bg-foreground rotate-45" />
      </div>
    </a>
  )
}
