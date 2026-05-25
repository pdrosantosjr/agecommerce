"use client"

import { useState } from "react"

import { AnimatePresence, motion } from "framer-motion"
import { X } from "lucide-react"

interface LeadModalProps {
  open: boolean
  onClose: () => void
}

export function LeadModal({
  open,
  onClose,
}: LeadModalProps) {
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    whatsapp: "",
    segment: "",
    revenue: "",
    investment: "",
    objective: "",
  })

  function formatWhatsapp(value: string) {
    const numbers = value.replace(/\D/g, "")

    const limited = numbers.slice(0, 11)

    return limited
      .replace(/^(\d{2})(\d)/g, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2")
  }

  function formatCurrency(value: string) {
    const numericValue = value.replace(/\D/g, "")

    const formattedValue = new Intl.NumberFormat(
      "pt-BR",
      {
        style: "currency",
        currency: "BRL",
      }
    ).format(Number(numericValue) / 100)

    return formattedValue
  }

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault()

    try {
      setLoading(true)

      const response = await fetch("/api/leads", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        alert("Lead enviado com sucesso!")

        setFormData({
          name: "",
          company: "",
          whatsapp: "",
          segment: "",
          revenue: "",
          investment: "",
          objective: "",
        })

        onClose()
      } else {
        alert("Erro ao enviar lead.")
      }
    } catch (error) {
      console.error(error)

      alert("Erro ao enviar lead.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <AnimatePresence>

      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="
              fixed inset-0 z-[9998]
              bg-black/70
              backdrop-blur-md
            "
          />

          {/* Modal */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: 40,
            }}
            transition={{
              duration: 0.35,
            }}
            className="
              fixed left-1/2 top-1/2 z-[9999]
              w-[92%]
              max-w-2xl
              -translate-x-1/2
              -translate-y-1/2
              overflow-hidden
              rounded-[32px]
              border border-white/10
              bg-[#07101f]
              p-6 md:p-10
              shadow-[0_0_80px_rgba(34,211,238,0.15)]
            "
          >
            {/* Glow */}
            <div
              className="
                absolute inset-0
                bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_70%)]
              "
            />

            {/* Close */}
            <button
              onClick={onClose}
              className="
                absolute right-5 top-5 z-20
                flex h-11 w-11
                items-center justify-center
                rounded-2xl
                border border-white/10
                bg-white/[0.03]
                text-zinc-400
                transition-all
                duration-300

                hover:border-cyan-400/30
                hover:text-cyan-400
              "
            >
              <X size={18} />
            </button>

            <div className="relative z-10">

              {/* Header */}
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
                  Crescimento previsível
                </p>

                <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
                  Vamos escalar sua empresa
                </h2>

                <p className="mt-4 max-w-xl text-zinc-400">
                  Preencha as informações abaixo para receber uma análise estratégica do seu negócio.
                </p>
              </div>

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="mt-10 space-y-5"
              >

                <div className="grid gap-5 md:grid-cols-2">

                  <Input
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                  />

                  <Input
                    placeholder="Empresa"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        company: e.target.value,
                      })
                    }
                  />

                </div>

                <div className="grid gap-5 md:grid-cols-2">

                  <Input
                    placeholder="WhatsApp"
                    value={formData.whatsapp}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        whatsapp: formatWhatsapp(
                          e.target.value
                        ),
                      })
                    }
                  />

                  <Input
                    placeholder="Segmento"
                    value={formData.segment}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        segment: e.target.value,
                      })
                    }
                  />

                </div>

                <div className="grid gap-5 md:grid-cols-2">

                  <Input
                    placeholder="Faturamento mensal"
                    value={formData.revenue}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        revenue: formatCurrency(
                          e.target.value
                        ),
                      })
                    }
                  />

                  <Input
                    placeholder="Investimento em tráfego"
                    value={formData.investment}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        investment: formatCurrency(
                          e.target.value
                        ),
                      })
                    }
                  />

                </div>

                <textarea
                  placeholder="Descreva seu objetivo..."
                  value={formData.objective}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      objective: e.target.value,
                    })
                  }
                  className="
                    min-h-[140px]
                    w-full
                    rounded-2xl
                    border border-white/10
                    bg-white/[0.03]
                    px-5
                    py-4
                    text-white
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-zinc-500

                    focus:border-cyan-400/40
                    focus:bg-cyan-400/[0.03]
                  "
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="
                    w-full
                    rounded-2xl
                    bg-cyan-400
                    px-8
                    py-5
                    text-lg
                    font-bold
                    text-black
                    transition-all
                    duration-300

                    hover:scale-[1.02]
                    hover:bg-cyan-300
                    hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]

                    disabled:cursor-not-allowed
                    disabled:opacity-60
                  "
                >
                  {loading
                    ? "Enviando..."
                    : "Solicitar análise estratégica"}
                </button>

              </form>

            </div>
          </motion.div>
        </>
      )}

    </AnimatePresence>
  )
}

interface InputProps {
  placeholder: string
  value?: string
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void
}

function Input({
  placeholder,
  value,
  onChange,
}: InputProps) {
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="
        h-14
        w-full
        rounded-2xl
        border border-white/10
        bg-white/[0.03]
        px-5
        text-white
        outline-none
        transition-all
        duration-300
        placeholder:text-zinc-500

        focus:border-cyan-400/40
        focus:bg-cyan-400/[0.03]
      "
    />
  )
}