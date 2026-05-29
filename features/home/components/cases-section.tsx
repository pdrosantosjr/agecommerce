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

    websiteUrl?: string | null
    websiteButtonText?: string | null
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

    websiteUrl?: string | null
    websiteButtonText?: string | null
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
        rounded-[26px]
        border border-white/10
        bg-white/[0.03]

        ${
          mobile
            ? "w-[240px]"
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
              ? "h-24"
              : "h-52"
          }
        `}
      />

      {/* Content */}
      <div
        className={`
          flex
          min-h-[420px]
          flex-col

          ${
            mobile
              ? "p-5"
              : "p-6"
          }
        `}
      >

        {/* Niche */}
        <p
          className={`
            uppercase
            tracking-[0.25em]
            text-cyan-400

            ${
              mobile
                ? "text-[10px]"
                : "text-[11px]"
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
            leading-snug
            text-white

            ${
              mobile
                ? "text-[15px]"
                : "text-2xl"
            }
          `}
        >
          {item.clientName}
        </h3>

        {/* Result */}
        <div
          className={`
            mt-5
            rounded-2xl
            border border-cyan-400/20
            bg-cyan-400/10

            ${
              mobile
                ? "p-4"
                : "p-5"
            }
          `}
        >

          <p
            className={`
              break-words
              font-bold
              leading-relaxed
              text-justify
              text-cyan-300

              ${
                mobile
                  ? "text-sm"
                  : "text-base"
              }
            `}
          >
            {item.result}
          </p>

        </div>

        {/* Description */}
        <p
          className={`
            mt-5
            flex-1
            leading-relaxed
            text-zinc-400

            ${
              mobile
                ? "text-[13px]"
                : "text-sm"
            }
          `}
        >
          {item.description}
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col gap-3">

          {
            item.instagramUrl && (

              <a
                href={item.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"

                className="
                  flex
                  h-11
                  items-center
                  justify-center
                  rounded-xl
                  bg-cyan-400
                  px-4
                  text-sm
                  font-bold
                  text-black
                "
              >
                Instagram
              </a>

            )
          }

          {
            item.websiteUrl && (

              <a
                href={item.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"

                className="
                  flex
                  h-11
                  items-center
                  justify-center
                  rounded-xl
                  border border-white/10
                  bg-white/[0.03]
                  px-4
                  text-sm
                  font-bold
                  text-white

                  transition-all
                  duration-300

                  hover:border-cyan-400/30
                  hover:text-cyan-400
                "
              >
                {
                  item.websiteButtonText ||
                  "Ver site"
                }
              </a>

            )
          }

        </div>

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
        md:py-28
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
            mt-16
            grid
            grid-flow-col
            auto-cols-[230px]
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
            gap-6

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

        {/* Button */}
        <div
          className="
            mt-14
            hidden
            justify-center

            md:flex
          "
        >

          <a
            href="/cases"

            className="
              rounded-2xl
              border border-white/10
              bg-white/[0.03]
              px-7
              py-4
              text-base
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