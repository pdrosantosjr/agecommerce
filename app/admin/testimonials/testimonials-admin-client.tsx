"use client"

import { useState } from "react"

import { CloudinaryUpload }
from "@/components/ui/cloudinary-upload"

interface TestimonialsAdminClientProps {

  testimonials: {
    id: string
    name: string
    role: string
    company: string
    content: string
    imageUrl?: string | null
    order: number
  }[]

  section: {
    id: string
    title: string
    subtitle: string
  }

  createTestimonial: (
    formData: FormData
  ) => Promise<void>

  updateTestimonial: (
    formData: FormData
  ) => Promise<void>

  deleteTestimonial: (
    formData: FormData
  ) => Promise<void>

  updateSection: (
    formData: FormData
  ) => Promise<void>
}

function ImageField({
  defaultValue = "",
}: {
  defaultValue?: string
}) {

  const [imageUrl, setImageUrl] =
    useState(defaultValue)

  return (
    <div>

      <label className="text-sm text-zinc-400">
        Foto / Logo
      </label>

      <div className="mt-4">

        <CloudinaryUpload
          onUpload={(url: string) =>
            setImageUrl(url)
          }
        />

      </div>

      {
        imageUrl && (
          <img
            src={imageUrl}
            alt="Preview"
            className="
              mt-4
              h-24
              w-24
              rounded-2xl
              object-cover
              border border-white/10
            "
          />
        )
      }

      <input
        type="hidden"
        name="imageUrl"
        value={imageUrl}
      />

    </div>
  )
}

export function TestimonialsAdminClient({
  testimonials,
  section,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
  updateSection,
}: TestimonialsAdminClientProps) {

  return (
    <main className="min-h-screen bg-[#050816] p-10 text-white">

      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div>

          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            CMS
          </p>

          <h1 className="mt-4 text-5xl font-black">
            Feedbacks
          </h1>

          <p className="mt-4 text-zinc-400">
            Gerencie os feedbacks exibidos no site.
          </p>

        </div>

        {/* Section */}
        <form
          action={updateSection}
          className="
            mt-10
            rounded-[32px]
            border border-white/10
            bg-white/[0.03]
            p-8
          "
        >

          <h2 className="text-2xl font-bold">
            Seção
          </h2>

          <div className="mt-6 space-y-6">

            <div>

              <label className="text-sm text-zinc-400">
                Título
              </label>

              <input
                name="title"
                defaultValue={section.title}
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
                Subtítulo
              </label>

              <textarea
                name="subtitle"
                defaultValue={section.subtitle}
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
              Salvar seção
            </button>

          </div>

        </form>

        {/* Create */}
        <form
          action={createTestimonial}
          className="
            mt-10
            rounded-[32px]
            border border-white/10
            bg-white/[0.03]
            p-8
          "
        >

          <h2 className="text-2xl font-bold">
            Novo feedback
          </h2>

          <div className="mt-6 space-y-6">

            <div>

              <label className="text-sm text-zinc-400">
                Nome
              </label>

              <input
                name="name"
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
                Cargo
              </label>

              <input
                name="role"
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
                Empresa
              </label>

              <input
                name="company"
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
                Feedback
              </label>

              <textarea
                name="content"
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
              Criar feedback
            </button>

          </div>

        </form>

        {/* List */}
        <div className="mt-10 space-y-4">

          {testimonials.map((item) => (

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

                <form
                  action={updateTestimonial}
                  className="space-y-4"
                >

                  <input
                    type="hidden"
                    name="id"
                    value={item.id}
                  />

                  <div>

                    <label className="text-sm text-zinc-400">
                      Nome
                    </label>

                    <input
                      name="name"
                      defaultValue={item.name}
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
                      Cargo
                    </label>

                    <input
                      name="role"
                      defaultValue={item.role}
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
                      Empresa
                    </label>

                    <input
                      name="company"
                      defaultValue={item.company}
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
                      Feedback
                    </label>

                    <textarea
                      name="content"
                      defaultValue={item.content}
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
                      defaultValue={item.order}
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
                      item.imageUrl || ""
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
                  action={deleteTestimonial}
                  className="mt-3"
                >

                  <input
                    type="hidden"
                    name="id"
                    value={item.id}
                  />

                  <button
                    formAction={deleteTestimonial}
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