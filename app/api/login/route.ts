import { cookies }
from "next/headers"

import { NextResponse }
from "next/server"

import {
  validateAdminLogin,
}
from "@/lib/admin-auth"

export async function POST(
  request: Request
) {

  try {

    const body =
      await request.json()

    const email =
      body.email

    const password =
      body.password

    const valid =
      await validateAdminLogin(
        email,
        password
      )

    if (!valid) {

      return NextResponse.json(
        {
          error:
            "Credenciais inválidas",
        },
        {
          status: 401,
        }
      )
    }

    const cookieStore =
      await cookies()

    cookieStore.set(
      "admin-session",
      "authenticated",
      {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        path: "/",
        maxAge:
          60 * 60 * 24 * 7,
      }
    )

    return NextResponse.json({
      success: true,
    })

  } catch {

    return NextResponse.json(
      {
        error:
          "Erro interno",
      },
      {
        status: 500,
      }
    )
  }
}