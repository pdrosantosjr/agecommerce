import { prisma } from "@/lib/prisma"

import { TestimonialsAdminClient }
from "./testimonials-admin-client"

export default async function TestimonialsPage() {

  const testimonials =
    await prisma.testimonialItem.findMany({
      orderBy: {
        order: "asc",
      },
    })

  let section =
    await prisma.testimonialSection.findFirst()

  if (!section) {

    section =
      await prisma.testimonialSection.create({
        data: {
          title:
            "O que nossos clientes dizem",

          subtitle:
            "Resultados consistentes geram confiança e crescimento real.",
        },
      })
  }

  async function createTestimonial(
    formData: FormData
  ) {
    "use server"

    const name =
      String(formData.get("name"))

    const role =
      String(formData.get("role"))

    const company =
      String(formData.get("company"))

    const content =
      String(formData.get("content"))

    const imageUrl =
      String(formData.get("imageUrl"))

    const count =
      await prisma.testimonialItem.count()

    await prisma.testimonialItem.create({
      data: {
        name,
        role,
        company,
        content,
        imageUrl,
        order: count + 1,
      },
    })
  }

  async function updateTestimonial(
    formData: FormData
  ) {
    "use server"

    const id =
      String(formData.get("id"))

    const name =
      String(formData.get("name"))

    const role =
      String(formData.get("role"))

    const company =
      String(formData.get("company"))

    const content =
      String(formData.get("content"))

    const imageUrl =
      String(formData.get("imageUrl"))

    const order =
      Number(formData.get("order"))

    await prisma.testimonialItem.update({
      where: {
        id,
      },

      data: {
        name,
        role,
        company,
        content,
        imageUrl,
        order,
      },
    })
  }

  async function deleteTestimonial(
    formData: FormData
  ) {
    "use server"

    const id =
      String(formData.get("id"))

    await prisma.testimonialItem.delete({
      where: {
        id,
      },
    })
  }

  async function updateSection(
    formData: FormData
  ) {
    "use server"

    const title =
      String(formData.get("title"))

    const subtitle =
      String(formData.get("subtitle"))

    if (!section) {
      return
    }

    await prisma.testimonialSection.update({
      where: {
        id: section.id,
      },

      data: {
        title,
        subtitle,
      },
    })
  }

  return (
    <TestimonialsAdminClient
      testimonials={testimonials}
      section={section}
      createTestimonial={createTestimonial}
      updateTestimonial={updateTestimonial}
      deleteTestimonial={deleteTestimonial}
      updateSection={updateSection}
    />
  )
}