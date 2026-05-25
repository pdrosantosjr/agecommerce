"use client"

import { useEffect, useRef } from "react"

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion"

interface AnimatedCounterProps {
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
}

export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
}: AnimatedCounterProps) {

  const ref =
    useRef<HTMLSpanElement | null>(null)

  const motionValue =
    useMotionValue(0)

  const springValue =
    useSpring(motionValue, {
      damping: 40,
      stiffness: 100,
    })

  useEffect(() => {

    motionValue.set(value)

    const unsubscribe =
      springValue.on("change", (latest) => {

        if (ref.current) {

          ref.current.textContent =
            prefix +
            latest.toFixed(decimals) +
            suffix

        }
      })

    return () => {
      unsubscribe()
    }

  }, [
    value,
    prefix,
    suffix,
    decimals,
    motionValue,
    springValue,
  ])

  return (
    <motion.span ref={ref}>
      0
    </motion.span>
  )
}