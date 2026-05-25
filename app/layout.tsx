import type { Metadata }
from "next"

import "./globals.css"

export const metadata:
  Metadata = {

  title:
    "Agecommerce",

  description:
    "Agecommerce",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="pt-BR">

      <body
        className="
          bg-[#050816]
          text-white
          antialiased
          overflow-x-hidden
        "
      >

        {children}

      </body>

    </html>
  )
}