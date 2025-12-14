"use client";
import React from "react";
import { CONTENT } from "@/lib/content";
import { motion } from "framer-motion";
import Link from "next/link";

export const CTA = () => {
    return (
        <section id="contact" className="py-32 relative z-10 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-black/5" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--color-brand-orange)]/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container px-4 mx-auto relative z-10 text-center space-y-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl mx-auto"
                >
                    {CONTENT.cta.headline}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-xl md:text-2xl text-muted-foreground"
                >
                    {CONTENT.cta.subheadline}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <Link href="#">
                        <button className="px-10 py-5 text-xl font-bold text-white rounded-full bg-gradient-to-r from-[var(--color-brand-orange)] to-[var(--color-brand-pink)] hover:scale-105 transition-transform shadow-[0_4px_40px_rgba(255,26,102,0.4)]">
                            {CONTENT.cta.button}
                        </button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};
