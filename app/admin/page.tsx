import { prisma } from "@/lib/prisma"

import { AdminDashboard } from "@/components/admin/admin-dashboard"

export default async function AdminPage() {

  const leads =
    await prisma.lead.findMany({
      orderBy: {
        createdAt: "desc",
      },

      take: 5,
    })

  const clients =
    await prisma.client.findMany({
      orderBy: {
        createdAt: "desc",
      },

      take: 5,
    })

  const totalLeads =
    await prisma.lead.count()

  const totalClients =
    await prisma.client.count()

  const clientsList =
    await prisma.client.findMany()

  const monthlyRevenue =
    clientsList.reduce((acc: any, client: any) => {

      const value =
        Number(
          client.monthlyFee
            ?.replace(/[^\d]/g, "")
        ) / 100 || 0

      return acc + value

    }, 0)

  const conversionRate =
    totalLeads > 0
      ? (
          (totalClients / totalLeads) *
          100
        ).toFixed(1)
      : "0"

  const leadsToContact =
    await prisma.lead.findMany({
      where: {
        nextContactAt: {
          not: null,
        },
      },

      orderBy: {
        nextContactAt: "asc",
      },

      take: 5,
    })

  const overdueClients =
    await prisma.client.findMany({
      where: {
        financialStatus: "Atrasado",
      },

      take: 5,
    })

  return (
    <AdminDashboard
      totalLeads={totalLeads}
      totalClients={totalClients}
      monthlyRevenue={monthlyRevenue}
      conversionRate={conversionRate}
      leads={leads}
      clients={clients}
      leadsToContact={leadsToContact}
      overdueClients={overdueClients}
    />
  )
}