import { revalidatePath }
from "next/cache"

import { prisma }
from "@/lib/prisma"

import {
  ClientsAdminClient,
} from "./clients-admin-client"

export default async function ClientsPage() {

  const clients =
    await prisma.clientItem.findMany({
      orderBy: {
        order: "asc",
      },
    })

  async function createClient(
    formData: FormData
  ) {
    "use server"

    const name =
      String(formData.get("name"))

    const logoUrl =
      String(
        formData.get("logoUrl")
      )

    await prisma.clientItem.create({
      data: {
        name,
        logoUrl,
      },
    })

    revalidatePath("/")
    revalidatePath("/admin/clients")
  }

  async function updateClient(
    formData: FormData
  ) {
    "use server"

    const id =
      String(formData.get("id"))

    const name =
      String(formData.get("name"))

    const logoUrl =
      String(
        formData.get("logoUrl")
      )

    const order =
      Number(formData.get("order"))

    await prisma.clientItem.update({
      where: {
        id,
      },

      data: {
        name,
        logoUrl,
        order,
      },
    })

    revalidatePath("/")
    revalidatePath("/admin/clients")
  }

  async function deleteClient(
    formData: FormData
  ) {
    "use server"

    const id =
      String(formData.get("id"))

    await prisma.clientItem.delete({
      where: {
        id,
      },
    })

    revalidatePath("/")
    revalidatePath("/admin/clients")
  }

  return (
    <ClientsAdminClient
      clients={clients}
      createClient={createClient}
      updateClient={updateClient}
      deleteClient={deleteClient}
    />
  )
}