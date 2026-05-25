"use client"

import {
  Bell,
  Menu,
  Search,
} from "lucide-react"

interface TopbarProps {
  onMenuClick: () => void
}

export function Topbar({
  onMenuClick,
}: TopbarProps) {
  return (
    <header
      className="
        sticky top-0 z-30
        border-b border-white/10
        bg-[#050816]/80
        backdrop-blur-xl
      "
    >
      <div
        className="
          flex h-24 items-center
          justify-between
          px-6 md:px-8
        "
      >
        {/* Left */}
        <div className="flex items-center gap-4">

          {/* Mobile menu */}
          <button
            onClick={onMenuClick}
            className="
              flex h-12 w-12
              items-center justify-center
              rounded-2xl
              border border-white/10
              bg-white/[0.03]
              text-zinc-400
              transition-all
              duration-300

              hover:border-cyan-400/30
              hover:text-cyan-400

              lg:hidden
            "
          >
            <Menu size={20} />
          </button>

          {/* Search */}
          <div
            className="
              hidden md:flex
              items-center gap-3
              rounded-2xl
              border border-white/10
              bg-white/[0.03]
              px-5
              h-14
              w-[320px]
            "
          >
            <Search
              size={18}
              className="text-zinc-500"
            />

            <input
              placeholder="Pesquisar..."
              className="
                w-full
                bg-transparent
                text-white
                outline-none
                placeholder:text-zinc-500
              "
            />
          </div>

        </div>

        {/* Right */}
        <div className="flex items-center gap-4">

          <button
            className="
              flex h-12 w-12
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
            <Bell size={20} />
          </button>

          <div
            className="
              flex items-center gap-4
              rounded-2xl
              border border-white/10
              bg-white/[0.03]
              px-4 py-3
            "
          >
            <div
              className="
                h-12 w-12 rounded-full
                bg-gradient-to-br
                from-cyan-400
                to-blue-500
              "
            />

            <div className="hidden md:block">
              <p className="font-semibold">
                Admin
              </p>

              <p className="text-sm text-zinc-400">
                agêcommerce
              </p>
            </div>
          </div>

        </div>
      </div>
    </header>
  )
}