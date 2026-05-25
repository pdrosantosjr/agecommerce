"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { ReactNode } from "react"

interface MagneticButtonProps {
  children: ReactNode
  className?: string
}

export function MagneticButton({
  children,
  className,
}: MagneticButtonProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, {
    stiffness: 150,
    damping: 15,
  })

  const springY = useSpring(y, {
    stiffness: 150,
    damping: 15,
  })

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect()

    const width = rect.width
    const height = rect.height

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const moveX = (mouseX - width / 2) * 0.2
    const moveY = (mouseY - height / 2) * 0.2

    x.set(moveX)
    y.set(moveY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      className="hidden md:inline-block"
      style={{
        x: springX,
        y: springY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className={className}>
        {children}
      </div>
    </motion.div>
  )
}