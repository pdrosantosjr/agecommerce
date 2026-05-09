"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#06b6d4_0%,transparent_40%)] opacity-20" />

      <div className="container relative z-10 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            Agência premium de performance
          </span>

          <h1 className="mx-auto mt-8 max-w-5xl text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
            Crescimento digital
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              inteligente
            </span>
            para marcas modernas.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-zinc-400">
            Estratégias, design e tecnologia para transformar
            empresas em máquinas de crescimento.
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <Button size="lg">
              Agendar reunião
            </Button>

            <Button variant="outline" size="lg">
              Ver Cases
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}