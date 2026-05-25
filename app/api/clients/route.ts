import { NextResponse } from "next/server"

import { prisma } from "@/lib/prisma"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const client = await prisma.client.create({
      data: {
        company: body.company,
        contactName: body.contactName,
        whatsapp: body.whatsapp,

        segment: body.segment,
        address: body.address,

        service: body.service,
        monthlyFee: body.monthlyFee,

        dueDay: body.dueDay,

        notes: body.notes,
      },
    })

    return NextResponse.json({
      success: true,
      client,
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