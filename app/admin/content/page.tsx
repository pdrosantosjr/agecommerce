import { prisma } from "@/lib/prisma"

import { revalidatePath }
from "next/cache"

export default async function ContentPage() {

  let content =
    await prisma.siteContent.findFirst()

  if (!content) {

    content =
      await prisma.siteContent.create({
        data: {
          heroTitle:
            "Escalamos empresas com marketing de performance",

          heroSubtitle:
            "Estratégias premium de tráfego pago, websites e automação para empresas que querem crescimento previsível e escala real.",

          whatsappNumber:
            "5511999999999",

          navbarButton:
            "Cresça com a gente",

          ctaBadge:
            "Vamos crescer sua empresa",

          ctaTitle:
            "Transforme sua marca",

          ctaHighlight:
            "crescimento previsível",

          ctaSubtitle:
            "Estratégias premium de tráfego, automação e conversão desenvolvidas para negócios que querem escalar de verdade.",

          navbarServicesText:
            "Serviços",

          navbarCasesText:
            "Cases",

          navbarFaqText:
            "FAQ",

          navbarContactText:
            "Contato",

          footerDescription:
            "Estratégias digitais focadas em crescimento, performance e escalabilidade.",

          footerEmail:
            "contato@agecommerce.com",

          footerInstagram:
            "https://instagram.com",

          footerWhatsapp:
            "https://wa.me/5511999999999",
        },
      })
  }

  async function updateContent(
    formData: FormData
  ) {
    "use server"

    const heroTitle =
      String(formData.get("heroTitle"))

    const heroSubtitle =
      String(formData.get("heroSubtitle"))

    const whatsappNumber =
      String(formData.get("whatsappNumber"))

    const navbarButton =
      String(formData.get("navbarButton"))

    const ctaBadge =
      String(formData.get("ctaBadge"))

    const ctaTitle =
      String(formData.get("ctaTitle"))

    const ctaHighlight =
      String(formData.get("ctaHighlight"))

    const ctaSubtitle =
      String(formData.get("ctaSubtitle"))

    const navbarServicesText =
      String(formData.get("navbarServicesText"))

    const navbarCasesText =
      String(formData.get("navbarCasesText"))

    const navbarFaqText =
      String(formData.get("navbarFaqText"))

    const navbarContactText =
      String(formData.get("navbarContactText"))

    const footerDescription =
      String(formData.get("footerDescription"))

    const footerEmail =
      String(formData.get("footerEmail"))

    const footerInstagram =
      String(formData.get("footerInstagram"))

    const footerWhatsapp =
      String(formData.get("footerWhatsapp"))

    await prisma.siteContent.update({
      where: {
        id: content!.id,
      },

      data: {
        heroTitle,
        heroSubtitle,
        whatsappNumber,
        navbarButton,

        ctaBadge,
        ctaTitle,
        ctaHighlight,
        ctaSubtitle,

        navbarServicesText,
        navbarCasesText,
        navbarFaqText,
        navbarContactText,

        footerDescription,
        footerEmail,
        footerInstagram,
        footerWhatsapp,
      },
    })

    revalidatePath("/")
  }

  return (
    <main className="min-h-screen bg-[#050816] p-10 text-white">

      <div className="mx-auto max-w-5xl">

        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
          CMS
        </p>

        <h1 className="mt-4 text-5xl font-black">
          Conteúdo do site
        </h1>

        <p className="mt-4 text-zinc-400">
          Gerencie os textos e informações do site.
        </p>

        <form
          action={updateContent}

          className="
            mt-10
            rounded-[32px]
            border border-white/10
            bg-white/[0.03]
            p-8
          "
        >

          <div className="space-y-6">

            {/* HERO TITLE */}
            <div>

              <label className="text-sm text-zinc-400">
                Hero Title
              </label>

              <input
                name="heroTitle"
                defaultValue={content.heroTitle}

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

            {/* HERO SUBTITLE */}
            <div>

              <label className="text-sm text-zinc-400">
                Hero Subtitle
              </label>

              <textarea
                name="heroSubtitle"
                defaultValue={content.heroSubtitle}

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

            {/* WHATSAPP */}
            <div>

              <label className="text-sm text-zinc-400">
                Número WhatsApp
              </label>

              <input
                name="whatsappNumber"
                defaultValue={content.whatsappNumber || ""}

                placeholder="5511999999999"

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

            {/* BUTTON */}
            <div>

              <label className="text-sm text-zinc-400">
                Texto botão principal
              </label>

              <input
                name="navbarButton"
                defaultValue={content.navbarButton || ""}

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

            {/* CTA BADGE */}
            <div>

              <label className="text-sm text-zinc-400">
                Badge CTA
              </label>

              <input
                name="ctaBadge"
                defaultValue={content.ctaBadge || ""}

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

            {/* CTA TITLE */}
            <div>

              <label className="text-sm text-zinc-400">
                Título CTA
              </label>

              <input
                name="ctaTitle"
                defaultValue={content.ctaTitle || ""}

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

            {/* CTA HIGHLIGHT */}
            <div>

              <label className="text-sm text-zinc-400">
                Highlight CTA
              </label>

              <input
                name="ctaHighlight"
                defaultValue={content.ctaHighlight || ""}

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

            {/* CTA SUBTITLE */}
            <div>

              <label className="text-sm text-zinc-400">
                Subtítulo CTA
              </label>

              <textarea
                name="ctaSubtitle"
                defaultValue={content.ctaSubtitle || ""}

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

            {/* NAVBAR */}
            <div>

              <label className="text-sm text-zinc-400">
                Texto Serviços Navbar
              </label>

              <input
                name="navbarServicesText"
                defaultValue={content.navbarServicesText || ""}

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
                Texto Cases Navbar
              </label>

              <input
                name="navbarCasesText"
                defaultValue={content.navbarCasesText || ""}

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
                Texto FAQ Navbar
              </label>

              <input
                name="navbarFaqText"
                defaultValue={content.navbarFaqText || ""}

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
                Texto Contato Navbar
              </label>

              <input
                name="navbarContactText"
                defaultValue={content.navbarContactText || ""}

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

            {/* FOOTER */}
            <div>

              <label className="text-sm text-zinc-400">
                Descrição Footer
              </label>

              <textarea
                name="footerDescription"
                defaultValue={content.footerDescription || ""}

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
                E-mail Footer
              </label>

              <input
                name="footerEmail"
                defaultValue={content.footerEmail || ""}

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
                Instagram Footer
              </label>

              <input
                name="footerInstagram"
                defaultValue={content.footerInstagram || ""}

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
                WhatsApp Footer
              </label>

              <input
                name="footerWhatsapp"
                defaultValue={content.footerWhatsapp || ""}

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

            <button
              type="submit"

              className="
                rounded-2xl
                bg-cyan-400
                px-8
                py-5
                font-semibold
                text-black
              "
            >
              Salvar conteúdo
            </button>

          </div>

        </form>

      </div>

    </main>
  )
}