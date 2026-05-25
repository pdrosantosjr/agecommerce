import { prisma } from "@/lib/prisma"

export default async function FAQPage() {

  const faqItems =
    await prisma.fAQItem.findMany({
      orderBy: {
        order: "asc",
      },
    })

  async function createFAQ(
    formData: FormData
  ) {
    "use server"

    const question =
      String(
        formData.get("question")
      )

    const answer =
      String(
        formData.get("answer")
      )

    const count =
      await prisma.fAQItem.count()

    await prisma.fAQItem.create({
      data: {
        question,
        answer,
        order: count + 1,
      },
    })
  }

  async function deleteFAQ(
    formData: FormData
  ) {
    "use server"

    const id =
      String(formData.get("id"))

    await prisma.fAQItem.delete({
      where: {
        id,
      },
    })
  }

  return (
    <main className="min-h-screen bg-[#050816] p-10 text-white">

      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div>

          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            CMS
          </p>

          <h1 className="mt-4 text-5xl font-black">
            FAQ do site
          </h1>

          <p className="mt-4 text-zinc-400">
            Gerencie perguntas frequentes.
          </p>

        </div>

        {/* Create */}
        <form
          action={createFAQ}
          className="
            mt-10
            rounded-[32px]
            border border-white/10
            bg-white/[0.03]
            p-8
          "
        >

          <h2 className="text-2xl font-bold">
            Nova pergunta
          </h2>

          <div className="mt-6 space-y-6">

            <div>

              <label className="text-sm text-zinc-400">
                Pergunta
              </label>

              <input
                name="question"
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
                Resposta
              </label>

              <textarea
                name="answer"
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
              Criar FAQ
            </button>

          </div>

        </form>

        {/* List */}
        <div className="mt-10 space-y-4">

          {faqItems.map((item) => (

            <div
              key={item.id}
              className="
                rounded-[28px]
                border border-white/10
                bg-white/[0.03]
                p-6
              "
            >

              <div className="flex items-start justify-between gap-6">

                <div>

                  <h2 className="text-2xl font-bold">
                    {item.question}
                  </h2>

                  <p className="mt-4 leading-relaxed text-zinc-400">
                    {item.answer}
                  </p>

                </div>

                <form action={deleteFAQ}>

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
                      px-5 py-3
                      text-sm
                      font-medium
                      text-red-400
                    "
                  >
                    Excluir
                  </button>

                </form>

              </div>

            </div>

          ))}

        </div>

      </div>

    </main>
  )
}