"use client"

import { MagneticButton } from "@/components/ui/magnetic-button"

interface CTASectionProps {
  navbarButton: string
  whatsappNumber: string

  ctaBadge: string
  ctaTitle: string
  ctaHighlight: string
  ctaSubtitle: string
}

export function CTASection({
  navbarButton,
  whatsappNumber,
  ctaBadge,
  ctaTitle,
  ctaHighlight,
  ctaSubtitle,
}: CTASectionProps) {

  return (
    <section className="relative px-6 py-24 md:py-32">

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          overflow-hidden
          rounded-[40px]
          border border-white/10
          bg-[#07101f]
          px-6 py-20
          text-center
          md:px-16
        "
      >

        {/* Glow */}
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.16),transparent_70%)]
          "
        />

        <div className="relative z-10">

          {/* Badge */}
          <div
            className="
              inline-flex
              rounded-full
              border border-cyan-400/20
              bg-cyan-400/10
              px-5 py-2
              text-sm
              text-cyan-300
            "
          >
            {ctaBadge}
          </div>

          {/* Title */}
          <h2 className="mx-auto mt-8 max-w-4xl text-2xl font-black leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">

            {ctaTitle}

            <br />
            

            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {ctaHighlight}
            </span>

          </h2>

          {/* Subtitle */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
            {ctaSubtitle}
          </p>

          {/* Button */}
          <div className="mt-12 flex items-center justify-center">

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

          </div>

        </div>

      </div>

    </section>
  )
}