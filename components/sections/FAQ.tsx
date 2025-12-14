"use client";
import React from "react";
import { CONTENT } from "@/lib/content";
import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"; // Assuming shadcn installed accordion, check if installed

export const FAQ = () => {
    return (
        <section id="faq" className="py-24 relative z-10 bg-background/30">
            <div className="container px-4 mx-auto max-w-3xl space-y-12">
                <h2 className="text-3xl md:text-5xl font-bold text-center">{CONTENT.faq.title}</h2>

                <Accordion type="single" collapsible className="w-full space-y-4">
                    {CONTENT.faq.items.map((item, i) => (
                        <AccordionItem key={i} value={`item-${i}`} className="border border-border/50 rounded-lg px-4 bg-background/60">
                            <AccordionTrigger className="text-lg font-medium hover:no-underline hover:text-[var(--color-brand-orange)] transition-colors">
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground whitespace-pre-line leading-relaxed pb-4">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};
