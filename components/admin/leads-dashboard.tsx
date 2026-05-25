"use client"

import Link from "next/link"
import { useState } from "react"

import { Sidebar } from "@/components/admin/sidebar"
import { Topbar } from "@/components/admin/topbar"

interface LeadsDashboardProps {
  leads: {
    id: string
    name: string
    company: string | null
    whatsapp: string
    segment: string | null
    revenue: string | null
    investment: string | null
    objective: string | null
    status: string
    notes?: string | null
    nextContactAt?: Date | null
    createdAt: Date
  }[]
}

const columns = [
  "Novo",
  "Em contato",
  "Reunião agendada",
  "Proposta enviada",
  "Fechado",
  "Perdido",
]

export function LeadsDashboard({
  leads,
}: LeadsDashboardProps) {

  const [sidebarOpen, setSidebarOpen] =
    useState(false)

    function getLeadPriority(
    lead: {
      status: string
      nextContactAt?: Date | null
    }
  ) {

    if (
      lead.status === "Fechado"
    ) {
      return {
        label: "Cliente",
        color:
          "border-green-500/20 bg-green-500/10 text-green-400",
      }
    }

    if (
      lead.status === "Perdido"
    ) {
      return {
        label: "Perdido",
        color:
          "border-zinc-500/20 bg-zinc-500/10 text-zinc-400",
      }
    }

    if (lead.nextContactAt) {

      const now =
        new Date()

      const next =
        new Date(
          lead.nextContactAt
        )

      if (next < now) {
        return {
          label: "Urgente",
          color:
            "border-red-500/20 bg-red-500/10 text-red-400",
        }
      }

      const diff =
        next.getTime() -
        now.getTime()

      const hours =
        diff / (1000 * 60 * 60)

      if (hours <= 24) {
        return {
          label: "Hoje",
          color:
            "border-yellow-500/20 bg-yellow-500/10 text-yellow-400",
        }
      }
    }

    return {
      label: "Ativo",
      color:
        "border-cyan-400/20 bg-cyan-400/10 text-cyan-400",
    }
  }

  function getLeadsByStatus(
    status: string
  ) {
    return leads.filter(
      (lead) => lead.status === status
    )
  }

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
              CRM
            </p>

            <h1 className="mt-4 text-4xl font-black md:text-6xl">
              Pipeline comercial
            </h1>

            <p className="mt-4 text-zinc-400">
              Gestão visual de leads da operação.
            </p>

          </div>

          {/* Kanban */}
          <div
            className="
              flex gap-6
              overflow-x-auto
              pb-6
            "
          >

            {columns.map((column) => {

              const columnLeads =
                getLeadsByStatus(column)

              return (
                <div
                  key={column}
                  className="
                    min-w-[340px]
                    flex-1
                  "
                >

                  {/* Column Header */}
                  <div
                    className="
                      mb-5
                      flex items-center
                      justify-between
                    "
                  >

                    <div>

                      <h2 className="text-xl font-bold">
                        {column}
                      </h2>

                      <p className="mt-1 text-sm text-zinc-400">
                        {columnLeads.length} lead(s)
                      </p>

                    </div>

                  </div>

                  {/* Column Body */}
                  <div className="space-y-4">

                    {columnLeads.map((lead) => (

                      <Link
                        key={lead.id}
                        href={`/admin/leads/${lead.id}`}
                        className="
                          block
                          rounded-[28px]
                          border border-white/10
                          bg-white/[0.03]
                          p-5
                          transition-all
                          duration-300

                          hover:-translate-y-1
                          hover:border-cyan-400/20
                          hover:bg-cyan-400/[0.03]
                        "
                      >

                        {/* Name */}
                        <div>

                          <h3 className="text-xl font-bold">
                            {lead.name}
                          </h3>

                          <p className="mt-1 text-sm text-zinc-400">
                            {lead.company ||
                              "Sem empresa"}
                          </p>

                        </div>

                        {/* Meta */}
                        <div className="mt-5 space-y-3 text-sm text-zinc-300">

                          <div>
                            <span className="text-zinc-500">
                              WhatsApp:
                            </span>{" "}

                            {lead.whatsapp}
                          </div>

                          <div>
                            <span className="text-zinc-500">
                              Segmento:
                            </span>{" "}

                            {lead.segment ||
                              "Não informado"}
                          </div>

                          <div>
                            <span className="text-zinc-500">
                              Investimento:
                            </span>{" "}

                            {lead.investment ||
                              "Não informado"}
                          </div>

                        </div>

                        {/* Notes */}
                        {lead.notes && (

                          <div
                            className="
                              mt-5
                              rounded-2xl
                              border border-white/5
                              bg-black/20
                              p-4
                            "
                          >

                            <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">
                              Observações
                            </p>

                            <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                              {lead.notes}
                            </p>

                          </div>

                        )}

                        {/* Next Contact */}
                        {lead.nextContactAt && (

                          <div
                            className="
                              mt-5
                              rounded-2xl
                              border border-yellow-500/20
                              bg-yellow-500/10
                              p-4
                            "
                          >

                            <p className="text-xs uppercase tracking-[0.2em] text-yellow-400">
                              Próximo contato
                            </p>

                            <p
                              suppressHydrationWarning
                              className="mt-2 text-base text-yellow-200"
                            >
                              {lead.nextContactAt
                                ? new Date(
                                    lead.nextContactAt
                                  ).toLocaleString(
                                    "pt-BR",
                                    {
                                      timeZone:
                                        "America/Sao_Paulo",
                                    }
                                  )
                                : "-"}
                            </p>

                          </div>

                        )}

                        {/* Footer */}
                        <div
                          className="
                            mt-6
                            flex items-center
                            justify-between
                          "
                        >

                          <span
                            className="
                              rounded-full
                              px-3 py-1
                              text-xs
                              font-medium
                              
                              ${getLeadPriority(lead).color}
                            "
                          >
                            {getLeadPriority(lead).label}
                          </span>

                          <span className="text-sm text-zinc-400">

                            {new Intl.DateTimeFormat(
                              "pt-BR",
                              {
                                timeZone:
                                  "America/Sao_Paulo",

                                day: "2-digit",
                                month: "2-digit",
                                year: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                              }
                            ).format(
                              new Date(
                                lead.createdAt
                              )
                            )}

                          </span>

                        </div>

                      </Link>

                    ))}

                  </div>

                </div>
              )
            })}

          </div>

        </div>

      </div>

    </main>
  )
}