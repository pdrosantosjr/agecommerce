"use client"

import { useState } from "react"

import { CloudinaryUpload }
from "@/components/ui/cloudinary-upload"

interface ServicesAdminClientProps {
  services: {
    id: string
    title: string
    description: string
    imageUrl?: string | null
    order: number
  }[]

  createService: (
    formData: FormData
  ) => void

  updateService: (
    formData: FormData
  ) => void

  deleteService: (
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

      <div>

        <label className="text-sm text-zinc-400">
          URL da imagem
        </label>

        <input
          name="imageUrl"
          value={imageUrl}
          onChange={(e) =>
            setImageUrl(e.target.value)
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
          setImageUrl(url)
        }
      />

      {imageUrl && (

        <img
          src={imageUrl}
          alt="Preview"
          className="
            h-40
            w-full
            rounded-2xl
            object-cover
          "
        />

      )}

    </div>
  )
}

export function ServicesAdminClient({
  services,
  createService,
  updateService,
  deleteService,
}: ServicesAdminClientProps) {

  return (
    <main className="min-h-screen bg-[#050816] p-10 text-white">

      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div>

          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            CMS
          </p>

          <h1 className="mt-4 text-5xl font-black">
            Serviços do site
          </h1>

          <p className="mt-4 text-zinc-400">
            Gerencie os serviços exibidos na home.
          </p>

        </div>

        {/* Create */}
        <form
          action={createService}
          className="
            mt-10
            rounded-[32px]
            border border-white/10
            bg-white/[0.03]
            p-8
          "
        >

          <h2 className="text-2xl font-bold">
            Novo serviço
          </h2>

          <div className="mt-6 space-y-6">

            <div>

              <label className="text-sm text-zinc-400">
                Título
              </label>

              <input
                name="title"
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

            <div>

              <label className="text-sm text-zinc-400">
                Descrição
              </label>

              <textarea
                name="description"
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

            <ImageField />

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
              Criar serviço
            </button>

          </div>

        </form>

        {/* List */}
        <div className="mt-10 space-y-4">

          {services.map((service) => (

            <details
              key={service.id}
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
                    {service.title}
                  </h2>

                  <p className="mt-1 text-sm text-zinc-400">
                    Ordem: {service.order}
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

                <form
                  action={updateService}
                  className="space-y-4"
                >

                  <input
                    type="hidden"
                    name="id"
                    value={service.id}
                  />

                  <div>

                    <label className="text-sm text-zinc-400">
                      Título
                    </label>

                    <input
                      name="title"
                      defaultValue={service.title}
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

                  <div>

                    <label className="text-sm text-zinc-400">
                      Descrição
                    </label>

                    <textarea
                      name="description"
                      defaultValue={service.description}
                      className="
                        mt-2
                        h-32
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

                  <div>

                    <label className="text-sm text-zinc-400">
                      Ordem
                    </label>

                    <input
                      type="number"
                      name="order"
                      defaultValue={service.order}
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

                  <ImageField
                    defaultValue={
                      service.imageUrl || ""
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
                  action={deleteService}
                  className="mt-3"
                >

                  <input
                    type="hidden"
                    name="id"
                    value={service.id}
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