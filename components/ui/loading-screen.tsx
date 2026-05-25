"use client"

import { useEffect, useState }
from "react"

import { motion, AnimatePresence }
from "framer-motion"

export function LoadingScreen() {

  const [mounted, setMounted] =
    useState(false)

  useEffect(() => {

    setMounted(true)

    const timer =
      setTimeout(() => {
        setMounted(false)
      }, 1800)

    return () =>
      clearTimeout(timer)

  }, [])

  return (
    <AnimatePresence>

      {mounted && (

        <motion.div
          initial={{
            opacity: 1,
          }}

          animate={{
            opacity: 1,
          }}

          exit={{
            opacity: 0,
          }}

          transition={{
            duration: 0.6,
          }}

          className="
            fixed inset-0 z-[999999]
            flex items-center justify-center
            bg-[#050816]
            pointer-events-none
          "
        >

          {/* Glow */}
          <motion.div
            animate={{
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.1, 1],
            }}

            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}

            className="
              absolute
              h-[320px]
              w-[320px]
              rounded-full
              bg-cyan-500/20
              blur-3xl
            "
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center">

            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.8,
              }}

              className="
                text-5xl
                font-black
                tracking-tight
                text-cyan-400
                md:text-7xl
              "
            >
              agêcommerce
            </motion.h1>

            <motion.div
              initial={{
                width: 0,
                opacity: 0,
              }}

              animate={{
                width: 220,
                opacity: 1,
              }}

              transition={{
                duration: 1.2,
                delay: 0.2,
              }}

              className="
                mt-8
                h-[2px]
                bg-gradient-to-r
                from-transparent
                via-cyan-400
                to-transparent
              "
            />

          </div>

        </motion.div>

      )}

    </AnimatePresence>
  )
}