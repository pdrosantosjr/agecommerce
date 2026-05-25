"use client"

interface ServicesSectionProps {
  services: {
    id: string
    title: string
    description: string
    imageUrl?: string | null
  }[]
}

export function ServicesSection({
  services,
}: ServicesSectionProps) {

  return (
    <section
      id="services"
      className="px-4 py-20 md:px-6 md:py-32"
    >

      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="text-center">

          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Serviços
          </p>

          <h2 className="mt-4 text-4xl font-black text-white md:mt-6 md:text-6xl">
            Soluções para crescimento
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-zinc-400 md:mt-6 md:text-lg">
            Estratégias premium para empresas que querem escala previsível.
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

          {services.map((item) => (

            <div
              key={item.id}

              className="
                min-w-[260px]
                max-w-[260px]
                snap-center
                overflow-hidden
                rounded-[28px]
                border border-white/10
                bg-white/[0.03]
                transition-all
                duration-300
              "
            >

              <div className="p-6">

                {/* Image */}
                {
                  item.imageUrl && (

                    <img
                      src={item.imageUrl}
                      alt={item.title}

                      className="
                        h-20
                        w-20
                        rounded-2xl
                        object-cover
                      "
                    />

                  )
                }

                {/* Title */}
                <h3
                  className="
                    mt-6
                    text-3xl
                    font-black
                    leading-tight
                    text-white
                  "
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-5
                    text-sm
                    leading-relaxed
                    text-zinc-400
                  "
                >
                  {item.description}
                </p>

              </div>

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

          {services.map((item) => (

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

              {/* Image */}
              {
                item.imageUrl && (

                  <img
                    src={item.imageUrl}
                    alt={item.title}

                    className="
                      h-24
                      w-24
                      rounded-2xl
                      object-cover
                    "
                  />

                )
              }

              {/* Title */}
              <h3
                className="
                  mt-8
                  text-4xl
                  font-black
                  leading-tight
                  text-white
                "
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className="
                  mt-6
                  leading-relaxed
                  text-zinc-400
                "
              >
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}