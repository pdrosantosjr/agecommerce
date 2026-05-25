import { Mail }
from "lucide-react"

import {
  FaInstagram,
  FaWhatsapp,
  FaFacebookF,
} from "react-icons/fa"

interface FooterSectionProps {
  footerDescription: string
  footerEmail: string
  footerInstagram: string
  footerWhatsapp: string

  navbarServicesText: string
  navbarCasesText: string
  navbarFaqText: string

  services: {
    id: string
    title: string
  }[]

  platforms?: {
    id: string
    name: string
    imageUrl?: string | null
    link?: string | null
  }[]
}

export function FooterSection({
  footerDescription,
  footerEmail,
  footerInstagram,
  footerWhatsapp,

  navbarServicesText,
  navbarCasesText,
  navbarFaqText,

  services,
  platforms = [],
}: FooterSectionProps) {

  return (
    <footer
      id="contact"
      className="border-t border-white/10 bg-[#050816]"
    >

      <div className="mx-auto max-w-7xl px-6 py-20">

        {/* TOP */}
        <div className="grid gap-12 md:grid-cols-4">

          {/* Logo */}
          <div>

            <h2 className="text-3xl font-black text-white">
              agê
              <span className="text-cyan-400">
                commerce
              </span>
            </h2>

            <p className="mt-6 text-zinc-400">
              {footerDescription}
            </p>

          </div>

          {/* Navegação */}
          <div>

            <h3 className="text-lg font-bold text-white">
              Navegação
            </h3>

            <ul className="mt-6 space-y-4 text-zinc-400">

              <li>
                <a
                  href="/services"
                  className="hover:text-cyan-400"
                >
                  {navbarServicesText}
                </a>
              </li>

              <li>
                <a
                  href="/cases"
                  className="hover:text-cyan-400"
                >
                  {navbarCasesText}
                </a>
              </li>

              <li>
                <a
                  href="#faq"
                  className="hover:text-cyan-400"
                >
                  {navbarFaqText}
                </a>
              </li>

            </ul>

          </div>

          {/* Serviços */}
          <div>

            <h3 className="text-lg font-bold text-white">
              Serviços
            </h3>

            <ul className="mt-6 space-y-4 text-zinc-400">

              {services.map((service) => (

                <li key={service.id}>

                  <a
                    href="/services"
                    className="hover:text-cyan-400"
                  >
                    {service.title}
                  </a>

                </li>

              ))}

            </ul>

          </div>

          {/* Contato */}
          <div>

            <h3 className="text-lg font-bold text-white">
              Contato
            </h3>

            <div className="mt-6 flex flex-col gap-4 text-zinc-400">

              <a
                href={`mailto:${footerEmail}`}
                className="flex items-center gap-3 hover:text-cyan-400"
              >
                <Mail size={18} />
                {footerEmail}
              </a>

              <div className="mt-4 flex gap-4">

                <a
                  href={footerInstagram}
                  target="_blank"
                  rel="noopener noreferrer"

                  className="
                    flex items-center justify-center
                    rounded-xl
                    border border-white/10
                    p-3
                    transition-all
                    hover:border-cyan-400/30
                    hover:text-cyan-400
                  "
                >
                  <FaInstagram size={18} />
                </a>

                <a
                  href={footerWhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"

                  className="
                    flex items-center justify-center
                    rounded-xl
                    border border-white/10
                    p-3
                    transition-all
                    hover:border-cyan-400/30
                    hover:text-cyan-400
                  "
                >
                  <FaWhatsapp size={18} />
                </a>

                <a
                  href="https://facebook.com/agecommercebr"
                  target="_blank"
                  rel="noopener noreferrer"

                  className="
                    flex items-center justify-center
                    rounded-xl
                    border border-white/10
                    p-3
                    transition-all
                    hover:border-cyan-400/30
                    hover:text-cyan-400
                  "
                >
                  <FaFacebookF size={16} />
                </a>

              </div>

            </div>

          </div>

        </div>

        {/* PLATFORMS */}
        {
          platforms.length > 0 && (

            <div className="mt-20">

              <p
                className="
                  text-center
                  text-sm
                  uppercase
                  tracking-[0.3em]
                  text-zinc-500
                "
              >
                Plataformas que trabalhamos
              </p>

              <div
                className="
                  mt-10
                  grid
                  grid-cols-3
                  justify-items-center
                  gap-3

                  md:flex
                  md:flex-wrap
                  md:justify-center
                "
              >

                {platforms.map((platform) => {

                  const content = (

                    <div
                      className="
                          flex
                          h-24
                          w-full
                          max-w-[105px]

                          md:h-28
                          md:max-w-[170px]

                          items-center
                          justify-center
                          overflow-hidden
                          rounded-3xl
                          border border-white/10
                          bg-white/[0.02]
                          p-3

                          transition-all
                          duration-300

                          hover:-translate-y-1
                          hover:border-cyan-400/20
                          hover:bg-white/[0.04]
                      "
                    >

                      {
                        platform.imageUrl && (

                          <img
                            src={platform.imageUrl}
                            alt={platform.name}

                            className="
                               h-auto
                               max-h-10
                               max-w-full
                               object-contain

                               md:max-h-14
                            "
                          />

                        )
                      }

                    </div>

                  )

                  if (platform.link) {

                    return (

                      <a
                        key={platform.id}
                        href={platform.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {content}
                      </a>

                    )
                  }

                  return (
                    <div key={platform.id}>
                      {content}
                    </div>
                  )

                })}

              </div>

            </div>

          )
        }

      </div>

      {/* Bottom */}
      <div className="border-t border-white/5 py-6 text-center text-sm text-zinc-500">
        © 2025 Agêcommerce. Todos os direitos reservados.
      </div>

    </footer>
  )
}