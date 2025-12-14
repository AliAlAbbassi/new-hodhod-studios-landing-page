"use client";
import React from "react";
import { CONTENT } from "@/lib/content";
import { motion } from "framer-motion";

export const About = () => {
    return (
        <section id="about" className="py-20 bg-background/50 backdrop-blur-sm relative z-10">
            <div className="container px-4 mx-auto space-y-20">

                {/* Verse / Hook */}
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold leading-tight"
                    >
                        {CONTENT.verse.hook}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-muted-foreground font-medium"
                    >
                        “{CONTENT.verse.testimonial}”
                    </motion.p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {CONTENT.verse.features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-6 rounded-2xl border border-border/50 bg-background/40 hover:bg-background/60 transition-colors shadow-sm text-center font-semibold"
                        >
                            {feature}
                        </motion.div>
                    ))}
                </div>

                {/* What Is It */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-3xl font-bold">{CONTENT.whatIsIt.title}</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {CONTENT.whatIsIt.description}
                        </p>
                        <div className="p-4 rounded-lg bg-[var(--color-brand-orange)]/10 border border-[var(--color-brand-orange)]/20 text-[var(--color-brand-orange)] font-medium">
                            {CONTENT.whatIsIt.result}
                        </div>
                    </motion.div>

                    <div className="space-y-4">
                        {CONTENT.whatIsIt.process.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex gap-4 p-4 rounded-xl border border-border/30 bg-background/30 hover:bg-white/5 transition-colors"
                            >
                                <div className="h-10 w-10 shrink-0 rounded-full flex items-center justify-center bg-gradient-to-br from-[var(--color-brand-orange)] to-[var(--color-brand-pink)] text-white font-bold text-sm">
                                    {i + 1}
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">{step.title}</h4>
                                    <p className="text-muted-foreground text-sm">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};
