import { prisma } from "@/lib/prisma"

export default async function CasesPage() {

  const cases =
    await prisma.caseItem.findMany({
      orderBy: {
        order: "asc",
      },
    })

  return (
    <main className="min-h-screen bg-[#050816] px-6 py-24 text-white">

      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="text-center">

          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Cases
          </p>

          <h1 className="mt-6 text-5xl font-black md:text-7xl">
            Resultados que geram crescimento
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400 md:text-2xl">
            Estratégias premium de tráfego, automação e conversão
            aplicadas em negócios reais.
          </p>

        </div>

        {/* Grid */}
        <div
          className="
            mt-20
            grid
            gap-8

            md:grid-cols-2
            xl:grid-cols-3
          "
        >

          {cases.map((item) => (

            <div
              key={item.id}
              className="
                group
                overflow-hidden
                rounded-[32px]
                border border-white/10
                bg-white/[0.03]
                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-cyan-400/20
              "
            >

              {/* Image */}
              <div className="overflow-hidden">

                <img
                  src={
                    item.imageUrl ||
                    "https://images.unsplash.com/photo-1499750310107-5fef28a66643"
                  }
                  alt={item.clientName}
                  className="
                    h-56
                    w-full
                    object-cover
                    transition-transform
                    duration-700

                    group-hover:scale-105
                  "
                />

              </div>

              {/* Content */}
              <div className="p-8">

                <div className="flex items-center justify-between gap-4">

                  <div>

                    <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
                      {item.niche}
                    </p>

                    <h2 className="mt-3 text-3xl font-black">
                      {item.clientName}
                    </h2>

                  </div>

                  <div
                    className="
                      rounded-2xl
                      border border-cyan-400/20
                      bg-cyan-400/10
                      px-5 py-3
                      text-lg
                      font-bold
                      text-cyan-300
                    "
                  >
                    {item.result}
                  </div>

                </div>

                <p className="mt-6 leading-relaxed text-zinc-400">
                  {item.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </main>
  )
}