import { prisma } from "@/lib/prisma"

import {
  DollarSign,
  AlertTriangle,
  BadgeCheck,
  CalendarClock,
} from "lucide-react"

export default async function FinancePage() {

  const clients =
    await prisma.client.findMany()

  const activeClients =
    clients.filter(
      (client) =>
        (client.contractStatus || "Ativo") === "Ativo"
    )

  const inactiveClients =
    clients.filter(
      (client) =>
        (client.contractStatus || "Ativo") !== "Ativo"
    )

  const monthlyRevenue =
    activeClients.reduce(
      (acc, client) => {

        const value = Number(
          client.monthlyFee
            ?.replace(/[^\d]/g, "")
        )

        return acc + (value || 0)

      },
      0
    ) / 100

  const overdueClients =
    clients.filter(
      (client) =>
        (client.financialStatus || "Pago") ===
        "Em atraso"
    )

  return (
    <main className="min-h-screen bg-[#050816] p-6 text-white md:p-10">

      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10">

          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Financeiro
          </p>

          <h1 className="mt-4 text-5xl font-black">
            Gestão financeira
          </h1>

          <p className="mt-4 text-zinc-400">
            Controle financeiro operacional da agência.
          </p>

        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {/* Receita */}
          <div
            className="
              rounded-[32px]
              border border-white/10
              bg-white/[0.03]
              p-6
              backdrop-blur-xl
            "
          >

            <div
              className="
                flex h-14 w-14
                items-center justify-center
                rounded-2xl
                bg-green-500/10
              "
            >
              <DollarSign
                size={26}
                className="text-green-400"
              />
            </div>

            <p className="mt-6 text-zinc-400">
              Receita mensal
            </p>

            <h2 className="mt-2 text-4xl font-black">
              {monthlyRevenue.toLocaleString(
                "pt-BR",
                {
                  style: "currency",
                  currency: "BRL",
                }
              )}
            </h2>

          </div>

          {/* Clientes ativos */}
          <div
            className="
              rounded-[32px]
              border border-white/10
              bg-white/[0.03]
              p-6
              backdrop-blur-xl
            "
          >

            <div
              className="
                flex h-14 w-14
                items-center justify-center
                rounded-2xl
                bg-cyan-400/10
              "
            >
              <BadgeCheck
                size={26}
                className="text-cyan-400"
              />
            </div>

            <p className="mt-6 text-zinc-400">
              Contratos ativos
            </p>

            <h2 className="mt-2 text-4xl font-black">
              {activeClients.length}
            </h2>

          </div>

          {/* Inadimplentes */}
          <div
            className="
              rounded-[32px]
              border border-white/10
              bg-white/[0.03]
              p-6
              backdrop-blur-xl
            "
          >

            <div
              className="
                flex h-14 w-14
                items-center justify-center
                rounded-2xl
                bg-red-500/10
              "
            >
              <AlertTriangle
                size={26}
                className="text-red-400"
              />
            </div>

            <p className="mt-6 text-zinc-400">
              Em atraso
            </p>

            <h2 className="mt-2 text-4xl font-black">
              {overdueClients.length}
            </h2>

          </div>

          {/* Encerrados */}
          <div
            className="
              rounded-[32px]
              border border-white/10
              bg-white/[0.03]
              p-6
              backdrop-blur-xl
            "
          >

            <div
              className="
                flex h-14 w-14
                items-center justify-center
                rounded-2xl
                bg-yellow-500/10
              "
            >
              <CalendarClock
                size={26}
                className="text-yellow-400"
              />
            </div>

            <p className="mt-6 text-zinc-400">
              Encerrados
            </p>

            <h2 className="mt-2 text-4xl font-black">
              {inactiveClients.length}
            </h2>

          </div>

        </div>

        {/* Table */}
        <div
          className="
            mt-10
            overflow-hidden
            rounded-[32px]
            border border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
          "
        >

          <div className="overflow-x-auto">

            <table className="w-full min-w-[1200px]">

              <thead className="border-b border-white/10">

                <tr className="text-left text-zinc-400">

                  <th className="px-6 py-5 font-medium">
                    Empresa
                  </th>

                  <th className="px-6 py-5 font-medium">
                    Responsável
                  </th>

                  <th className="px-6 py-5 font-medium">
                    Mensalidade
                  </th>

                  <th className="px-6 py-5 font-medium">
                    Vencimento
                  </th>

                  <th className="px-6 py-5 font-medium">
                    Contrato
                  </th>

                  <th className="px-6 py-5 font-medium">
                    Financeiro
                  </th>

                </tr>

              </thead>

              <tbody>

                {clients.map((client) => (

                  <tr
                    key={client.id}
                    className="
                      border-b border-white/5
                    "
                  >

                    <td className="px-6 py-5 font-medium">
                      {client.company}
                    </td>

                    <td className="px-6 py-5 text-zinc-300">
                      {client.contactName}
                    </td>

                    <td className="px-6 py-5 text-zinc-300">
                      {client.monthlyFee || "-"}
                    </td>

                    <td className="px-6 py-5 text-zinc-300">
                      Dia {client.dueDay || "-"}
                    </td>

                    <td className="px-6 py-5">

                      <span
                        className="
                          rounded-full
                          border border-cyan-400/20
                          bg-cyan-400/10
                          px-4 py-2
                          text-sm
                          font-medium
                          text-cyan-400
                        "
                      >
                        {client.contractStatus || "Ativo"}
                      </span>

                    </td>

                    <td className="px-6 py-5">

                      <span
                        className={`
                          rounded-full
                          px-4 py-2
                          text-sm
                          font-medium

                          ${
                            (client.financialStatus || "Pago") ===
                            "Pago"

                              ? `
                                border border-green-500/20
                                bg-green-500/10
                                text-green-400
                              `

                              : `
                                border border-red-500/20
                                bg-red-500/10
                                text-red-400
                              `
                          }
                        `}
                      >
                        {client.financialStatus || "Pago"}
                      </span>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </main>
  )
}