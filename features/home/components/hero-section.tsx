"use client"

import { useState } from "react"

import { MagneticButton } from "@/components/ui/magnetic-button"
import { LeadModal } from "@/components/ui/lead-modal"

import { siteContent } from "@/content/site-content"

interface HeroSectionProps {
  heroTitle: string
  heroSubtitle: string
  navbarButton: string
  whatsappNumber: string
}

export function HeroSection({
  heroTitle,
  heroSubtitle,
  navbarButton,
  whatsappNumber,
}: HeroSectionProps) {

  const [openModal, setOpenModal] =
    useState(false)

  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-32 md:pb-32 md:pt-40">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#06b6d4_0%,transparent_35%)] opacity-20" />

      <div className="container relative z-10 mx-auto max-w-7xl">

        <div className="mx-auto max-w-5xl text-center">

          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm text-cyan-300 backdrop-blur-xl">
            {siteContent.hero.badge}
          </div>

          {/* Title */}
          <h1 className=" 
                mx-auto
                mt-8
                max-w-5xl
                text-justify
                text-3xl
                font-black
                leading-[1.05]
                tracking-tight
                text-white
                md:text-6xl
                lg:text-7xl">
            {heroTitle}
          </h1>

          {/* Subtitle */}
          <p className="
                mx-auto
                mt-8
                max-w-4xl
                text-center
                text-lg
                leading-relaxed
                text-zinc-400
                md:text-2xl">
            {heroSubtitle}
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">

            <MagneticButton>

              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-2xl
                  bg-cyan-400
                  px-8
                  py-5
                  text-lg
                  font-bold
                  text-black
                  transition-all
                  duration-300

                  hover:scale-105
                  hover:bg-cyan-300
                  hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]
                "
              >
                {navbarButton}
              </a>

            </MagneticButton>

            <a
              href="#cases"
              className="
                rounded-2xl
                border border-white/10
                bg-white/[0.03]
                px-8
                py-5
                text-lg
                font-medium
                text-white
                backdrop-blur-xl
                transition-all
                duration-300

                hover:border-cyan-400/30
                hover:bg-cyan-400/[0.03]
              "
            >
              {siteContent.hero.secondaryButton}
            </a>

          </div>

        </div>

      </div>

      <LeadModal
        open={openModal}
        onClose={() =>
          setOpenModal(false)
        }
      />
    </section>
  )
}