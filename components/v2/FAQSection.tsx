"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { FAQ } from "@/lib/faq";

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-paper-soft px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-4xl font-semibold tracking-[-0.02em] text-ink sm:text-6xl">
          Вопрос — ответ
        </h2>

        <div className="mt-10 divide-y divide-line border-t border-b border-line">
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-lg font-medium text-ink">{item.q}</span>
                  <Plus
                    size={20}
                    className={`shrink-0 text-ink/50 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-xl text-base leading-relaxed text-ink/60">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
