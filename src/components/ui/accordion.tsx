"use client";

import * as React from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
  id?: string;
}

export function AccordionItem({
  title,
  children,
  isOpen = false,
  onToggle,
  id,
}: AccordionItemProps) {
  return (
    <div className="border-b border-beige-300/80 last:border-b-0 py-4">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 text-left font-heading text-lg font-bold text-charcoal-900 transition-all hover:text-terracotta-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 rounded-sm py-1"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={id ? `accordion-content-${id}` : undefined}
      >
        <span className="font-heading">{title}</span>
        
        {/* Accent-Colored Circle Toggle (+) */}
        <div
          className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 shadow-sm",
            isOpen
              ? "bg-charcoal-900 text-white rotate-180"
              : "bg-terracotta-500 text-white hover:bg-terracotta-600"
          )}
        >
          {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </div>
      </button>
      {isOpen && (
        <div
          id={id ? `accordion-content-${id}` : undefined}
          className="pb-3 pt-2 text-sm leading-relaxed text-slate-600 animate-in fade-in-50 duration-200 pr-12"
        >
          {children}
        </div>
      )}
    </div>
  );
}

interface AccordionProps {
  items: { id: string; question: string; answer: string }[];
}

export function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = React.useState<string | null>(items[0]?.id || null);

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full divide-y divide-beige-300/80">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          title={item.question}
          isOpen={openId === item.id}
          onToggle={() => handleToggle(item.id)}
        >
          <p>{item.answer}</p>
        </AccordionItem>
      ))}
    </div>
  );
}
