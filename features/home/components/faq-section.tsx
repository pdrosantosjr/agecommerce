"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface FAQSectionProps {
  faqItems: {
    id: string
    question: string
    answer: string
  }[]
}

export function FAQSection({
  faqItems,
}: FAQSectionProps) {

  return (
    <section
      id="faq"
      className="px-6 py-24 md:py-32"
    >

      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="text-center">

          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            FAQ
          </p>

          <h2 className="mt-6 text-5xl font-black text-white md:text-6xl">
            Perguntas frequentes
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            Tire dúvidas sobre nossa operação, processos e crescimento.
          </p>

        </div>

        {/* Accordion */}
        <div className="mt-14">

          <Accordion
            type="single"
            collapsible
            className="space-y-4"
          >

            {faqItems.map((item) => (

              <AccordionItem
                key={item.id}
                value={item.id}
                className="
                  rounded-[28px]
                  border border-white/10
                  bg-white/[0.03]
                  px-6
                "
              >

                <AccordionTrigger
                  className="
                    py-6
                    text-left
                    text-lg
                    font-semibold
                    text-white
                  "
                >
                  {item.question}
                </AccordionTrigger>

                <AccordionContent
                  className="
                    pb-6
                    text-base
                    leading-relaxed
                    text-zinc-400
                  "
                >
                  {item.answer}
                </AccordionContent>

              </AccordionItem>

            ))}

          </Accordion>

        </div>

      </div>

    </section>
  )
}