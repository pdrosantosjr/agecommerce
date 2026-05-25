"use client"

interface TestimonialsSectionProps {
  testimonials: {
    id: string
    name: string
    role: string
    content: string
    imageUrl?: string | null
  }[]
}

export function TestimonialsSection({
  testimonials,
}: TestimonialsSectionProps) {

  return (
    <section className="px-4 py-20 md:px-6 md:py-32">

      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="text-center">

          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Feedbacks
          </p>

          <h2 className="mt-4 text-4xl font-black text-white md:mt-6 md:text-6xl">
            O que nossos clientes dizem
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-zinc-400 md:mt-6 md:text-lg">
            Resultados reais para empresas que querem crescer.
          </p>

        </div>

        {/* MOBILE SLIDER */}
        <div
          className="
            mt-12
            flex
            snap-x
            snap-mandatory
            gap-4
            overflow-x-auto
            pb-4

            md:hidden
          "
        >

          {testimonials.map((item) => (

            <div
              key={item.id}

              className="
                min-w-[280px]
                max-w-[280px]
                snap-center
                rounded-[28px]
                border border-white/10
                bg-white/[0.03]
                p-6
              "
            >

              {/* Avatar */}
              <div className="flex items-center gap-4">

                {
                  item.imageUrl && (

                    <img
                      src={item.imageUrl}
                      alt={item.name}

                      className="
                        h-14
                        w-14
                        rounded-full
                        object-cover
                      "
                    />

                  )
                }

                <div>

                  <h3 className="text-lg font-bold text-white">
                    {item.name}
                  </h3>

                  <p className="text-sm text-cyan-400">
                    {item.role}
                  </p>

                </div>

              </div>

              {/* Content */}
              <p
                className="
                  mt-6
                  text-sm
                  leading-relaxed
                  text-zinc-400
                "
              >
                “{item.content}”
              </p>

            </div>

          ))}

        </div>

        {/* DESKTOP GRID */}
        <div
          className="
            mt-16
            hidden
            grid-cols-3
            gap-8

            md:grid
          "
        >

          {testimonials.map((item) => (

            <div
              key={item.id}

              className="
                rounded-[32px]
                border border-white/10
                bg-white/[0.03]
                p-10
                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-cyan-400/20
              "
            >

              {/* User */}
              <div className="flex items-center gap-5">

                {
                  item.imageUrl && (

                    <img
                      src={item.imageUrl}
                      alt={item.name}

                      className="
                        h-16
                        w-16
                        rounded-full
                        object-cover
                      "
                    />

                  )
                }

                <div>

                  <h3 className="text-2xl font-bold text-white">
                    {item.name}
                  </h3>

                  <p className="text-cyan-400">
                    {item.role}
                  </p>

                </div>

              </div>

              {/* Content */}
              <p
                className="
                  mt-8
                  leading-relaxed
                  text-zinc-400
                "
              >
                “{item.content}”
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}