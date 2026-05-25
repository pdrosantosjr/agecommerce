import { prisma } from "@/lib/prisma"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const lead = await prisma.lead.create({
      data: {
        name: body.name,
        company: body.company,
        whatsapp: body.whatsapp,
        segment: body.segment,
        revenue: body.revenue,
        investment: body.investment,
        objective: body.objective,
      },
    })

    return Response.json({
      success: true,
      lead,
    })
  } catch (error) {
    console.error(error)

    return Response.json(
      {
        success: false,
        error: "Erro ao salvar lead",
      },
      {
        status: 500,
      }
    )
  }
}