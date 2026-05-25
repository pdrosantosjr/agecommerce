import { prisma } from "@/lib/prisma"

import { revalidatePath }
from "next/cache"

import { PlatformsAdminClient }
from "./platforms-admin-client"

export default async function PlatformsPage() {

  const platforms =
    await prisma.platformItem.findMany({
      orderBy: {
        order: "asc",
      },
    })

  async function createPlatform(
    formData: FormData
  ) {
    "use server"

    const name =
      String(formData.get("name"))

    const imageUrl =
      String(formData.get("imageUrl"))

    const link =
      String(formData.get("link"))

    const count =
      await prisma.platformItem.count()

    await prisma.platformItem.create({
      data: {
        name,
        imageUrl,
        link,
        order: count + 1,
      },
    })

    revalidatePath("/")
    revalidatePath("/admin/platforms")
  }

  async function updatePlatform(
    formData: FormData
  ) {
    "use server"

    const id =
      String(formData.get("id"))

    const name =
      String(formData.get("name"))

    const imageUrl =
      String(formData.get("imageUrl"))

    const link =
      String(formData.get("link"))

    const order =
      Number(formData.get("order"))

    await prisma.platformItem.update({
      where: {
        id,
      },

      data: {
        name,
        imageUrl,
        link,
        order,
      },
    })

    revalidatePath("/")
    revalidatePath("/admin/platforms")
  }

  async function deletePlatform(
    formData: FormData
  ) {
    "use server"

    const id =
      String(formData.get("id"))

    await prisma.platformItem.delete({
      where: {
        id,
      },
    })

    revalidatePath("/")
    revalidatePath("/admin/platforms")
  }

  return (
    <PlatformsAdminClient
      platforms={platforms}
      createPlatform={createPlatform}
      updatePlatform={updatePlatform}
      deletePlatform={deletePlatform}
    />
  )
}