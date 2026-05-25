import Link from "next/link"
import { redirect } from "next/navigation"

import { prisma } from "@/lib/prisma"

import {
  ArrowLeft,
  Building2,
  CircleDollarSign,
  Target,
  Wallet,
  MessageCircle,
} from "lucide-react"

interface LeadDetailsPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function LeadDetailsPage({
  params,
}: LeadDetailsPageProps) {

  const { id } = await params

  const lead =
    await prisma.lead.findUnique({
      where: {
        id,
      },
    })

  if (!lead) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#050816] text-white">
        Lead não encontrado.
      </main>
    )
  }

  const safeLead = lead

  const whatsappLink =
    `https://wa.me/55${safeLead.whatsapp.replace(/\D/g, "")}`

  async function updateLeadStatus(
    formData: FormData
  ) {
    "use server"

    const status =
      formData.get("status")

    await prisma.lead.update({
      where: {
        id: safeLead.id,
      },

      data: {
        status: String(status),
      },
    })
  }

  async function updateLeadNotes(
    formData: FormData
  ) {
    "use server"

    const notes =
      formData.get("notes")

    const nextContactAt =
      formData.get("nextContactAt")

    await prisma.lead.update({
      where: {
        id: safeLead.id,
      },

      data: {
        notes: String(notes || ""),

        nextContactAt:
          nextContactAt
            ? String(nextContactAt)
            : null,
      },
    })
  }

  async function deleteLead() {
    "use server"

    await prisma.lead.delete({
      where: {
        id: safeLead.id,
      },
    })

    redirect("/admin/leads")
  }

  async function convertToClient() {
    "use server"

    await prisma.client.create({
      data: {
        company:
          safeLead.company || "Sem empresa",

        contactName:
          safeLead.name,

        whatsapp:
          safeLead.whatsapp,

        segment:
          safeLead.segment,

        notes:
          safeLead.notes ||

          safeLead.objective,

        monthlyFee:
          safeLead.investment,

        contractStatus:
          "Ativo",

        financialStatus:
          "Em dia",
      },
    })

    await prisma.lead.update({
      where: {
        id: safeLead.id,
      },

      data: {
        status: "Fechado",
        isClient: true,
      },
    })

    redirect("/admin/clients")
  }

  return (
    <main className="min-h-screen bg-[#050816] text-white">

      <div className="mx-auto max-w-6xl p-6 md:p-10">

        {/* Back */}
        <Link
          href="/admin/leads"
          className="
            inline-flex items-center gap-2
            text-zinc-400
            transition-colors
            duration-300

            hover:text-cyan-400
          "
        >
          <ArrowLeft size={18} />

          Voltar para leads
        </Link>

        {/* Header */}
        <div className="mt-10">

          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Lead Details
          </p>

          <h1 className="mt-4 text-5xl font-black">
            {safeLead.name}
          </h1>

          <p className="mt-4 text-zinc-400">
            Lead capturado pelo sistema.
          </p>

        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">

          {/* Empresa */}
          <div
            className="
              rounded-[32px]
              border border-white/10
              bg-white/[0.03]
              p-8
              backdrop-blur-xl
            "
          >

            <div className="flex items-center gap-4">

              <div
                className="
                  flex h-14 w-14
                  items-center justify-center
                  rounded-2xl
                  bg-cyan-400/10
                "
              >
                <Building2
                  size={26}
                  className="text-cyan-400"
                />
              </div>

              <div>

                <p className="text-zinc-400">
                  Empresa
                </p>

                <h2 className="mt-1 text-2xl font-bold">
                  {safeLead.company || "Não informado"}
                </h2>

              </div>

            </div>

          </div>

          {/* Segmento */}
          <div
            className="
              rounded-[32px]
              border border-white/10
              bg-white/[0.03]
              p-8
              backdrop-blur-xl
            "
          >

            <div className="flex items-center gap-4">

              <div
                className="
                  flex h-14 w-14
                  items-center justify-center
                  rounded-2xl
                  bg-cyan-400/10
                "
              >
                <Target
                  size={26}
                  className="text-cyan-400"
                />
              </div>

              <div>

                <p className="text-zinc-400">
                  Segmento
                </p>

                <h2 className="mt-1 text-2xl font-bold">
                  {safeLead.segment || "Não informado"}
                </h2>

              </div>

            </div>

          </div>

          {/* Faturamento */}
          <div
            className="
              rounded-[32px]
              border border-white/10
              bg-white/[0.03]
              p-8
              backdrop-blur-xl
            "
          >

            <div className="flex items-center gap-4">

              <div
                className="
                  flex h-14 w-14
                  items-center justify-center
                  rounded-2xl
                  bg-cyan-400/10
                "
              >
                <CircleDollarSign
                  size={26}
                  className="text-cyan-400"
                />
              </div>

              <div>

                <p className="text-zinc-400">
                  Faturamento
                </p>

                <h2 className="mt-1 text-2xl font-bold">
                  {safeLead.revenue || "Não informado"}
                </h2>

              </div>

            </div>

          </div>

          {/* Investimento */}
          <div
            className="
              rounded-[32px]
              border border-white/10
              bg-white/[0.03]
              p-8
              backdrop-blur-xl
            "
          >

            <div className="flex items-center gap-4">

              <div
                className="
                  flex h-14 w-14
                  items-center justify-center
                  rounded-2xl
                  bg-cyan-400/10
                "
              >
                <Wallet
                  size={26}
                  className="text-cyan-400"
                />
              </div>

              <div>

                <p className="text-zinc-400">
                  Investimento
                </p>

                <h2 className="mt-1 text-2xl font-bold">
                  {safeLead.investment || "Não informado"}
                </h2>

              </div>

            </div>

          </div>

        </div>

        {/* Objetivo */}
        <div
          className="
            mt-6
            rounded-[32px]
            border border-white/10
            bg-white/[0.03]
            p-8
            backdrop-blur-xl
          "
        >

          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Objetivo
          </p>

          <p className="mt-6 text-xl leading-relaxed text-zinc-300">
            {safeLead.objective || "Sem objetivo informado."}
          </p>

        </div>

        {/* Follow Up */}
        <div
          className="
            mt-6
            rounded-[32px]
            border border-white/10
            bg-white/[0.03]
            p-8
            backdrop-blur-xl
          "
        >

          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Follow-up comercial
          </p>

          <form
            action={updateLeadNotes}
            className="mt-6 space-y-6"
          >

            {/* Notes */}
            <div>

              <label className="text-sm text-zinc-400">
                Observações internas
              </label>

              <textarea
                name="notes"
                defaultValue={safeLead.notes || ""}
                placeholder="
Cliente pediu retorno mês que vem...
Já trabalha com outra agência...
Tem interesse apenas em landing page...
                "
                className="
                  mt-2
                  h-40
                  w-full
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.03]
                  p-5
                  text-white
                  outline-none
                "
              />

            </div>

            {/* Next contact */}
            <div>

              <label className="text-sm text-zinc-400">
                Próximo contato
              </label>

              <input
                type="datetime-local"
                name="nextContactAt"
                defaultValue={
                  typeof safeLead.nextContactAt ===
                  "string"
                    ? safeLead.nextContactAt
                    : ""
                }
                className="
                  mt-2
                  w-full
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.03]
                  p-5
                  text-white
                  outline-none
                "
              />

            </div>

            <button
              type="submit"
              className="
                rounded-2xl
                bg-cyan-400
                px-8 py-5
                font-semibold
                text-black
              "
            >
              Salvar follow-up
            </button>

          </form>

        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-wrap gap-4">

          {/* WhatsApp */}
          <a
            href={whatsappLink}
            target="_blank"
            className="
              inline-flex items-center gap-3
              rounded-2xl
              bg-cyan-400
              px-8 py-5
              font-semibold
              text-black
              transition-transform
              duration-300

              hover:scale-[1.03]
            "
          >
            <MessageCircle size={20} />

            Abrir WhatsApp
          </a>

          {/* Status */}
          <form action={updateLeadStatus}>

            <select
              name="status"
              defaultValue={safeLead.status}
              className="
                rounded-2xl
                border border-white/10
                bg-white/[0.03]
                px-6 py-5
                text-white
                outline-none
              "
            >
              <option
                value="Novo"
                className="bg-[#07101f] text-white"
              >
                Novo
              </option>

              <option
                value="Em contato"
                className="bg-[#07101f] text-white"
              >
                Em contato
              </option>

              <option
                value="Reunião agendada"
                className="bg-[#07101f] text-white"
              >
                Reunião agendada
              </option>

              <option
                value="Proposta enviada"
                className="bg-[#07101f] text-white"
              >
                Proposta enviada
              </option>

              <option
                value="Fechado"
                className="bg-[#07101f] text-white"
              >
                Fechado
              </option>

              <option
                value="Perdido"
                className="bg-[#07101f] text-white"
              >
                Perdido
              </option>

            </select>

            <button
              type="submit"
              className="
                ml-3
                rounded-2xl
                border border-cyan-400/20
                bg-cyan-400/10
                px-6 py-5
                font-medium
                text-cyan-400
              "
            >
              Salvar status
            </button>

          </form>

          {/* Converter cliente */}
          <form action={convertToClient}>

            <button
              type="submit"
              className="
                rounded-2xl
                bg-green-500
                px-6 py-5
                font-medium
                text-white
              "
            >
              Transformar em cliente
            </button>

          </form>

          {/* Delete */}
          <form action={deleteLead}>

            <button
              type="submit"
              className="
                rounded-2xl
                border border-red-500/20
                bg-red-500/10
                px-6 py-5
                font-medium
                text-red-400
              "
            >
              Excluir lead
            </button>

          </form>

        </div>

      </div>

    </main>
  )
}