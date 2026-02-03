"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface GoldenRevealProps {
    defaultText: string;
    revealText: string;
    className?: string;
    delay?: number; // ms
    triggerOnLoad?: boolean;
}

export default function GoldenReveal({ defaultText, revealText, className = "", delay = 300, triggerOnLoad = false }: GoldenRevealProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [showReveal, setShowReveal] = useState(false);
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        if (triggerOnLoad && !hasLoaded) {
            // Initial sweep animation
            const timer = setTimeout(() => {
                setShowReveal(true);
                setTimeout(() => {
                    setShowReveal(false);
                    setHasLoaded(true);
                }, 2000); // Show for 2s then revert
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [triggerOnLoad, hasLoaded]);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isHovered) {
            timer = setTimeout(() => {
                setShowReveal(true);
            }, delay);
        } else if (hasLoaded || !triggerOnLoad) {
            setShowReveal(false);
        }
        return () => clearTimeout(timer);
    }, [isHovered, delay, hasLoaded, triggerOnLoad]);

    return (
        <div
            className={`relative inline-block cursor-pointer group ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative overflow-hidden">
                <AnimatePresence mode="wait">
                    {!showReveal ? (
                        <motion.span
                            key="default"
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="block"
                        >
                            {defaultText}
                        </motion.span>
                    ) : (
                        <motion.span
                            key="reveal"
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="block text-gold font-medium"
                        >
                            {revealText}
                        </motion.span>
                    )}
                </AnimatePresence>

                {/* Gold Sweep Line */}
                <motion.div
                    className="absolute bottom-0 left-0 h-[1px] bg-gold w-full"
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: showReveal ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                />
            </div>
        </div>
    );
}
