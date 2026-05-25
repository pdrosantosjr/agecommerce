"use client"

import { useState }
from "react"

export default function LoginPage() {

  const [email, setEmail] =
    useState("")

  const [password, setPassword] =
    useState("")

  const [loading, setLoading] =
    useState(false)

  const [error, setError] =
    useState("")

  async function handleLogin(
    e: React.FormEvent
  ) {

    e.preventDefault()

    setLoading(true)

    setError("")

    const response =
      await fetch(
        "/api/login",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            email,
            password,
          }),
        }
      )

    setLoading(false)

    if (!response.ok) {

      setError(
        "Email ou senha inválidos"
      )

      return
    }

    window.location.href =
      "/admin"
  }

  return (
    <main
      className="
        flex
        min-h-screen
        items-center
        justify-center
        bg-[#050816]
        p-6
      "
    >

      <form
        onSubmit={handleLogin}

        className="
          w-full
          max-w-md
          rounded-[32px]
          border border-white/10
          bg-white/[0.03]
          p-10
          text-white
        "
      >

        <h1 className="text-4xl font-black">
          Login Admin
        </h1>

        <p className="mt-3 text-zinc-400">
          Acesse o painel administrativo.
        </p>

        <div className="mt-8 space-y-5">

          <div>

            <label className="text-sm text-zinc-400">
              Email
            </label>

            <input
              type="email"

              value={email}

              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }

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
              Senha
            </label>

            <input
              type="password"

              value={password}

              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }

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

          {
            error && (
              <p className="text-red-400">
                {error}
              </p>
            )
          }

          <button
            type="submit"

            disabled={loading}

            className="
              w-full
              rounded-2xl
              bg-cyan-400
              px-8 py-5
              font-semibold
              text-black
            "
          >
            {
              loading
                ? "Entrando..."
                : "Entrar"
            }
          </button>

        </div>

      </form>

    </main>
  )
}