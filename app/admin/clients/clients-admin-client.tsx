"use client"

import { useState }
from "react"

import {
  CloudinaryUpload,
} from "@/components/ui/cloudinary-upload"

interface ClientsAdminClientProps {

  clients: {
    id: string
    name: string
    logoUrl?: string | null
    order: number
  }[]

  createClient: (
    formData: FormData
  ) => void

  updateClient: (
    formData: FormData
  ) => void

  deleteClient: (
    formData: FormData
  ) => void
}

function LogoField({
  defaultValue = "",
}: {
  defaultValue?: string
}) {

  const [logoUrl, setLogoUrl] =
    useState(defaultValue)

  return (
    <div className="space-y-4">

      <div>

        <label className="text-sm text-zinc-400">
          URL da logo
        </label>

        <input
          name="logoUrl"
          value={logoUrl}

          onChange={(e) =>
            setLogoUrl(
              e.target.value
            )
          }

          className="
            mt-2
            h-14
            w-full
            rounded-2xl
            border border-white/10
            bg-white/[0.03]
            px-5
            text-white
            outline-none
          "
        />

      </div>

      <CloudinaryUpload
        onUpload={(url) =>
          setLogoUrl(url)
        }
      />

      {
        logoUrl && (

          <div
            className="
              flex
              h-32
              items-center
              justify-center
              rounded-2xl
              border border-white/10
              bg-white/[0.03]
              p-6
            "
          >

            <img
              src={logoUrl}
              alt="Preview"

              className="
                max-h-16
                w-auto
                object-contain
              "
            />

          </div>

        )
      }

    </div>
  )
}

export function ClientsAdminClient({
  clients,
  createClient,
  updateClient,
  deleteClient,
}: ClientsAdminClientProps) {

  return (
    <main className="min-h-screen bg-[#050816] p-10 text-white">

      <div className="mx-auto max-w-5xl">

        <div>

          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            CMS
          </p>

          <h1 className="mt-4 text-5xl font-black">
            Logos dos clientes
          </h1>

        </div>

        {/* CREATE */}
        <form
          action={createClient}

          className="
            mt-10
            rounded-[32px]
            border border-white/10
            bg-white/[0.03]
            p-8
          "
        >

          <h2 className="text-2xl font-bold">
            Novo cliente
          </h2>

          <div className="mt-6 space-y-6">

            <input
              name="name"
              placeholder="Nome da empresa"

              className="
                h-14
                w-full
                rounded-2xl
                border border-white/10
                bg-white/[0.03]
                px-5
                text-white
              "
            />

            <LogoField />

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
              Criar cliente
            </button>

          </div>

        </form>

        {/* LIST */}
        <div className="mt-10 space-y-4">

          {clients.map((item) => (

            <details
              key={item.id}

              className="
                overflow-hidden
                rounded-[28px]
                border border-white/10
                bg-white/[0.03]
              "
            >

              <summary
                className="
                  flex
                  cursor-pointer
                  items-center
                  justify-between
                  px-6 py-5
                "
              >

                <div className="flex items-center gap-4">

                  {
                    item.logoUrl && (

                      <img
                        src={item.logoUrl}
                        alt={item.name}

                        className="
                          h-12
                          w-12
                          rounded-xl
                          object-contain
                          bg-white/5
                          p-2
                        "
                      />

                    )
                  }

                  <div>

                    <h2 className="text-xl font-bold">
                      {item.name}
                    </h2>

                    <p className="mt-1 text-sm text-zinc-400">
                      Ordem: {item.order}
                    </p>

                  </div>

                </div>

                <div
                  className="
                    rounded-2xl
                    border border-cyan-400/20
                    bg-cyan-400/10
                    px-4 py-2
                    text-sm
                    text-cyan-300
                  "
                >
                  Editar
                </div>

              </summary>

              <div className="border-t border-white/10 p-6">

                <form
                  action={updateClient}
                  className="space-y-4"
                >

                  <input
                    type="hidden"
                    name="id"
                    value={item.id}
                  />

                  <input
                    name="name"
                    defaultValue={item.name}

                    className="
                      h-14
                      w-full
                      rounded-2xl
                      border border-white/10
                      bg-white/[0.03]
                      px-5
                      text-white
                    "
                  />

                  <input
                    type="number"
                    name="order"
                    defaultValue={item.order}

                    className="
                      h-14
                      w-full
                      rounded-2xl
                      border border-white/10
                      bg-white/[0.03]
                      px-5
                      text-white
                    "
                  />

                  <LogoField
                    defaultValue={
                      item.logoUrl || ""
                    }
                  />

                  <div className="flex gap-3">

                    <button
                      type="submit"

                      className="
                        rounded-2xl
                        bg-cyan-400
                        px-6 py-3
                        font-semibold
                        text-black
                      "
                    >
                      Salvar
                    </button>

                  </div>

                </form>

                <form
                  action={deleteClient}
                  className="mt-3"
                >

                  <input
                    type="hidden"
                    name="id"
                    value={item.id}
                  />

                  <button
                    type="submit"

                    className="
                      rounded-2xl
                      border border-red-500/20
                      bg-red-500/10
                      px-6 py-3
                      font-medium
                      text-red-400
                    "
                  >
                    Excluir
                  </button>

                </form>

              </div>

            </details>

          ))}

        </div>

      </div>

    </main>
  )
}