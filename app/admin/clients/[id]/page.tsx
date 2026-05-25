import Link from "next/link"

import { prisma } from "@/lib/prisma"

import {
  ArrowLeft,
  Building2,
  MessageCircle,
  Wallet,
  BadgeCheck,
} from "lucide-react"

interface ClientPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function ClientPage({
  params,
}: ClientPageProps) {

  const { id } = await params

  const client =
    await prisma.client.findUnique({
      where: {
        id,
      },
    })

  if (!client) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#050816] text-white">
        Cliente não encontrado.
      </main>
    )
  }

  const whatsappLink =
    `https://wa.me/55${client.whatsapp.replace(/\D/g, "")}`

  return (
    <main className="min-h-screen bg-[#050816] text-white">

      <div className="mx-auto max-w-6xl p-6 md:p-10">

        {/* Back */}
        <Link
          href="/admin/clients"
          className="
            inline-flex items-center gap-2
            text-zinc-400
            transition-colors
            duration-300

            hover:text-cyan-400
          "
        >
          <ArrowLeft size={18} />

          Voltar para clientes
        </Link>

        {/* Header */}
        <div className="mt-10">

          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            CLIENTE
          </p>

          <h1 className="mt-4 text-5xl font-black">
            {client.company}
          </h1>

          <p className="mt-4 text-zinc-400">
            Cliente ativo da Agecommerce.
          </p>

        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">

          {/* Contato */}
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
                  Responsável
                </p>

                <h2 className="mt-1 text-2xl font-bold">
                  {client.contactName}
                </h2>

              </div>

            </div>

          </div>

          {/* Mensalidade */}
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
                  Mensalidade
                </p>

                <h2 className="mt-1 text-2xl font-bold">
                  {client.monthlyFee || "Não definido"}
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
                <BadgeCheck
                  size={26}
                  className="text-cyan-400"
                />
              </div>

              <div>

                <p className="text-zinc-400">
                  Segmento
                </p>

                <h2 className="mt-1 text-2xl font-bold">
                  {client.segment || "Não informado"}
                </h2>

              </div>

            </div>

          </div>

          {/* Status */}
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
                  bg-green-500/10
                "
              >
                <BadgeCheck
                  size={26}
                  className="text-green-400"
                />
              </div>

              <div>

                <p className="text-zinc-400">
                  Contrato
                </p>

                <h2 className="mt-1 text-2xl font-bold text-green-400">
                  {client.contractStatus}
                </h2>

              </div>

            </div>

          </div>

        </div>

        {/* Notes */}
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
            Observações
          </p>

          <p className="mt-6 text-xl leading-relaxed text-zinc-300">
            {client.notes || "Sem observações."}
          </p>

        </div>

        {/* Actions */}
        <div className="mt-8">

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

        </div>

      </div>

    </main>
  )
}