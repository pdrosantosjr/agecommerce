"use client"

import { useState } from "react"

import {
  CloudinaryUpload,
} from "@/components/ui/cloudinary-upload"

interface CasesAdminClientProps {

  cases: {
    id: string
    clientName: string
    niche: string
    result: string
    description: string
    imageUrl?: string | null
    instagramUrl?: string | null

    websiteUrl?: string | null
    websiteButtonText?: string | null

    order: number
  }[]

  createCase: (
    formData: FormData
  ) => void

  updateCase: (
    formData: FormData
  ) => void

  deleteCase: (
    formData: FormData
  ) => void
}

function ImageField({
  defaultValue = "",
}: {
  defaultValue?: string
}) {

  const [imageUrl, setImageUrl] =
    useState(defaultValue)

  return (
    <div className="space-y-4">

      <input
        name="imageUrl"
        value={imageUrl}

        onChange={(e) =>
          setImageUrl(
            e.target.value
          )
        }

        placeholder="URL da imagem"

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

      <CloudinaryUpload
        onUpload={(url) =>
          setImageUrl(url)
        }
      />

      {
        imageUrl && (

          <img
            src={imageUrl}
            alt="Preview"

            className="
              h-48
              w-full
              rounded-2xl
              object-cover
            "
          />

        )
      }

    </div>
  )
}

export function CasesAdminClient({
  cases,
  createCase,
  updateCase,
  deleteCase,
}: CasesAdminClientProps) {

  return (
    <main className="min-h-screen bg-[#050816] p-10 text-white">

      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div>

          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            CMS
          </p>

          <h1 className="mt-4 text-5xl font-black">
            Cases
          </h1>

          <p className="mt-4 text-zinc-400">
            Gerencie os cases exibidos no site.
          </p>

        </div>

        {/* CREATE */}
        <form
          action={createCase}

          className="
            mt-10
            rounded-[32px]
            border border-white/10
            bg-white/[0.03]
            p-8
          "
        >

          <h2 className="text-2xl font-bold">
            Novo case
          </h2>

          <div className="mt-6 space-y-6">

            <input
              name="clientName"
              placeholder="Nome"

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
              name="niche"
              placeholder="Nicho"

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
              name="result"
              placeholder="Resultado"

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

            <textarea
              name="description"
              placeholder="Descrição"

              className="
                h-32
                w-full
                rounded-2xl
                border border-white/10
                bg-white/[0.03]
                p-5
                text-white
              "
            />

            <input
              name="instagramUrl"
              placeholder="Instagram URL"

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
              name="websiteUrl"
              placeholder="URL do site"

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
              name="websiteButtonText"
              placeholder="Texto botão site"

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

            <ImageField />

            <button
              type="submit"

              className="
                rounded-2xl
                bg-cyan-400
                px-8
                py-4
                font-bold
                text-black
              "
            >
              Criar case
            </button>

          </div>

        </form>

        {/* LIST */}
        <div className="mt-10 space-y-4">

          {cases.map((item) => (

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

                <div>

                  <h2 className="text-xl font-bold">
                    {item.clientName}
                  </h2>

                  <p className="mt-1 text-sm text-zinc-400">
                    Ordem: {item.order}
                  </p>

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

                {
                  item.imageUrl && (

                    <img
                      src={item.imageUrl}
                      alt={item.clientName}

                      className="
                        mb-6
                        h-48
                        w-full
                        rounded-2xl
                        object-cover
                      "
                    />

                  )
                }

                <form
                  action={updateCase}
                  className="space-y-4"
                >

                  <input
                    type="hidden"
                    name="id"
                    value={item.id}
                  />

                  <input
                    name="clientName"
                    defaultValue={item.clientName}

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
                    name="niche"
                    defaultValue={item.niche}

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
                    name="result"
                    defaultValue={item.result}

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

                  <textarea
                    name="description"
                    defaultValue={item.description}

                    className="
                      h-32
                      w-full
                      rounded-2xl
                      border border-white/10
                      bg-white/[0.03]
                      p-5
                      text-white
                    "
                  />

                  <input
                    name="instagramUrl"
                    defaultValue={
                      item.instagramUrl || ""
                    }

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
                    name="websiteUrl"
                    defaultValue={
                      item.websiteUrl || ""
                    }

                    placeholder="URL do site"

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
                    name="websiteButtonText"
                    defaultValue={
                      item.websiteButtonText || ""
                    }

                    placeholder="Texto botão site"

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

                  <ImageField
                    defaultValue={
                      item.imageUrl || ""
                    }
                  />

                  <button
                    type="submit"

                    className="
                      rounded-2xl
                      bg-cyan-400
                      px-6
                      py-3
                      font-bold
                      text-black
                    "
                  >
                    Salvar
                  </button>

                </form>

                <form
                  action={deleteCase}
                  className="mt-4"
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
                      px-6
                      py-3
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