"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { CONTENT } from "@/lib/content";

export const Navbar = () => {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    });

    const navLinks = [
        { name: "Services", href: "#services" },
        { name: "Process", href: "#process" },
        { name: "Pricing", href: "#pricing" },
        { name: "FAQ", href: "#faq" },
    ];

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6">
            <motion.nav
                layout
                transition={{ duration: 0.3, type: "spring", stiffness: 100, damping: 20 }}
                className={cn(
                    "relative flex items-center px-6 py-3 transition-all duration-300",
                    isScrolled
                        ? "w-[min(90%,600px)] rounded-full border border-border/40 bg-background/80 shadow-lg backdrop-blur-md"
                        : "w-[95%] rounded-xl border-transparent bg-transparent"
                )}
            >
                <div className="flex-1 flex justify-start items-center gap-2">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 font-bold text-xl">
                        <img src="/hoopoe-bright.svg" alt="Hodhod" className="h-8 w-8" />
                        <span className={cn("hidden sm:block", isScrolled ? "text-lg" : "text-xl")}>
                            {CONTENT.startupTitle}
                        </span>
                    </Link>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* CTA */}
                <div className="flex-1 flex justify-end items-center gap-4">
                    <Link href="#contact">
                        <button
                            className={cn(
                                "rounded-full px-4 py-2 text-sm font-semibold text-white transition-all hover:opacity-90",
                                "bg-gradient-to-r from-[var(--color-brand-orange)] to-[var(--color-brand-pink)] shadow-md"
                            )}
                        >
                            {CONTENT.hero.cta}
                        </button>
                    </Link>
                </div>
            </motion.nav>
        </div>
    );
};
