"use client"

interface CasesSectionProps {
  cases: {
    id: string
    clientName: string
    niche: string
    result: string
    description: string
    imageUrl?: string | null
    instagramUrl?: string | null
  }[]
}

interface CaseCardProps {
  item: {
    id: string
    clientName: string
    niche: string
    result: string
    description: string
    imageUrl?: string | null
    instagramUrl?: string | null
  }

  mobile?: boolean
}

function CaseCard({
  item,
  mobile = false,
}: CaseCardProps) {

  return (
    <div
      className={`
        overflow-hidden
        rounded-[28px]
        border border-white/10
        bg-white/[0.03]

        ${
          mobile
            ? "w-[260px]"
            : ""
        }
      `}
    >

      {/* Image */}
      <img
        src={
          item.imageUrl ||
          "https://images.unsplash.com/photo-1499750310107-5fef28a66643"
        }

        alt={item.clientName}

        className={`
          w-full
          object-cover

          ${
            mobile
              ? "h-44"
              : "h-64"
          }
        `}
      />

      {/* Content */}
      <div
        className={`
          flex
          flex-col

          ${
            mobile
              ? "p-5"
              : "p-8"
          }
        `}
      >

        {/* Niche */}
        <p
          className={`
            uppercase
            tracking-[0.3em]
            text-cyan-400

            ${
              mobile
                ? "text-[11px]"
                : "text-sm"
            }
          `}
        >
          {item.niche}
        </p>

        {/* Title */}
        <h3
          className={`
            mt-3
            font-black
            leading-tight
            text-white

            ${
              mobile
                ? "text-2xl"
                : "text-4xl"
            }
          `}
        >
          {item.clientName}
        </h3>

        {/* Result */}
        <div
          className={`
            mt-6
            w-full
            break-words
            whitespace-normal
            rounded-2xl
            border border-cyan-400/20
            bg-cyan-400/10
            text-cyan-300

            ${
              mobile
                ? "p-4 text-sm font-semibold"
                : "p-5 text-lg font-bold"
            }
          `}
        >

          <p className="w-full break-words">
            {item.result}
          </p>

        </div>

        {/* Description */}
        <div className="mt-5">

          <p
            className="
              text-[13px]
              leading-6
              text-zinc-400
            "
          >
            {item.description}
          </p>

        </div>

        {/* Instagram */}
        {
          item.instagramUrl && (

            <div className="mt-6">

              <a
                href={item.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"

                className="
                  flex
                  items-center
                  justify-center
                  rounded-xl
                  bg-cyan-400
                  px-4 py-3
                  text-sm
                  font-bold
                  text-black
                "
              >
                Instagram
              </a>

            </div>

          )
        }

      </div>

    </div>
  )
}

export function CasesSection({
  cases,
}: CasesSectionProps) {

  return (
    <section
      id="cases"
      className="
        relative
        z-10
        px-4
        py-20
        md:px-6
        md:py-32
      "
    >

      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="text-center">

          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Cases
          </p>

          <h2 className="mt-4 text-4xl font-black text-white md:text-6xl">
            Resultados reais
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-zinc-400 md:text-lg">
            Crescimento previsível para empresas que querem escala.
          </p>

        </div>

        {/* MOBILE */}
        <div
          className="
            mt-20
            grid
            grid-flow-col
            auto-cols-[260px]
            gap-4
            overflow-x-auto
            pb-4

            md:hidden
          "
        >

          {cases.map((item) => (
            <CaseCard
              key={`${item.id}-mobile`}
              item={item}
              mobile
            />
          ))}

        </div>

        {/* DESKTOP */}
        <div
          className="
            mt-16
            hidden
            grid-cols-3
            gap-8

            md:grid
          "
        >

          {cases.map((item) => (
            <CaseCard
              key={`${item.id}-desktop`}
              item={item}
            />
          ))}

        </div>

        {/* Button Desktop Only */}
          <div
            className="
              mt-14
              hidden
              flex justify-center

              md:flex
            "
          >

            <a
              href="/cases"

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
              Ver todos os cases
            </a>

          </div>

      </div>

    </section>
  )
}