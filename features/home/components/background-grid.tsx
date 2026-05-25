"use client"

import { motion } from "framer-motion"

export function BackgroundGrid() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050816]">

      {/* GRID */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-40
          bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]
          bg-[size:60px_60px]
          [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]
        "
      />

      {/* TOP GLOW */}
      <motion.div
        animate={{
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-0
          h-[280px]
          w-[280px]
          -translate-x-1/2
          rounded-full
          bg-cyan-500/20
          blur-[100px]
          md:h-[500px]
          md:w-[500px]
        "
      />

      {/* BOTTOM GLOW */}
      <motion.div
        animate={{
          opacity: [0.08, 0.16, 0.08],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-0
          right-0
          h-[220px]
          w-[220px]
          rounded-full
          bg-blue-500/10
          blur-[100px]
          md:h-[420px]
          md:w-[420px]
        "
      />

      {/* PARTICLES */}
      <motion.div
        animate={{
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="
          absolute
          left-1/4
          top-1/3
          hidden
          h-2
          w-2
          rounded-full
          bg-cyan-400
          shadow-[0_0_20px_#22d3ee]
          md:block
        "
      />

      <motion.div
        animate={{
          opacity: [0.1, 0.4, 0.1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-1/4
          right-1/3
          hidden
          h-2
          w-2
          rounded-full
          bg-blue-400
          shadow-[0_0_20px_#60a5fa]
          md:block
        "
      />
    </div>
  )
}