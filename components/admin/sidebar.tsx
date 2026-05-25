"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  LayoutDashboard,
  Users,
  BarChart3,
  Settings,
  X,
  BadgeDollarSign,
  Building2,
} from "lucide-react"

interface SidebarProps {
  open: boolean
  onClose: () => void
}

const items = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/admin",
  },

  {
    label: "Leads",
    icon: Users,
    href: "/admin/leads",
  },

  {
    label: "Clientes",
    icon: Building2,
    href: "/admin/clients",
  },

  {
    label: "Financeiro",
    icon: BadgeDollarSign,
    href: "/admin/finance",
  },

  {
    label: "Analytics",
    icon: BarChart3,
    href: "/admin/analytics",
  },

  {
    label: "Configurações",
    icon: Settings,
    href: "/admin/settings",
  },
]

export function Sidebar({
  open,
  onClose,
}: SidebarProps) {
  const pathname = usePathname()

  return (
    <>
      {/* Overlay mobile */}
      {open && (
        <div
          onClick={onClose}
          className="
            fixed inset-0 z-40
            bg-black/70
            backdrop-blur-sm
            lg:hidden
          "
        />
      )}

      <aside
        className={`
          fixed left-0 top-0 z-50
          flex h-screen w-[280px]
          flex-col
          border-r border-white/10
          bg-[#07101f]
          transition-transform
          duration-300

          ${
            open
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        {/* Header */}
        <div
          className="
            flex items-center
            justify-between
            border-b border-white/10
            px-8 py-8
          "
        >
          <div>
            <Link href="/admin">
              <h1 className="text-4xl font-black">
                age
                <span className="text-cyan-400">
                  commerce
                </span>
              </h1>
            </Link>

            <p className="mt-2 text-zinc-400">
              Admin Dashboard
            </p>
          </div>

          {/* Close mobile */}
          <button
            onClick={onClose}
            className="
              flex h-10 w-10
              items-center justify-center
              rounded-xl
              border border-white/10
              text-zinc-400
              lg:hidden
            "
          >
            <X size={18} />
          </button>
        </div>

        {/* Menu */}
        <nav className="flex-1 px-4 py-8">
          <div className="space-y-2">

            {items.map((item) => {
              const Icon = item.icon

              const active =
                pathname === item.href

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className={`
                    flex items-center gap-4
                    rounded-2xl
                    px-5 py-4
                    transition-all
                    duration-300

                    ${
                      active
                        ? `
                          bg-cyan-400/10
                          text-cyan-400
                        `
                        : `
                          text-zinc-400
                          hover:bg-white/[0.03]
                          hover:text-white
                        `
                    }
                  `}
                >
                  <Icon size={22} />

                  <span className="font-medium">
                    {item.label}
                  </span>
                </Link>
              )
            })}

          </div>
        </nav>

        {/* Footer */}
        <div className="p-4">
          <div
            className="
              rounded-3xl
              border border-cyan-400/20
              bg-cyan-400/5
              p-5
            "
          >
            <p className="font-semibold text-white">
              Sistema operacional
            </p>

            <p className="mt-2 text-sm text-zinc-400">
              Painel premium da Agecommerce.
            </p>
          </div>
        </div>
      </aside>
    </>
  )
}