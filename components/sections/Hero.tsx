"use client";

import React from "react";
import { HeroScene } from "@/components/3d/HeroScene";
import { CONTENT } from "@/lib/content";
import Link from "next/link";
import { motion } from "framer-motion";

export const Hero = () => {
    return (
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20">
            <HeroScene />

            <div className="container px-4 relative z-10 flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-[var(--color-brand-orange)] uppercase bg-orange-500/10 rounded-full border border-orange-500/20 mb-6">
                        {CONTENT.qualifier}
                    </span>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground text-balance">
                        {CONTENT.hero.headline}
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl md:text-2xl text-muted-foreground text-balance max-w-2xl"
                >
                    {CONTENT.hero.subheadline}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 items-center"
                >
                    <Link href="#contact">
                        <button className="px-8 py-4 text-base font-bold text-white rounded-full bg-gradient-to-r from-[var(--color-brand-orange)] to-[var(--color-brand-pink)] hover:opacity-90 shadow-[0_0_20px_rgba(255,153,26,0.5)] transition-all transform hover:scale-105">
                            {CONTENT.hero.cta}
                        </button>
                    </Link>

                    <Link href="#about">
                        <button className="px-8 py-4 text-base font-semibold text-foreground/80 bg-background/50 backdrop-blur-sm border border-border/50 rounded-full hover:bg-background/80 transition-all">
                            Learn More
                        </button>
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-muted-foreground"
                >
                    {CONTENT.hero.valueProp.map((prop, i) => (
                        <div key={i} className="flex items-center justify-center gap-2 p-4 rounded-xl border border-border/30 bg-background/20 backdrop-blur-sm">
                            <span>{prop}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
