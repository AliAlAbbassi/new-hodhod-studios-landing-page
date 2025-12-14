"use client";
import React from "react";
import { CONTENT } from "@/lib/content";
import { motion } from "framer-motion";
import { BrainScene } from "@/components/3d/BrainScene";

export const Services = () => {
    return (
        <section id="services" className="py-24 relative z-10">
            <div className="container px-4 mx-auto space-y-24">

                {/* B2B Calls Section */}
                <div className="space-y-12">
                    <div className="max-w-3xl mx-auto text-center space-y-4">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold"
                        >
                            {CONTENT.b2bCalls.title}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-muted-foreground whitespace-pre-line"
                        >
                            {CONTENT.b2bCalls.body}
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {CONTENT.b2bCalls.features.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-[var(--color-brand-orange)]/50 transition-colors"
                            >
                                <p className="font-medium">{feature}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Outbound Rep Section */}
                <div className="flex flex-col md:flex-row items-center gap-12 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-zinc-900 to-black text-white overflow-hidden relative">
                    {/* Background Noise/Gradient Element */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-brand-pink)]/20 blur-[100px] rounded-full pointer-events-none" />

                    <div className="flex-1 space-y-6 relative z-10">
                        <h3 className="text-2xl md:text-4xl font-bold">{CONTENT.outboundRep.title}</h3>
                        <div className="space-y-4 text-zinc-400">
                            <p>{CONTENT.outboundRep.description}</p>
                            <p>{CONTENT.outboundRep.subDescription}</p>
                        </div>
                    </div>

                    <div className="flex-1 relative z-10 w-full min-h-[300px]">
                        <div className="w-full h-full rounded-xl bg-zinc-800/50 border border-zinc-700/50 overflow-hidden">
                            <BrainScene />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
