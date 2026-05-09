import {
  HeroSection,
  ServicesSection,
} from "@/features/home"

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-[#050816]">
      <HeroSection />
      <ServicesSection />
    </main>
  )
}