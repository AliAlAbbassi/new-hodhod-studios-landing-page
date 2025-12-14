import React from "react";
import Link from "next/link";
import { CONTENT } from "@/lib/content";

export const Footer = () => {
    return (
        <footer className="border-t border-border/40 bg-background/50 backdrop-blur-sm pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 font-bold text-xl mb-4">
                            <img src="/hoopoe-bright.svg" alt="Hodhod" className="h-8 w-8" />
                            <span>{CONTENT.startupTitle}</span>
                        </div>
                        <p className="text-muted-foreground max-w-sm">
                            {CONTENT.hero.subheadline}
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Company</h4>
                        <div className="flex flex-col gap-2">
                            <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground">About</Link>
                            <Link href="#services" className="text-sm text-muted-foreground hover:text-foreground">Services</Link>
                            <Link href="#pricing" className="text-sm text-muted-foreground hover:text-foreground">Pricing</Link>
                            <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Legal</h4>
                        <div className="flex flex-col gap-2">
                            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link>
                            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</Link>
                        </div>
                    </div>
                </div>
                <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-muted-foreground">
                        © {new Date().getFullYear()} Hodhod Studios. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        {/* Social Links or other icons could go here */}
                    </div>
                </div>
            </div>
        </footer>
    );
};
