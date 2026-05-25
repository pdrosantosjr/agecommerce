"use client"

import { motion } from "framer-motion"

interface WhatsAppFloatProps {
  whatsappNumber: string
}

export function WhatsAppFloat({
  whatsappNumber,
}: WhatsAppFloatProps) {

  return (
    <motion.a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{
        opacity: 0,
        scale: 0.8,
        y: 40,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        delay: 1,
      }}
      whileHover={{
        scale: 1.08,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="
        group
        fixed
        bottom-5
        right-5
        z-[9999]

        flex
        h-16
        w-16
        items-center
        justify-center

        rounded-full

        bg-[#25D366]

        shadow-[0_0_30px_rgba(37,211,102,0.45)]

        transition-all
        duration-300

        hover:shadow-[0_0_50px_rgba(37,211,102,0.7)]

        md:bottom-8
        md:right-8
      "
    >

      {/* Pulse Glow */}
      <div
        className="
          absolute
          inset-0
          rounded-full
          bg-[#25D366]
          opacity-40
          blur-xl
          animate-pulse
        "
      />

      {/* Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="white"
        className="relative z-10 h-8 w-8"
      >
        <path d="M19.11 17.24c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.19-1.35-.81-.72-1.36-1.61-1.52-1.88-.16-.27-.02-.41.12-.55.13-.13.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.45-.61-.46h-.52c-.18 0-.48.07-.73.34-.25.27-.96.93-.96 2.27 0 1.34.98 2.64 1.12 2.82.14.18 1.93 2.95 4.68 4.13.65.28 1.16.45 1.56.58.66.21 1.26.18 1.74.11.53-.08 1.6-.65 1.82-1.28.23-.63.23-1.16.16-1.28-.07-.11-.25-.18-.52-.32zM16.02 3C8.84 3 3 8.82 3 16c0 2.83.93 5.45 2.49 7.57L3.1 29l5.61-2.34A12.96 12.96 0 0016.02 29C23.2 29 29 23.18 29 16S23.2 3 16.02 3zm0 23.7c-2.23 0-4.29-.65-6.02-1.77l-.43-.27-3.33 1.39 1.42-3.24-.28-.45A10.63 10.63 0 015.4 16c0-5.86 4.76-10.62 10.62-10.62 2.84 0 5.5 1.1 7.5 3.11a10.56 10.56 0 013.12 7.5c0 5.86-4.76 10.62-10.62 10.62z" />
      </svg>

    </motion.a>
  )
}