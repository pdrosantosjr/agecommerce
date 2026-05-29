import { prisma } from "@/lib/prisma"

import { revalidatePath }
from "next/cache"

import { CasesAdminClient }
from "./cases-admin-client"

export default async function CasesPage() {

  const cases =
    await prisma.caseItem.findMany({
      orderBy: {
        order: "asc",
      },
    })

  async function createCase(
    formData: FormData
  ) {
    "use server"

    const clientName =
      String(
        formData.get("clientName")
      )

    const niche =
      String(
        formData.get("niche")
      )

    const result =
      String(
        formData.get("result")
      )

    const description =
      String(
        formData.get("description")
      )

    const imageUrl =
      String(
        formData.get("imageUrl")
      )

    const instagramUrl =
      String(
        formData.get("instagramUrl")
      )

    const websiteUrl =
      String(
        formData.get("websiteUrl")
      )

    const websiteButtonText =
      String(
        formData.get("websiteButtonText")
      )

    const count =
      await prisma.caseItem.count()

    await prisma.caseItem.create({
      data: {
        clientName,
        niche,
        result,
        description,
        imageUrl,
        instagramUrl,
        websiteUrl,
        websiteButtonText,
        order: count + 1,
      },
    })

    revalidatePath("/admin/cases")
    revalidatePath("/")
    revalidatePath("/cases") 
  }

  async function updateCase(
    formData: FormData
  ) {
    "use server"

    const id =
      String(
        formData.get("id")
      )

    const clientName =
      String(
        formData.get("clientName")
      )

    const niche =
      String(
        formData.get("niche")
      )

    const result =
      String(
        formData.get("result")
      )

    const description =
      String(
        formData.get("description")
      )

    const imageUrl =
      String(
        formData.get("imageUrl")
      )

    const instagramUrl =
      String(
        formData.get("instagramUrl")
      )

    const websiteUrl =
      String(
        formData.get("websiteUrl")
      )

    const websiteButtonText =
      String(
        formData.get("websiteButtonText")
      )

    const order =
      Number(
        formData.get("order")
      )

    await prisma.caseItem.update({
      where: {
        id,
      },

      data: {
        clientName,
        niche,
        result,
        description,
        imageUrl,
        instagramUrl,
        websiteUrl,
        websiteButtonText,
        order,
      },
    })

    revalidatePath("/admin/cases")
    revalidatePath("/")
    revalidatePath("/cases")
  }

  async function deleteCase(
    formData: FormData
  ) {
    "use server"

    const id =
      String(
        formData.get("id")
      )

    await prisma.caseItem.delete({
      where: {
        id,
      },
    })

    revalidatePath("/admin/cases")
  }

  return (
    <CasesAdminClient
      cases={cases}
      createCase={createCase}
      updateCase={updateCase}
      deleteCase={deleteCase}
    />
  )
}