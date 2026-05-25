import { prisma } from "@/lib/prisma"

export default async function ServicesPage() {

  const services =
    await prisma.serviceItem.findMany({
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
            Serviços
          </p>

          <h1 className="mt-6 text-5xl font-black md:text-7xl">
            Soluções para crescimento
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400 md:text-2xl">
            Estratégias premium para empresas que querem escalar.
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

          {services.map((service) => (

            <div
              key={service.id}
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
                    service.imageUrl ||
                    "https://images.unsplash.com/photo-1499750310107-5fef28a66643"
                  }
                  alt={service.title}
                  className="
                    h-48
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

                <h2 className="text-3xl font-black text-white">
                  {service.title}
                </h2>

                <p className="mt-6 leading-relaxed text-zinc-400">
                  {service.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </main>
  )
}