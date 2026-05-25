"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect } from "react"

export function CursorGlow() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, {
    stiffness: 120,
    damping: 20,
  })

  const springY = useSpring(mouseY, {
    stiffness: 120,
    damping: 20,
  })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 200)
      mouseY.set(e.clientY - 200)
    }

    window.addEventListener("mousemove", move)

    return () => {
      window.removeEventListener("mousemove", move)
    }
  }, [mouseX, mouseY])

  return (
    <motion.div
      className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-30
        hidden
        h-[400px]
        w-[400px]
        rounded-full
        bg-cyan-500/10
        blur-3xl
        md:block
      "
      style={{
        x: springX,
        y: springY,
      }}
    />
  )
}