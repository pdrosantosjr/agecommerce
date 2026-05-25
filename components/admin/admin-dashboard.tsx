"use client"

import { useState } from "react"

import Link from "next/link"

import { Sidebar } from "@/components/admin/sidebar"
import { Topbar } from "@/components/admin/topbar"

import {
  Users,
  TrendingUp,
  DollarSign,
  Building2,
} from "lucide-react"

interface AdminDashboardProps {
  totalLeads: number
  totalClients: number
  monthlyRevenue: number
  conversionRate: string

  leads: {
    id: string
    name: string
    company: string | null
    whatsapp: string
    status: string
    createdAt: Date
    nextContactAt: string | null
  }[]

  clients: {
    id: string
    company: string
    contactName: string
    monthlyFee: string | null
    contractStatus: string
    financialStatus: string
  }[]

  leadsToContact: {
    id: string
    name: string
    company: string | null
    nextContactAt: string | null
  }[]

  overdueClients: {
    id: string
    company: string
    financialStatus: string
  }[]
}

export function AdminDashboard({
  totalLeads,
  totalClients,
  monthlyRevenue,
  conversionRate,
  leads,
  clients,
  leadsToContact,
  overdueClients,
}: AdminDashboardProps) {
  const [sidebarOpen, setSidebarOpen] =
    useState(false)

  const cards = [
    {
      title: "Leads",
      value: totalLeads,
      icon: Users,
      color: "cyan",
    },

    {
      title: "Clientes",
      value: totalClients,
      icon: Building2,
      color: "green",
    },

    {
      title: "Conversão",
      value: `${conversionRate}%`,
      icon: TrendingUp,
      color: "purple",
    },

    {
      title: "Receita mensal",
      value:
        (monthlyRevenue || 0).toLocaleString(
          "pt-BR",
          {
            style: "currency",
            currency: "BRL",
          }
        ),
      icon: DollarSign,
      color: "yellow",
    },
  ]

  return (
    <main className="min-h-screen bg-[#050816] text-white">

      <Sidebar
        open={sidebarOpen}
        onClose={() =>
          setSidebarOpen(false)
        }
      />

      <div className="lg:ml-[280px]">

        <Topbar
          onMenuClick={() =>
            setSidebarOpen(true)
          }
        />

        <div className="p-6 md:p-8">

          {/* Header */}
          <div className="mb-10">

            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
              Dashboard
            </p>

            <h1 className="mt-4 text-4xl font-black md:text-6xl">
              Visão geral do negócio
            </h1>

            <p className="mt-4 max-w-2xl text-zinc-400">
              CRM operacional da Agecommerce.
            </p>

          </div>

          {/* Cards */}
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {cards.map((card) => {
              const Icon = card.icon

              return (
                <div
                  key={card.title}
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
                    <Icon
                      size={26}
                      className="text-cyan-400"
                    />
                  </div>

                  <p className="mt-6 text-zinc-400">
                    {card.title}
                  </p>

                  <h2 className="mt-2 text-4xl font-black">
                    {card.value}
                  </h2>

                </div>
              )
            })}

          </div>

                    {/* Operational Alerts */}
          <div className="mt-10 grid gap-6 xl:grid-cols-2">

            {/* Leads to contact */}
            <div
              className="
                overflow-hidden
                rounded-[32px]
                border border-cyan-400/10
                bg-cyan-400/[0.03]
                backdrop-blur-xl
              "
            >

              <div className="border-b border-white/10 p-6">

                <h2 className="text-2xl font-bold">
                  Leads para contactar
                </h2>

                <p className="mt-2 text-zinc-400">
                  Follow-ups programados.
                </p>

              </div>

              <div className="divide-y divide-white/5">

                {leadsToContact.length === 0 && (

                  <div className="p-6 text-zinc-500">
                    Nenhum follow-up pendente.
                  </div>

                )}

                {leadsToContact.map((lead) => (

                  <Link
                    key={lead.id}
                    href={`/admin/leads/${lead.id}`}
                    className="
                      flex items-center
                      justify-between
                      p-6
                      transition-all
                      duration-300

                      hover:bg-white/[0.03]
                    "
                  >

                    <div>

                      <h3 className="font-semibold">
                        {lead.name}
                      </h3>

                      <p className="mt-1 text-sm text-zinc-400">
                        {lead.company || "Sem empresa"}
                      </p>

                    </div>

                    <span
                      className="
                        rounded-full
                        border border-cyan-400/20
                        bg-cyan-400/10
                        px-3 py-1
                        text-sm
                        text-cyan-400
                      "
                    >
                      {lead.nextContactAt
                        ? new Intl.DateTimeFormat(
                            "pt-BR",
                            {
                              day: "2-digit",
                              month: "2-digit",
                            }
                          ).format(
                            new Date(
                              lead.nextContactAt
                            )
                          )
                        : "-"}
                    </span>

                  </Link>

                ))}

              </div>

            </div>

            {/* Overdue clients */}
            <div
              className="
                overflow-hidden
                rounded-[32px]
                border border-red-500/10
                bg-red-500/[0.03]
                backdrop-blur-xl
              "
            >

              <div className="border-b border-white/10 p-6">

                <h2 className="text-2xl font-bold">
                  Clientes em atraso
                </h2>

                <p className="mt-2 text-zinc-400">
                  Pagamentos pendentes.
                </p>

              </div>

              <div className="divide-y divide-white/5">

                {overdueClients.length === 0 && (

                  <div className="p-6 text-zinc-500">
                    Nenhum cliente em atraso.
                  </div>

                )}

                {overdueClients.map((client) => (

                  <Link
                    key={client.id}
                    href={`/admin/clients/${client.id}`}
                    className="
                      flex items-center
                      justify-between
                      p-6
                      transition-all
                      duration-300

                      hover:bg-white/[0.03]
                    "
                  >

                    <div>

                      <h3 className="font-semibold">
                        {client.company}
                      </h3>

                      <p className="mt-1 text-sm text-zinc-400">
                        Financeiro pendente
                      </p>

                    </div>

                    <span
                      className="
                        rounded-full
                        border border-red-500/20
                        bg-red-500/10
                        px-3 py-1
                        text-sm
                        text-red-400
                      "
                    >
                      {client.financialStatus}
                    </span>

                  </Link>

                ))}

              </div>

            </div>

          </div>

          {/* Grid */}
          <div className="mt-10 grid gap-6 xl:grid-cols-2">

            {/* Leads */}
            <div
              className="
                overflow-hidden
                rounded-[32px]
                border border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
              "
            >

              <div className="border-b border-white/10 p-6">

                <div className="flex items-center justify-between">

                  <div>
                    <h2 className="text-2xl font-bold">
                      Leads recentes
                    </h2>

                    <p className="mt-2 text-zinc-400">
                      Últimos leads capturados.
                    </p>
                  </div>

                  <Link
                    href="/admin/leads"
                    className="
                      text-sm
                      font-medium
                      text-cyan-400
                    "
                  >
                    Ver todos
                  </Link>

                </div>

              </div>

              <div className="divide-y divide-white/5">

                {leads.map((lead) => (

                  <Link
                    key={lead.id}
                    href={`/admin/leads/${lead.id}`}
                    className="
                      flex items-center
                      justify-between
                      p-6
                      transition-all
                      duration-300

                      hover:bg-white/[0.03]
                    "
                  >

                    <div>

                      <h3 className="font-semibold">
                        {lead.name}
                      </h3>

                      <p className="mt-1 text-sm text-zinc-400">
                        {lead.company || "Sem empresa"}
                      </p>

                    </div>

                    <span
                      className="
                        rounded-full
                        border border-cyan-400/20
                        bg-cyan-400/10
                        px-3 py-1
                        text-sm
                        text-cyan-400
                      "
                    >
                      {lead.status}
                    </span>

                  </Link>

                ))}

              </div>

            </div>

            {/* Clients */}
            <div
              className="
                overflow-hidden
                rounded-[32px]
                border border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
              "
            >

              <div className="border-b border-white/10 p-6">

                <div className="flex items-center justify-between">

                  <div>
                    <h2 className="text-2xl font-bold">
                      Clientes recentes
                    </h2>

                    <p className="mt-2 text-zinc-400">
                      Clientes ativos da agência.
                    </p>
                  </div>

                  <Link
                    href="/admin/clients"
                    className="
                      text-sm
                      font-medium
                      text-cyan-400
                    "
                  >
                    Ver todos
                  </Link>

                </div>

              </div>

              <div className="divide-y divide-white/5">

                {clients.map((client) => (

                  <Link
                    key={client.id}
                    href={`/admin/clients/${client.id}`}
                    className="
                      flex items-center
                      justify-between
                      p-6
                      transition-all
                      duration-300

                      hover:bg-white/[0.03]
                    "
                  >

                    <div>

                      <h3 className="font-semibold">
                        {client.company}
                      </h3>

                      <p className="mt-1 text-sm text-zinc-400">
                        {client.contactName}
                      </p>

                    </div>

                    <span
                      className="
                        rounded-full
                        border border-green-500/20
                        bg-green-500/10
                        px-3 py-1
                        text-sm
                        text-green-400
                      "
                    >
                      {client.contractStatus}
                    </span>

                  </Link>

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </main>
  )
}