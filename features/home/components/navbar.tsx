"use client"

interface NavbarProps {
  navbarButton: string
  whatsappNumber: string

  navbarServicesText: string
  navbarCasesText: string
  navbarFaqText: string
  navbarContactText: string
}

export function Navbar({
  navbarButton,
  whatsappNumber,

  navbarServicesText,
  navbarCasesText,
  navbarFaqText,
  navbarContactText,
}: NavbarProps) {

  return (
    <>
      <header
        className="
          fixed top-0 z-50 w-full
          border-b border-white/10
          bg-[#050816]/80
          backdrop-blur-2xl
        "
      >

        <div
          className="
            container mx-auto
            flex h-20 items-center justify-between
            px-6
          "
        >

          {/* Logo */}
          <a
            href="/"
            className="
              text-2xl font-black tracking-tight text-white
            "
          >
            agê
            <span className="text-cyan-400">
              commerce
            </span>
          </a>

          {/* Nav */}
          <nav className="hidden items-center gap-10 md:flex">

            <a
              href="/services"
              className="
                text-sm text-zinc-300
                transition-colors duration-300
                hover:text-cyan-400
              "
            >
              {navbarServicesText}
            </a>

            <a
              href="/cases"
              className="
                text-sm text-zinc-300
                transition-colors duration-300
                hover:text-cyan-400
              "
            >
              {navbarCasesText}
            </a>

            <a
              href="#faq"
              className="
                text-sm text-zinc-300
                transition-colors duration-300
                hover:text-cyan-400
              "
            >
              {navbarFaqText}
            </a>

            <a
              href="#contact"
              className="
                text-sm text-zinc-300
                transition-colors duration-300
                hover:text-cyan-400
              "
            >
              {navbarContactText}
            </a>

          </nav>

          {/* CTA */}
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="
              rounded-2xl
              bg-cyan-400
              px-6 py-3
              text-sm font-bold
              text-black

              transition-all
              duration-300

              hover:scale-105
              hover:bg-cyan-300
              hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]
            "
          >
            {navbarButton}
          </a>

        </div>

      </header>
    </>
  )
}