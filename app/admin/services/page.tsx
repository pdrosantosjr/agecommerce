import { prisma } from "@/lib/prisma"

import { ServicesAdminClient }
from "./services-admin-client"

export default async function ServicesPage() {

  const services =
    await prisma.serviceItem.findMany({
      orderBy: {
        order: "asc",
      },
    })

  async function createService(
    formData: FormData
  ) {
    "use server"

    const title =
      String(
        formData.get("title")
      )

    const description =
      String(
        formData.get("description")
      )

    const imageUrl =
      String(
        formData.get("imageUrl")
      )

    const count =
      await prisma.serviceItem.count()

    await prisma.serviceItem.create({
      data: {
        title,
        description,
        imageUrl,
        order: count + 1,
      },
    })
  }

  async function updateService(
    formData: FormData
  ) {
    "use server"

    const id =
      String(
        formData.get("id")
      )

    const title =
      String(
        formData.get("title")
      )

    const description =
      String(
        formData.get("description")
      )

    const imageUrl =
      String(
        formData.get("imageUrl")
      )

    const order =
      Number(
        formData.get("order")
      )

    await prisma.serviceItem.update({
      where: {
        id,
      },

      data: {
        title,
        description,
        imageUrl,
        order,
      },
    })
  }

  async function deleteService(
    formData: FormData
  ) {
    "use server"

    const id =
      String(
        formData.get("id")
      )

    await prisma.serviceItem.delete({
      where: {
        id,
      },
    })
  }

  return (
    <ServicesAdminClient
      services={services}
      createService={createService}
      updateService={updateService}
      deleteService={deleteService}
    />
  )
}