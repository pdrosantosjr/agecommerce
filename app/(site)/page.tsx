import { prisma } from "@/lib/prisma"

import { Navbar } from "@/features/home/components/navbar"
import { HeroSection } from "@/features/home/components/hero-section"
import { TrustedBy } from "@/features/home/components/trusted-by"
import { CasesSection } from "@/features/home/components/cases-section"
import { ServicesSection } from "@/features/home/components/services-section"
import { TestimonialsSection } from "@/features/home/components/testimonials-section"
import { CTASection } from "@/features/home/components/cta-section"
import { FAQSection } from "@/features/home/components/faq-section"
import { FooterSection } from "@/features/home/components/footer-section"

import { BackgroundGrid } from "@/features/home/components/background-grid"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { WhatsAppFloat } from "@/components/ui/whatsapp-float"

export default async function HomePage() {

  const content =
    await prisma.siteContent.findFirst()

  const clients =
    await prisma.clientItem.findMany({
      orderBy: {
        order: "asc",
      },
    })

  const cases =
    await prisma.caseItem.findMany({
      orderBy: {
        order: "asc",
      },

      select: {
        id: true,
        clientName: true,
        niche: true,
        result: true,
        description: true,
        imageUrl: true,
        instagramUrl: true,

        websiteUrl: true,
        websiteButtonText: true,
      },
  
      take: 9,
    })

  const services =
    await prisma.serviceItem.findMany({
      orderBy: {
        order: "asc",
      },

      take: 9,
    })

  const testimonials =
    await prisma.testimonialItem.findMany({
      orderBy: {
        order: "asc",
      },
    })

  const faqItems =
    await prisma.fAQItem.findMany({
      orderBy: {
        order: "asc",
      },
    })

  const footerServices =
    await prisma.serviceItem.findMany({
      orderBy: {
        order: "asc",
      },

      take: 4,
    })

  return (
    <main className="relative overflow-hidden bg-[#050816]">

      <BackgroundGrid />

      <ScrollProgress />

      <div className="relative z-10">

        <Navbar
          navbarButton={
            content?.navbarButton ||
            "Cresça com a gente"
          }

          whatsappNumber={
            content?.whatsappNumber ||
            "5511999999999"
          }

          navbarServicesText={
            content?.navbarServicesText ||
            "Serviços"
          }

          navbarCasesText={
            content?.navbarCasesText ||
            "Cases"
          }

          navbarFaqText={
            content?.navbarFaqText ||
            "FAQ"
          }

          navbarContactText={
            content?.navbarContactText ||
            "Contato"
          }
        />

        <HeroSection
          heroTitle={
            content?.heroTitle ||
            "Escalamos empresas com marketing de performance"
          }

          heroSubtitle={
            content?.heroSubtitle ||
            "Estratégias premium para negócios que querem crescer com previsibilidade."
          }

          navbarButton={
            content?.navbarButton ||
            "Cresça com a gente"
          }

          whatsappNumber={
            content?.whatsappNumber ||
            "5511999999999"
          }
        />

        <TrustedBy
          clients={clients}
        />

        <CasesSection
          cases={cases || []}
        />
      
        <ServicesSection
          services={services}
        />

        <TestimonialsSection
          testimonials={testimonials}
        />

        <CTASection
          navbarButton={
            content?.navbarButton ||
            "Cresça com a gente"
          }

          whatsappNumber={
            content?.whatsappNumber ||
            "5511999999999"
          }

          ctaBadge={
            content?.ctaBadge ||
            "Vamos crescer sua empresa"
          }

          ctaTitle={
            content?.ctaTitle ||
            "Transforme sua marca"
          }

          ctaHighlight={
            content?.ctaHighlight ||
            "crescimento previsível"
          }

          ctaSubtitle={
            content?.ctaSubtitle ||
            "Estratégias premium de tráfego, automação e conversão desenvolvidas para negócios que querem escalar de verdade."
          }
        />

        <FAQSection
          faqItems={faqItems}
        />

        <FooterSection
          footerDescription={
            content?.footerDescription ||
            "Estratégias digitais focadas em crescimento, performance e escalabilidade."
          }

          footerEmail={
            content?.footerEmail ||
            "contato@agecommerce.com"
          }

          footerInstagram={
            content?.footerInstagram ||
            "https://instagram.com"
          }

          footerWhatsapp={
            content?.footerWhatsapp ||
            `https://wa.me/${
              content?.whatsappNumber ||
              "5511999999999"
            }`
          }

          navbarServicesText={
            content?.navbarServicesText ||
            "Serviços"
          }

          navbarCasesText={
            content?.navbarCasesText ||
            "Cases"
          }

          navbarFaqText={
            content?.navbarFaqText ||
            "FAQ"
          }

          services={footerServices}

          platforms={
            await prisma.platformItem.findMany({
              orderBy: {
                order: "asc",
              },
            })
          }
        />

        <WhatsAppFloat
          whatsappNumber={
            content?.whatsappNumber ||
            "5511999999999"
          }
        />

      </div>

    </main>
  )
}