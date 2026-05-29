import { prisma } from "@/lib/prisma"

export default async function CasesPage() {

  const cases =
    await prisma.caseItem.findMany({
      orderBy: {
        order: "asc",
      },
    })

  return (
    <main className="min-h-screen bg-[#050816] px-4 py-24 text-white md:px-6">

      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="text-center">

          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Cases
          </p>

          <h1 className="mt-6 text-4xl font-black md:text-6xl">
            Resultados que geram crescimento
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-zinc-400 md:text-xl">
            Estratégias premium de tráfego, automação e conversão
            aplicadas em negócios reais.
          </p>

        </div>

        {/* MOBILE */}
        <div
          className="
            mt-16
            grid
            grid-flow-col
            auto-cols-[240px]
            gap-4
            overflow-x-auto
            pb-4

            md:hidden
          "
        >

          {cases.map((item) => (

            <div
              key={`${item.id}-mobile`}
              className="
                overflow-hidden
                rounded-[26px]
                border border-white/10
                bg-white/[0.03]
              "
            >

              <img
                src={
                  item.imageUrl ||
                  "https://images.unsplash.com/photo-1499750310107-5fef28a66643"
                }
                alt={item.clientName}
                className="
                  h-24
                  w-full
                  object-cover
                "
              />

              <div className="flex min-h-[420px] flex-col p-5">

                <p className="text-[10px] uppercase tracking-[0.25em] text-cyan-400">
                  {item.niche}
                </p>

                <h2
                  className="
                    mt-3
                    text-[15px]
                    font-black
                    leading-snug
                  "
                >
                  {item.clientName}
                </h2>

                <div
                  className="
                    mt-5
                    rounded-2xl
                    border border-cyan-400/20
                    bg-cyan-400/10
                    p-4
                  "
                >

                  <p
                    className="
                      text-sm
                      font-bold
                      leading-relaxed
                      text-justify
                      text-cyan-300
                    "
                  >
                    {item.result}
                  </p>

                </div>

                <p
                  className="
                    mt-5
                    flex-1
                    text-[13px]
                    leading-relaxed
                    text-zinc-400
                  "
                >
                  {item.description}
                </p>

                <div className="mt-6 flex flex-col gap-3">

                  {item.instagramUrl && (
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
                        text-sm
                        font-bold
                        text-black
                      "
                    >
                      Instagram
                    </a>
                  )}

                  {item.websiteUrl && (
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
                        text-sm
                        font-bold
                        text-white
                      "
                    >
                      {item.websiteButtonText || "Ver site"}
                    </a>
                  )}

                </div>

              </div>

            </div>

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

            <div
              key={`${item.id}-desktop`}
              className="
                overflow-hidden
                rounded-[26px]
                border border-white/10
                bg-white/[0.03]
              "
            >

              <img
                src={
                  item.imageUrl ||
                  "https://images.unsplash.com/photo-1499750310107-5fef28a66643"
                }
                alt={item.clientName}
                className="
                  h-52
                  w-full
                  object-cover
                "
              />

              <div className="flex flex-col p-6">

                <p className="text-[11px] uppercase tracking-[0.25em] text-cyan-400">
                  {item.niche}
                </p>

                <h2
                  className="
                    mt-3
                    text-2xl
                    font-black
                    leading-snug
                  "
                >
                  {item.clientName}
                </h2>

                <div
                  className="
                    mt-5
                    rounded-2xl
                    border border-cyan-400/20
                    bg-cyan-400/10
                    p-5
                  "
                >

                  <p
                    className="
                      text-base
                      font-bold
                      leading-relaxed
                      text-justify
                      text-cyan-300
                    "
                  >
                    {item.result}
                  </p>

                </div>

                <p
                  className="
                    mt-5
                    flex-1
                    text-sm
                    leading-relaxed
                    text-zinc-400
                  "
                >
                  {item.description}
                </p>

                <div className="mt-6 flex flex-col gap-3">

                  {item.instagramUrl && (
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
                        text-sm
                        font-bold
                        text-black
                      "
                    >
                      Instagram
                    </a>
                  )}

                  {item.websiteUrl && (
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
                        text-sm
                        font-bold
                        text-white
                      "
                    >
                      {item.websiteButtonText || "Ver site"}
                    </a>
                  )}

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </main>
  )
}