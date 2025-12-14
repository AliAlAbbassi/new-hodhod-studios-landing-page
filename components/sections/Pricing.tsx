"use client";
import React from "react";
import { CONTENT } from "@/lib/content";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

export const Pricing = () => {
    return (
        <section id="pricing" className="py-24 relative z-10">
            <div className="container px-4 mx-auto">
                <div className="max-w-xl mx-auto space-y-8">
                    <div className="text-center space-y-2">
                        <h2 className="text-3xl md:text-4xl font-bold">{CONTENT.pricing.title}</h2>
                        <p className="text-muted-foreground">{CONTENT.pricing.commitment}</p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="rounded-3xl border border-border bg-background/50 backdrop-blur-md p-8 md:p-12 shadow-2xl relative overflow-hidden"
                    >
                        {/* Glow effect */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[var(--color-brand-orange)]/10 blur-[80px] rounded-full pointer-events-none" />

                        <div className="relative z-10 text-center space-y-6 mb-8">
                            <div className="text-5xl md:text-6xl font-black tracking-tight flex items-center justify-center gap-2">
                                {CONTENT.pricing.price}
                                <span className="text-lg font-normal text-muted-foreground self-end mb-2">/mo</span>
                            </div>
                            <div className="inline-block px-4 py-1.5 rounded-full bg-green-500/10 text-green-600 text-sm font-semibold border border-green-500/20">
                                {CONTENT.pricing.guarantee}
                            </div>
                        </div>

                        <ul className="space-y-4 mb-8">
                            {CONTENT.pricing.includes.map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-[var(--color-brand-pink)] shrink-0 mt-0.5" />
                                    <span className="text-foreground/90">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <Link href="#contact" className="block">
                            <button className="w-full py-4 rounded-xl text-lg font-bold text-white bg-gradient-to-r from-[var(--color-brand-orange)] to-[var(--color-brand-pink)] hover:opacity-90 transition-opacity shadow-lg">
                                Get Started
                            </button>
                        </Link>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
