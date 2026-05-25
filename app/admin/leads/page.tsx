import { prisma } from "@/lib/prisma"

export default async function LeadsPage() {

  const leads =
    await prisma.lead.findMany({
      orderBy: {
        createdAt: "desc",
      },
    })

  const formattedLeads =
    leads.map((lead) => ({
      ...lead,

      nextContactAt:
        lead.nextContactAt
          ? new Date(lead.nextContactAt)
          : null,
    }))

  return (
    <main className="p-10 text-white">

      <h1 className="mb-8 text-4xl font-black">
        Leads
      </h1>

      <div className="space-y-4">

        {formattedLeads.map((lead) => (

          <div
            key={lead.id}

            className="
              rounded-2xl
              border border-white/10
              bg-white/[0.03]
              p-6
            "
          >

            <h2 className="text-2xl font-bold">
              {lead.name}
            </h2>

            <p className="mt-2 text-zinc-400">
              {lead.whatsapp}
            </p>

          </div>

        ))}

      </div>

    </main>
  )
}