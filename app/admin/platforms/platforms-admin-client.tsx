"use client"

import { useState }
from "react"

import {
  CloudinaryUpload,
} from "@/components/ui/cloudinary-upload"

interface PlatformsAdminClientProps {

  platforms: {
    id: string
    name: string
    imageUrl?: string | null
    link?: string | null
    order: number
  }[]

  createPlatform: (
    formData: FormData
  ) => void

  updatePlatform: (
    formData: FormData
  ) => void

  deletePlatform: (
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
              h-40
              w-full
              rounded-2xl
              object-contain
              bg-white
              p-4
            "
          />

        )
      }

    </div>
  )
}

export function PlatformsAdminClient({
  platforms,
  createPlatform,
  updatePlatform,
  deletePlatform,
}: PlatformsAdminClientProps) {

  return (
    <main className="min-h-screen bg-[#050816] p-10 text-white">

      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div>

          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            CMS
          </p>

          <h1 className="mt-4 text-5xl font-black">
            Plataformas
          </h1>

          <p className="mt-4 text-zinc-400">
            Gerencie as logos exibidas no footer.
          </p>

        </div>

        {/* CREATE */}
        <form
          action={createPlatform}

          className="
            mt-10
            rounded-[32px]
            border border-white/10
            bg-white/[0.03]
            p-8
          "
        >

          <h2 className="text-2xl font-bold">
            Nova plataforma
          </h2>

          <div className="mt-6 space-y-6">

            <input
              name="name"
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
              name="link"
              placeholder="Link opcional"

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
              Criar plataforma
            </button>

          </div>

        </form>

        {/* LIST */}
        <div className="mt-10 space-y-4">

          {platforms.map((item) => (

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
                    {item.name}
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
                      alt={item.name}

                      className="
                        mb-6
                        h-32
                        w-full
                        rounded-2xl
                        bg-white
                        p-4
                        object-contain
                      "
                    />

                  )
                }

                <form
                  action={updatePlatform}
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
                    name="link"
                    defaultValue={
                      item.link || ""
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
                  action={deletePlatform}
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