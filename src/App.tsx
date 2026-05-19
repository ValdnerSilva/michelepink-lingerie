import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { AlertBlock } from "@/components/AlertBlock"
import { HowItWorks } from "@/components/HowItWorks"
import { Categories } from "@/components/Categories"
import { CatalogSection } from "@/components/CatalogSection"
import { Payment } from "@/components/Payment"
import { TrustSection } from "@/components/TrustSection"
import { FinalCTA } from "@/components/FinalCTA"
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp"
import { Footer } from "@/components/Footer"

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <AlertBlock />
        <HowItWorks />
        <Categories />
        <CatalogSection />
        <Payment />
        <TrustSection />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
