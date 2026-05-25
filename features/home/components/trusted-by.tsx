"use client"

import Image from "next/image"

interface TrustedByProps {
  clients: {
    id: string
    name: string
    logoUrl?: string | null
  }[]
}

export function TrustedBy({
  clients,
}: TrustedByProps) {

  const duplicated = [
    ...clients,
    ...clients,
  ]

  return (
    <section className="relative overflow-hidden py-20">

      <div className="mb-10 text-center">

        <p
          className="
            text-sm
            uppercase
            tracking-[0.4em]
            text-zinc-500
          "
        >
          Empresas que confiam
        </p>

      </div>

      <div className="relative overflow-hidden">

        {/* Fade esquerda */}
        <div
          className="
            absolute
            left-0
            top-0
            z-10
            h-full
            w-24
            bg-gradient-to-r
            from-[#050816]
            to-transparent
          "
        />

        {/* Fade direita */}
        <div
          className="
            absolute
            right-0
            top-0
            z-10
            h-full
            w-24
            bg-gradient-to-l
            from-[#050816]
            to-transparent
          "
        />

        <div
          className="
            flex
            min-w-max
            gap-6
            animate-marquee
          "
        >

          {duplicated.map((client, index) => (

            <div
              key={`${client.id}-${index}`}

              className="
                flex
                h-32
                min-w-[280px]
                items-center
                justify-center
                rounded-[28px]
                border
                border-white/10
                bg-white/[0.03]
                px-10
                backdrop-blur-xl
              "
            >

              <Image
                src={client.logoUrl || "/placeholder.png"}
                alt={client.name}
                width={260}
                height={120}
                className="
                  h-24
                  w-auto
                  object-contain
                "
              />

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}