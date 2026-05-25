"use client"

import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

export function Accordion({
  className,
  children,
  type,
  collapsible,
}: {
  className?: string
  children: React.ReactNode
  type: "single" | "multiple"
  collapsible?: boolean
}) {
  return (
    <AccordionPrimitive.Root
      type={type}
      collapsible={collapsible}
      className={cn("w-full", className || "")}
    >
      {children}
    </AccordionPrimitive.Root>
  )
}

export function AccordionItem({
  className,
  ...props
}: AccordionPrimitive.AccordionItemProps) {
  return (
    <AccordionPrimitive.Item
      className={cn("border-b border-white/10", className || "")}
      {...props}
    />
  )
}

export function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionPrimitive.AccordionTriggerProps) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn(
          "flex flex-1 items-center justify-between py-4 text-left font-medium transition-all hover:text-cyan-400",
          className || ""
        )}
        {...props}
      >
        {children}

        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

export function AccordionContent({
  className,
  children,
  ...props
}: AccordionPrimitive.AccordionContentProps) {
  return (
    <AccordionPrimitive.Content
      className="overflow-hidden text-sm"
      {...props}
    >
      <div className={cn("pb-4", className || "")}>
        {children}
      </div>
    </AccordionPrimitive.Content>
  )
}