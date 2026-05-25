import { NextResponse } from "next/server"

import { prisma } from "@/lib/prisma"

interface RouteProps {
  params: Promise<{
    id: string
  }>
}

/* UPDATE LEAD */
export async function PATCH(
  req: Request,
  { params }: RouteProps
) {
  try {
    const { id } = await params

    const body = await req.json()

    const lead = await prisma.lead.update({
      where: {
        id,
      },

      data: {
        status: body.status,
        notes: body.notes,
        isClient: body.isClient,
      },
    })

    return NextResponse.json({
      success: true,
      lead,
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    )
  }
}

/* DELETE LEAD */
export async function DELETE(
  req: Request,
  { params }: RouteProps
) {
  try {
    const { id } = await params

    await prisma.lead.delete({
      where: {
        id,
      },
    })

    return NextResponse.json({
      success: true,
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    )
  }
}